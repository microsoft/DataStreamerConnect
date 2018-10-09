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

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Windows.Devices.Enumeration;
using Windows.Foundation;
using Windows.Storage;

namespace ArduinoSelector
{
    public sealed class Selector
    {
        private ArduinoDeviceInformationConfiguration arduinoDeviceInformationConfiguration = new ArduinoDeviceInformationConfiguration();
        private Dictionary<DeviceWatcher, String> mapDeviceWatchersToDeviceSelector;

        private ObservableCollection<ArduinoDeviceListEntry> listOfDevices;
        public IEnumerable<ArduinoDeviceListEntry> ListOfDevices { get => listOfDevices; }

        int enumerationsPending = 0;

        //Instantiate a Singleton of the Semaphore with a value of 1. This means that only 1 thread can be granted access at a time.
        static SemaphoreSlim semaphoreSlim = new SemaphoreSlim(1, 1);

        String FileName = "VidPid.xml";

        public Selector()
        {
        }

        /// <summary>
        /// InitializeVidPidList
        /// Try and load the vid pid configuration file from the user local space.  This gives them a place they
        /// can edit the file at.
        /// 
        /// If for any reason we can't load it we will initialize with some well known default values from the included configuration file,
        /// and then write it back out to the user local space.
        /// 
        /// If we can't read the built in file we will use hardcoded values and seed from that.
        /// 
        /// </summary>
        private async Task InitializeVidPIdLIst()
        {
            bool usingDefault = false;
            try
            {
                StorageFolder storageFolder;
                StorageFile storageFile;
                try
                {
                    storageFolder = ApplicationData.Current.LocalFolder;
                    storageFile = await storageFolder.GetFileAsync(FileName);
                }
                catch(FileNotFoundException fnfe)
                {
                    Debug.WriteLine(fnfe.Message);
                    // That is fine on first run, default to the file built into the project
                    Uri uri = new Uri("ms-appx:///ArduinoSelector/Configuration/" + FileName);
                    storageFile = await StorageFile.GetFileFromApplicationUriAsync(uri);
                    usingDefault = true;
                }

                string content = await FileIO.ReadTextAsync(storageFile);

                XmlSerializer serializer = new XmlSerializer(typeof(ArduinoDeviceInformationConfiguration));

                arduinoDeviceInformationConfiguration = (ArduinoDeviceInformationConfiguration)serializer.Deserialize(new StringReader(content));
            }
            catch (Exception e)
            {
                // Unexpected exception, possible corrupt file.
                Debug.WriteLine(e.Message);
            }
            finally
            {
                // Verify we have a good data set now
                if (usingDefault || arduinoDeviceInformationConfiguration.ArduinoDeviceInformationList == null || arduinoDeviceInformationConfiguration.ArduinoDeviceInformationList.Count() == 0)
                {
                    // something wrong with the file, lets create it for next time.  Will also default the data we needed
                    await CreateDefaultFile();
                }
            }
        }

        internal async Task CreateDefaultFile()
        {
            // Initialize to well known set if we don't have data from the default config file (or the file is messed up)
            if (arduinoDeviceInformationConfiguration.ArduinoDeviceInformationList == null)
            {
                arduinoDeviceInformationConfiguration.ArduinoDeviceInformationList = new ArduinoDeviceInformation[]
                {
                    new ArduinoDeviceInformation(0x2341, 0x0043), // "Uno", 
                    new ArduinoDeviceInformation(0x2341, 0x0243), // "Uno", 
                    new ArduinoDeviceInformation(0x2341, 0x8041)  // "Yun", for testing
                };
            }

            // write it out
            try
            {
                StorageFolder storageFolder = ApplicationData.Current.LocalFolder;
                StorageFile storageFile = await storageFolder.CreateFileAsync(FileName, CreationCollisionOption.ReplaceExisting);
                XmlSerializer serializer = new XmlSerializer(typeof(ArduinoDeviceInformationConfiguration));

                StringWriter stringWriter = new StringWriter();
                serializer.Serialize(stringWriter, arduinoDeviceInformationConfiguration);
                string content = stringWriter.ToString();

                await FileIO.WriteTextAsync(storageFile, content);
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }

        }

        internal void Start()
        {
            mapDeviceWatchersToDeviceSelector = new Dictionary<DeviceWatcher, String>();
            listOfDevices = new ObservableCollection<ArduinoDeviceListEntry>();

            StartDeviceEnumeration();
        }

        internal void StartDeviceEnumeration()
        {
            foreach (var adi in arduinoDeviceInformationConfiguration.ArduinoDeviceInformationList)
            {
                // Create a selector string for this particular pid / vid set
                string deviceSelector = Windows.Devices.SerialCommunication.SerialDevice.GetDeviceSelectorFromUsbVidPid(adi.Vid, adi.Pid);

                // Create a device watcher to look for instances of the Serial Device that match the device selector
                // used earlier.
                var deviceWatcher = DeviceInformation.CreateWatcher(deviceSelector);

                // Allow the EventHandlerForDevice to handle device watcher events that relates or effects our device (i.e. device removal, addition, app suspension/resume)
                AddDeviceWatcher(deviceWatcher, deviceSelector);

                StartDeviceWatchers();
            }
        }

