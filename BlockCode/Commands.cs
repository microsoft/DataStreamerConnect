/*
Copyright(c) Microsoft Corp. All rights reserved.

The MIT License(MIT)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions :
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

using ArduinoSelector;
using UploaderComponent;
using ArduinoProviders;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading;
using System.Threading.Tasks;
using Windows.ApplicationModel;
using Windows.ApplicationModel.AppService;
using Windows.Devices.Adc;
using Windows.Devices.Bluetooth.Rfcomm;
using Windows.Devices.Enumeration;
using Windows.Devices.Gpio;
using Windows.Devices.I2c;
using Windows.Devices.Pwm;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.Foundation.Metadata;
using Windows.UI.Notifications;


namespace BlockCode
{
    [AllowForWeb]
    public static class Commands
    {
        private static bool initialized = false;
        private static GpioController gpioController;
        private static PwmController pwmController;
        private static AdcController adcController;
        private static I2cController i2cController;
        private static AppServiceConnection dataStreamerConnectAppService;
        private static Microsoft.Maker.Firmata.UwpFirmata uwpFirmata;
        private static ArduinoFirmataProvider firmataProvider = null;

        private static short _ArduinoPinCount = 20;
        private static GpioPin[] _GPIOPin = new GpioPin[_ArduinoPinCount];
        private static PwmPin[] _PWMPin = new PwmPin[_ArduinoPinCount];
        private static AdcChannel[] _ADCPin = new AdcChannel[_ArduinoPinCount];

        // Varialbles for distance callback data
        private static bool distanceDataAvailable = false;
        private static ulong distance;

        const byte Pulse_In = 0x42;
        const byte Distance = 0x43;
        const byte Protocol_Version = 0xF9;

        //Instantiate a Singleton of the Semaphore with a value of 1. This means that only 1 thread can be granted access at a time.
        static SemaphoreSlim semaphoreSlim = new SemaphoreSlim(1, 1);

        /// <summary>
        /// Creates an Informative Toast Notification which will disappear after the allotted time.
        /// </summary>
        /// <param name="title">Title of the toast.</param>
        /// <param name="message">Message to display.</param>
        /// <param name="duration">Duration (in seconds) for toast to appear.</param>
        public async static void MakeToast(string title, string message, int duration)
        {
            // TODO: Need to review whether this method really needs to be async
            // TODO: Need to get rid of this - Do stupid delay to get rid of CS1998
            await Task.Delay(1);

            // The GetTemplateContent method returns a Windows.Data.Xml.Dom.XmlDocument object
            // that contains the toast notification XML content.
            var toastXml = ToastNotificationManager.GetTemplateContent(ToastTemplateType.ToastImageAndText02);

            // You can use the methods from the XML document to specify the required elements for the toast.
            var images = toastXml.GetElementsByTagName("image");
            // Note: Asset grabbed from PWA Package.
            images.Item(0).Attributes.GetNamedItem("src").NodeValue = "ms-appx:///Assets/LargeTile310.png";

            // Inject text
            var textNodes = toastXml.GetElementsByTagName("text");
            textNodes.Item(0).AppendChild(toastXml.CreateTextNode(title));
            textNodes.Item(1).AppendChild(toastXml.CreateTextNode(message));

            // Create a toast notification from the XML, then create a ToastNotifier object
            // to send the toast.
            var toast = new ToastNotification(toastXml)
            {
                ExpirationTime = DateTime.Now.AddSeconds(duration)
            };

            ToastNotificationManager.CreateToastNotifier().Show(toast);
        }


        /// <summary>
        /// Writes a HIGH/TRUE or LOW/FALSE value to the specified pin
        /// </summary>
        /// <param name="pinNumber">Number of the pin to use. pins A0-A6 come after the digital pins 2-13.</param>
        /// <param name="message">TRUE is the device HIGH voltage, FALSE is the LOW voltage</param>
        public static IAsyncAction DigitalWriteAsync(int pinNumber, bool state)
        {
            return InitAsync().ContinueWith((result) =>
            {
                try
                {
                    // We might try to write before we have finished connection
                    if (gpioController != null)
                    {
                        if (_GPIOPin[pinNumber] == null)
                        {
                            _GPIOPin[pinNumber] = gpioController.OpenPin(pinNumber);
                        }

                        _GPIOPin[pinNumber].SetDriveMode(GpioPinDriveMode.Output);

                        if (state)
                            _GPIOPin[pinNumber].Write(GpioPinValue.High);
                        else
                            _GPIOPin[pinNumber].Write(GpioPinValue.Low);
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine($"Writepin failed: " + e.Message);
                }

            }).AsAsyncAction();
        }


        /// <summary>
        /// Initializes the Remote Arduino Provider and stores the handles to the 4 controllers. Only runs once.
        /// </summary>
        private static async Task InitAsync()
        {
            await semaphoreSlim.WaitAsync();
            try
            {
                if (!initialized)
                {
                    // Change this to true for Bluetooth and false for USB
                    bool UseBluetooth = false;
                    bool configurationFound = false;
                    DeviceInformation connectedDeviceInformation = null;

                    if (UseBluetooth)
                    {
                        // This assumes that there is only one BT SPP device on the computer. If there are multiple devices
                        // the you will need to identify the device from the list returned from FindAllAsync() and use
                        // that one as the device to pass to the arduino provider
                        string spp_aqs = RfcommDeviceService.GetDeviceSelector(RfcommServiceId.SerialPort);
                        DeviceInformationCollection deviceList = await DeviceInformation.FindAllAsync(spp_aqs);
                        if (deviceList.Count > 0)
                        {
                            DeviceInformation device = deviceList[0];

                            // Remember to ensure that the Firmata Sketch has the baud rate set to the same default as the BT device
                            ArduinoProviders.ArduinoProvider.Configuration = new ArduinoProviders.ArduinoConnectionConfiguration(device, 57600);
                            configurationFound = true;
                        }
                        else
                        {
                            Debug.WriteLine("No bluetooth connected Arduino found");
                        }
                    }
                    else
                    {
                        Selector selector = new Selector();
                        IEnumerable<ArduinoDeviceListEntry> list = await selector.GetDeviceList();
                        if (list.Count() > 0)
                        {
                            var listArray = list.ToArray();

                            connectedDeviceInformation = listArray[0].DeviceInformation;
                            ArduinoProviders.ArduinoProvider.Configuration = new ArduinoProviders.ArduinoConnectionConfiguration(connectedDeviceInformation, 57600);
                            configurationFound = true;
                        }
                        else
                        {
                            Debug.WriteLine("No USB Connected Ardino found");
                        }
                    }

                    // we can't use a null check on Configuration as it will auto allocate and be in an invalid state
                    if (configurationFound)
                    {
                        // Check our firmata and make sure we are good, if not we will flash the device with our required MakeCode specific firmata
                        int retry = 2;
                        bool FirmwareUploadRequired = false;

                        while (retry-- > 0)
                        {
                            FirmwareUploadRequired = false;
                            try
                            {
                                if (firmataProvider == null)
                                {
                                    firmataProvider = new ArduinoProviders.ArduinoFirmataProvider();
                                }
                                bool firmataInitOk = false;
                                try
                                {
                                    firmataInitOk = await firmataProvider.InitializeAsync();
                                }
                                catch (Exception e)
                                {
                                    Debug.WriteLine(e.Message);
                                }

                                if (firmataInitOk == true)
                                {
                                    // there is a firmata version on the device now.  Check if it is what we need.
                                    int MajorVersion = firmataProvider.FirmataInstance.getFirmwareVersionMajor();
                                    int MinorVersion = firmataProvider.FirmataInstance.getFirmwareVersionMinor();

                                    String FirmwareName = firmataProvider.FirmataInstance.getFirmwareName();
                                    Debug.WriteLine($"Arduino with Firmata found Version {MajorVersion}.{MinorVersion} {FirmwareName}");
                                    if (String.Compare(FirmwareName, "MakeCodeFirmata.ino", StringComparison.OrdinalIgnoreCase) != 0)
                                    {
                                        // Not the makecode firmware so need to upload it
                                        FirmwareUploadRequired = true;
                                    }
                                    else
                                    {
                                        // Makecode firmware, but is it the required version?
                                        // TODO: Version check
                                    }
                                }
                                else
                                {
                                    // No firmata on the device
                                    FirmwareUploadRequired = true;
                                }
                            }
                            catch (Exception ex)
                            {
                                Debug.WriteLine("Failed to get Firmata Instance: " + ex.Message);
                                FirmwareUploadRequired = true;
                            }

                            if (FirmwareUploadRequired)
                            {
                                Debug.WriteLine("Firmata update required");
                                // Need to close our current connection if any
                                if (firmataProvider != null)
                                {
                                    firmataProvider.Dispose();
                                    firmataProvider = null;

                                    ArduinoProvider.Close();
                                }

                                Arduino arduino = Arduino.GetArduino(connectedDeviceInformation.Id);

                                await arduino.Connect();

                                var programmer = arduino.GetProgrammer();

                                await programmer.Program("ms-appx:///BlockCode/MakeCodeFirmata/MakeCodeFirmata.ino.standard.hex", 28672);

                                // Now let the arduino go so we can reopen it in non progamming mode.
                                arduino.Dispose();

                                // And we will let it cycle again to verify
                                Debug.WriteLine("Arduino Firmata updated ");
                                return;
                            }
                            else
                            {
                                // Have a good firmware so store it and setup our callback
                                uwpFirmata = firmataProvider.FirmataInstance;
                                uwpFirmata.SysexMessageReceived += UwpFirmata_SysexMessageReceived;
                                retry = 0;
                            }
                        }

                        if (uwpFirmata == null)
                        {
                            // not going to be able to go on.
                            Debug.WriteLine("Arduino Firmata Initalization failed");
                            return;
                        }

                        // Now that we have a good firmata we can do the other connections
                        Windows.Devices.LowLevelDevicesController.DefaultProvider = new ArduinoProviders.ArduinoProvider();

                        gpioController = await GpioController.GetDefaultAsync();
                        pwmController = await PwmController.GetDefaultAsync();
                        adcController = await AdcController.GetDefaultAsync();
                        i2cController = await I2cController.GetDefaultAsync();

                        if (
                            (gpioController != null) &&
                            (pwmController != null) &&
                            (adcController != null) &&
                            (i2cController != null) &&
                            (uwpFirmata != null)
                            )
                        {
                            // We got good initialzation
                            initialized = true;


                        }
                    }
                    else
                    {
                        // Something went wrong with init
                        Debug.WriteLine("Arduino Initalization failed");
                    }

                }

                else
                {
                    // Duplicate initalization, we can just ignore this
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Arduino Initalization failed: " + e.Message);
            }
            finally
            {
                // When the task is ready, release the semaphore. It is vital to ALWAYS release the semaphore when we are ready, 
                // or else we will end up with a Semaphore that is forever locked.
                // This is why it is important to do the Release within a try...finally clause; 
                // program execution may crash or take a different path, this way you are guaranteed execution
                semaphoreSlim.Release();
            }
        }

        public static void ReadDistanceIn(int triggerPin, int echoPin)
        {
            try
            {
                if (uwpFirmata != null)
                {
                    byte[] commandData = new byte[2];
                    commandData[0] = Convert.ToByte(triggerPin);
                    commandData[1] = Convert.ToByte(echoPin);

                    distanceDataAvailable = false;
                    uwpFirmata.sendSysex(Distance, commandData.AsBuffer());
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }
        }

        private static void UwpFirmata_SysexMessageReceived(Microsoft.Maker.Firmata.UwpFirmata caller, Microsoft.Maker.Firmata.SysexCallbackEventArgs argv)
        {
            var data = argv.getDataBuffer().ToArray();

            switch (argv.getCommand())
            {
                case Distance:
                    distance = (ulong)(data[0] + (data[1] * 128));

                    distanceDataAvailable = true;
                    break;

                case Protocol_Version:
                    HandleFirmataVersion(data);
                    break;

                default:
                    break;
            }
        }

        private static void HandleFirmataVersion(byte[] data)
        {
            string ver = Convert.ToString(data);
        }

        public static IAsyncOperation<ulong> GetDistanceAsync(int triggerPin, int echoPin)
        {
            return InitAsync().ContinueWith((result) =>
            {
                ReadDistanceIn(triggerPin, echoPin);

                while (distanceDataAvailable == false) { }

                return distance;
            }).AsAsyncOperation();
        }

        //TODO: Remove this if the string split works in JAvaScript
        public static IAsyncOperation<string> SplitStringAsync(string data, int itemnumber)
        {
            return InitAsync().ContinueWith((result) =>
            {
                var dataArray = data.Split(',');

                return dataArray[itemnumber];

            }).AsAsyncOperation();
        }

        /// <summary>
        /// Read a HIGH/TRUE or LOW/FALSE value to the specified pin
        /// </summary>
        /// <param name="pinNumber">Number of the pin to use. pins A0-A6 come after the digital pins 2-13.</param>
        /// <returns>Returns a boolean value that is TRUE for device HIGH voltage and FALSE for device LOW</returns>
        public static IAsyncOperation<bool> DigitalReadAsync(int pinNumber)
        {
            return InitAsync().ContinueWith((result) =>
            {
                bool returnValue = false;
                try
                {
                    // We might try to write before we have finished connection
                    if (gpioController != null)
                    {
                        if (_GPIOPin[pinNumber] == null)
                            _GPIOPin[pinNumber] = gpioController.OpenPin(pinNumber);
                        _GPIOPin[pinNumber].SetDriveMode(GpioPinDriveMode.Input);

                        switch (_GPIOPin[pinNumber].Read())
                        {
                            case GpioPinValue.High:
                                returnValue = true;
                                break;
                            case GpioPinValue.Low:
                                returnValue = false;
                                break;
                            default:
                                returnValue = false;
                                break;
                        }
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine(e.Message);
                }

                return returnValue;
            }).AsAsyncOperation();
        }

        /// <summary>
        /// Enables PWM as a percentage value on the device PWM pins (check the device HW description for the pin numbers).
        /// </summary>
        /// <param name="pinNumber">Number of the pin to use</param>
        /// <param name="state">The % value for the duty cycle with 100 being fully on and 0 being fully off</param>
        public static IAsyncAction PwmWriteAsync(int pinNumber, int state)
        {
            return InitAsync().ContinueWith((result) =>
            {
                try
                {
                    // We might try to write before we have finished connection
                    if (pwmController != null)
                    {
                        if (state <= 0)
                            state = 0;
                        else if (state >= 100)
                            state = 100;

                        var pwmValue = state / 100.0;

                        if (_PWMPin[pinNumber] == null)
                            _PWMPin[pinNumber] = pwmController.OpenPin(pinNumber);

                        if (_PWMPin[pinNumber].IsStarted)
                            _PWMPin[pinNumber].Stop();

                        _PWMPin[pinNumber].SetActiveDutyCyclePercentage(pwmValue);
                        _PWMPin[pinNumber].Start();
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine(e.Message);
                }
            }).AsAsyncAction();
        }

        /// <summary>
        /// Read value from the specified ADC channel on the device.
        /// </summary>
        /// <param name="pinNumber">Number of the pin to use. These are typically the pins on the device that are connected to the ADC. For example on an Arduino they are pin A0-A6 but are used as pins 0-6.</param>
        /// <param name="message">A value representing what was read in terms of the ADC resolution. A 10-bit ADC will have a range from 0-1024</param>
        public static IAsyncOperation<int> AnalogReadAsync(int pinNumber)
        {
            return InitAsync().ContinueWith((result) =>
            {
                int adcResult = 0;
                try
                {
                    // We might try to use the pin before connection is finished
                    if (adcController != null)
                    {
                        if (_ADCPin[pinNumber] == null)
                            _ADCPin[pinNumber] = adcController.OpenChannel(pinNumber);

                        adcResult = _ADCPin[pinNumber].ReadValue();
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine(e.Message);
                }

                return adcResult;

            }).AsAsyncOperation();

        }

        /// <summary>
        /// Initialize the App Service
        /// </summary>
        public static IAsyncAction InitServiceAsync()
        {
            return InitAsync().ContinueWith(async (result) =>
            {
                if (dataStreamerConnectAppService == null)
                {
                    dataStreamerConnectAppService = new AppServiceConnection();

                    dataStreamerConnectAppService.AppServiceName = "com.microsoft.datastreamerconnect";
                    dataStreamerConnectAppService.PackageFamilyName = Package.Current.Id.FamilyName;

                    try
                    {
                        var status = await dataStreamerConnectAppService.OpenAsync();

                        if (status != AppServiceConnectionStatus.Success)
                        {
                            dataStreamerConnectAppService = null;
                        }

                        var initialStatus = new ValueSet { { "Command", "Connect" }, { "Role", "DataStreamerConnect" } };
                        var response = await dataStreamerConnectAppService.SendMessageAsync(initialStatus);
                    }
                    catch (Exception ex)
                    {
                        Debug.WriteLine("Failed to open app service: " + ex.Message);
                    }
                }
            }).AsAsyncAction();
        }

        public static IAsyncAction WriteMessageAsync(string message)
        {
            return InitAsync().ContinueWith(async (result) =>
            {
                try
                {
                    var AppServiceMessage = new ValueSet { { "Command", "WriteThrough" }, { "Message", message } };

                    await SendCommand(AppServiceMessage);
                }
                catch (Exception e)
                {
                    Debug.WriteLine(e.Message);
                }

            }).AsAsyncAction();
        }

        public static IAsyncOperation<ValueSet> SendCommandAsync(string command, string param)
        {
            var AppServiceMessage = new ValueSet { { "Command", command }, { "Data", param } };

            return SendCommand(AppServiceMessage).ContinueWith<ValueSet>((result) =>
            {
                return result.Result;
            }).AsAsyncOperation();
        }

        private static async Task<ValueSet> SendCommand(ValueSet message)
        {
            // If the connection is null then try to create it
            if (dataStreamerConnectAppService == null)
            {
                await InitServiceAsync();
            }

            // Check to see if the connection was created before trying to send
            if (dataStreamerConnectAppService != null)
            {
                try
                {
                    var response = await dataStreamerConnectAppService.SendMessageAsync(message);

                    if (response.Status == AppServiceResponseStatus.Success)
                    {
                        return response.Message;
                    }
                    else
                    {
                        return new ValueSet { { "Failed to send", response.Status.ToString() } };
                    }
                }
                catch (Exception ex)
                {
                    return new ValueSet { { "Exception on sending", ex.Message } };
                }
            }
            else
            {
                return new ValueSet { { "Connection error", "DataStreamer not connected" } };
            }
        }

        public static IAsyncOperation<float> GetTempAsync(int pinNumber)
        {
            return InitAsync().ContinueWith((result) =>
            {
                float tempResult = 0;

                try
                {
                    // We might try to use the pin before connection is finished
                    if (adcController != null)
                    {
                        if (_ADCPin[pinNumber] == null)
                            _ADCPin[pinNumber] = adcController.OpenChannel(pinNumber);

                        tempResult = (5 / _ADCPin[pinNumber].ReadValue()) * 10; // This assumes a 5V Arduino
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine(e.Message);
                }

                return tempResult;

            }).AsAsyncOperation();

        }

    }
}