        /// <summary>
        /// Starts all device watchers including ones that have been individually stopped.
        /// </summary>
        private void StartDeviceWatchers()
        {
            // Start all device watchers
 
            foreach (DeviceWatcher deviceWatcher in mapDeviceWatchersToDeviceSelector.Keys)
            {
                if ((deviceWatcher.Status != DeviceWatcherStatus.Started)
                    && (deviceWatcher.Status != DeviceWatcherStatus.EnumerationCompleted))
                {
                    deviceWatcher.Start();
                    enumerationsPending++;
                }
            }
        }

        /// <summary>
        /// Registers for Added, Removed, and Enumerated events on the provided deviceWatcher before adding it to an internal list.
        /// </summary>
        /// <param name="deviceWatcher"></param>
        /// <param name="deviceSelector">The AQS used to create the device watcher</param>
        private void AddDeviceWatcher(DeviceWatcher deviceWatcher, String deviceSelector)
        {
            deviceWatcher.Added += new TypedEventHandler<DeviceWatcher, DeviceInformation>(OnDeviceAdded);
            deviceWatcher.Removed += new TypedEventHandler<DeviceWatcher, DeviceInformationUpdate>(OnDeviceRemoved);
            deviceWatcher.EnumerationCompleted += new TypedEventHandler<DeviceWatcher, Object>(OnDeviceEnumerationComplete);

            mapDeviceWatchersToDeviceSelector.Add(deviceWatcher, deviceSelector);
        }

        /// <summary>
        /// This function will add the device to the listOfDevices so that it shows up in the UI
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="deviceInformation"></param>
        private void OnDeviceAdded(DeviceWatcher sender, DeviceInformation deviceInformation)
        {
            AddDeviceToList(deviceInformation, mapDeviceWatchersToDeviceSelector[sender]);
        }

        /// <summary>
        /// We will remove the device from the UI
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="deviceInformationUpdate"></param>
        private void OnDeviceRemoved(DeviceWatcher sender, DeviceInformationUpdate deviceInformationUpdate)
        {
            RemoveDeviceFromList(deviceInformationUpdate.Id);
        }

        /// <summary>
        /// Notify the UI whether or not we are connected to a device
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="args"></param>
        private void OnDeviceEnumerationComplete(DeviceWatcher sender, Object args)
        {
            enumerationsPending--;
        }

        /// <summary>
        /// Creates a DeviceListEntry for a device and adds it to the list of devices in the UI
        /// </summary>
        /// <param name="deviceInformation">DeviceInformation on the device to be added to the list</param>
        /// <param name="deviceSelector">The AQS used to find this device</param>
        private void AddDeviceToList(DeviceInformation deviceInformation, String deviceSelector)
        {
            // search the device list for a device with a matching interface ID
            var match = FindDevice(deviceInformation.Id);

            // Add the device if it's new
            if (match == null)
            {
                // Create a new element for this device interface, and queue up the query of its
                // device information
                match = new ArduinoDeviceListEntry(deviceInformation, deviceSelector);

                // Add the new element to the end of the list of devices
                listOfDevices.Add(match);
            }
        }

        private void RemoveDeviceFromList(String deviceId)
        {
            // Removes the device entry from the interal list; therefore the UI
            var deviceEntry = FindDevice(deviceId);

            listOfDevices.Remove(deviceEntry);
        }

        /// <summary>
        /// Searches through the existing list of devices for the first DeviceListEntry that has
        /// the specified device Id.
        /// </summary>
        /// <param name="deviceId">Id of the device that is being searched for</param>
        /// <returns>DeviceListEntry that has the provided Id; else a nullptr</returns>
        private ArduinoDeviceListEntry FindDevice(String deviceId)
        {
            if (deviceId != null)
            {
                foreach (var entry in listOfDevices)
                {
                    if (entry.DeviceInformation.Id == deviceId)
                    {
                        return entry;
                    }
                }
            }

            return null;
        }

        internal async Task<IEnumerable<ArduinoDeviceListEntry>> GetDeviceListInternal()
        {
            try
            {
                await semaphoreSlim.WaitAsync();

                if (arduinoDeviceInformationConfiguration.ArduinoDeviceInformationList == null)
                {
                    await InitializeVidPIdLIst();
                }

                // Start enumeration
                Start();

                // wait for it to finish.
                int MaxWaits = 30;
                while (enumerationsPending > 0 && MaxWaits > 0)
                {
                    MaxWaits--;
                    await Task.Delay(100);
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }
            finally
            {
                semaphoreSlim.Release();
            }

            return ListOfDevices;
        }

        public IAsyncOperation<IEnumerable<ArduinoDeviceListEntry>> GetDeviceList()
        {
            return GetDeviceListInternal().AsAsyncOperation();
        }
    }
}
