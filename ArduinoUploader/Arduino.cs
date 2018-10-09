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
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Windows.Devices.Enumeration;
using Windows.Devices.SerialCommunication;
using Windows.Foundation;
using Windows.Storage.Streams;

namespace UploaderComponent
{

    internal static class Constants
    {
        internal const byte CmdStkGetSync = 0x30;
        internal const byte CmdStkGetParameter = 0x41;
        internal const byte CmdStkSetDevice = 0x42;
        internal const byte CmdStkEnterProgmode = 0x50;
        internal const byte CmdStkLeaveProgmode = 0x51;
        internal const byte CmdStkLoadAddress = 0x55;
        internal const byte CmdStkProgPage = 0x64;
        internal const byte CmdStkReadPage = 0x74;
        internal const byte CmdStkReadSignature = 0x75;

        internal const byte SyncCrcEop = 0x20;

        internal const byte RespStkOk = 0x10;
        internal const byte RespStkFailed = 0x11;
        internal const byte RespStkNodevice = 0x13;
        internal const byte RespStkInsync = 0x14;
        internal const byte RespStkNosync = 0x15;

        internal const byte ParmStkSwMajor = 0x81;
        internal const byte ParmStkSwMinor = 0x82;
    }

    public sealed class Arduino : IDisposable
    {

        static readonly List<ArduinoData> knownArduinos = new List<ArduinoData>()
        {
            { new ArduinoData() { name = "Uno", programmer = typeof(ArduinoProgrammer), Vid = 0x2341, Pid = 0x0043, flashSize = 28672} },
            { new ArduinoData() { name = "Uno", programmer = typeof(ArduinoProgrammer), Vid = 0x2341, Pid = 0x0243, flashSize = 28672} },
        };

        private ArduinoData arduinoData;

        public SerialDevice serialDevice { get; private set; } = null;
        public string DeviceId { get; private set; } = "";

        public DataWriter writer { get; private set; } = null;
        public DataReader reader { get; private set; } = null;


        private Arduino(string id, ArduinoData data)
        {
            DeviceId = id;
            arduinoData = data;
        }

        private Arduino(string id)
        {
            DeviceId = id;
        }

        public bool IsConnected
        {
            get { return serialDevice != null; }
        }

        public ushort VID { get; private set; } = 0;

        public ushort PID { get; private set; } = 0;
        internal IMcu Mcu { get; private set; }

        public ArduinoProgrammer GetProgrammer()
        {
            return new ArduinoProgrammer(this, arduinoData);
        }

        public IAsyncAction Connect()
        {
            return ConnectInternal(115200, false).AsAsyncAction();
        }

        public IAsyncAction Connect(uint baud)
        {
            return ConnectInternal(baud, false).AsAsyncAction();
        }

        public IAsyncAction Connect(uint baud, bool enableDTR)
        {
            return ConnectInternal(baud, false).AsAsyncAction();
        }

        internal async Task ConnectInternal(uint baud, bool enableDTR)
        {
            Debug.WriteLine($"ConnectInternal {baud}");
            if (serialDevice != null)
            {
                // close the stale conneciton
                writer.Dispose();
                reader.Dispose();
                serialDevice.Dispose();
                serialDevice = null;
                await Task.Delay(100);
            }

            serialDevice = await Arduino.CreateSerialDevice(DeviceId, baud);
            if (serialDevice != null)
            {
                // Save these off.
                this.VID = serialDevice.UsbVendorId;
                this.PID = serialDevice.UsbProductId;
                serialDevice.ReadTimeout = TimeSpan.FromSeconds(1);
                serialDevice.WriteTimeout = TimeSpan.FromSeconds(1);
                writer = new DataWriter(serialDevice.OutputStream);
                reader = new DataReader(serialDevice.InputStream);
                if (enableDTR)
                {
                    // don't set this to enableDTR - it throws if you touch it during bootloader.
                    serialDevice.IsDataTerminalReadyEnabled = true;
                }
            }
        }

        static public IAsyncOperation<IEnumerable<Arduino>> FindArduino()
        {
            Debug.WriteLine("IAsyncOperation<IEnumerable<Arduino>> FindArduino()");
            return FindArduinoInternal(0, 0).AsAsyncOperation();
        }

        static public IAsyncOperation<IEnumerable<Arduino>> FindArduino(ushort svid)
        {
            Debug.WriteLine("IAsyncOperation<IEnumerable<Arduino>> FindArduino(ushort svid)");
            return FindArduinoInternal(svid, 0).AsAsyncOperation();
        }

        static public IAsyncOperation<IEnumerable<Arduino>> FindArduino(ushort svid, ushort spid)
        {
            Debug.WriteLine("IAsyncOperation<IEnumerable<Arduino>> FindArduino(ushort svid, ushort spid)");
            return FindArduinoInternal(svid, spid).AsAsyncOperation();
        }

        static public Arduino GetArduino(string id)
        {
            // Because we don't have to do any async here we can just do the work
            Debug.WriteLine("Arduino GetArduino(string id)");
            return new Arduino(id);
        }

        static internal async Task<IEnumerable<Arduino>> FindArduinoInternal(ushort svid, ushort spid)
        {
            Debug.WriteLine("static internal async Task<IEnumerable<Arduino>> FindArduinoInternal(ushort svid, ushort spid)");
            string vid = svid.ToString("X4");
            string pid = spid.ToString("X4");

            List<Arduino> foundArduino = new List<Arduino>();
            string selector = SerialDevice.GetDeviceSelector();
            DeviceInformationCollection deviceCollection = await DeviceInformation.FindAllAsync(selector);
            if (deviceCollection.Count == 0)
                return foundArduino;

            foreach (var t in deviceCollection)
            {
                Debug.WriteLine(t.Id);
            }

            for (int i = 0; i < deviceCollection.Count; ++i)
            {
                if (svid == 0 || spid == 0)
                {
                    foreach (var known in knownArduinos)
                    {
                        // Device Id is of the form 
                        // "\\\\?\\USB#VID_2341&PID_8036&MI_00#7&175bcd40&0&0000#{86e0d1e0-8089-11d0-9ce4-08003e301f73}"
                        // Here, we're looking for an Id which contains a VID like "VID_2341"

                        vid = known.Vid.ToString("X4");
                        pid = known.Pid.ToString("X4");
                        if (deviceCollection[i].Id.Contains("VID_" + vid) && deviceCollection[i].Id.Contains("PID_" + pid))
                        {
                            foundArduino.Add(new Arduino(deviceCollection[i].Id, known));
                            break;
                        }
                    }
                }
                else if (deviceCollection[i].Id.Contains(vid) && (string.IsNullOrEmpty(pid) || deviceCollection[i].Id.Contains(pid)))
                {
                    var a = new Arduino(deviceCollection[i].Id);
                    foundArduino.Add(a);
                }
            }

            return foundArduino;
        }

        static internal async Task<SerialDevice> CreateSerialDevice(string deviceId, uint baud = 57600)
        {
            SerialDevice serialDevice = await SerialDevice.FromIdAsync(deviceId);
            if (serialDevice != null)
            {
                serialDevice.BaudRate = baud;
                serialDevice.Parity = SerialParity.None;
                serialDevice.DataBits = 8;
                serialDevice.StopBits = SerialStopBitCount.One;
                serialDevice.Handshake = SerialHandshake.None;
                serialDevice.ReadTimeout = TimeSpan.FromSeconds(1);
                serialDevice.WriteTimeout = TimeSpan.FromSeconds(1);
                serialDevice.Handshake = SerialHandshake.RequestToSendXOnXOff;

                serialDevice.IsDataTerminalReadyEnabled = true;
                serialDevice.IsRequestToSendEnabled = true;
            }
            await Task.Delay(250);

            return serialDevice;
        }

        internal async Task<bool> CheckSignature()
        {
            while (reader.UnconsumedBufferLength > 0)
            {
                reader.ReadByte();
            }

            bool signatureGood = false;
            byte ack;
            byte[] signature;
            uint pending = 0;
            byte[] bytes = new byte[]
            {
                Constants.CmdStkReadSignature,
                Constants.SyncCrcEop
            };

            writer.WriteBytes(bytes);
            await writer.StoreAsync();
            bool done = false;
            while (!done)
            {
                // wait for the ack
                pending = await reader.LoadAsync(0xFFFF);
                if (reader.UnconsumedBufferLength > 0)
                {
                    ack = reader.ReadByte();
                    switch (ack)
                    {
                        case Constants.RespStkInsync:
                            {
                                // all is good
                                Debug.WriteLine("Signature request ok");
                                done = true;
                            }
                            break;
                        case Constants.RespStkNosync:
                            {
                                EstablishSync();
                            }
                            break;
                        default:
                            {
                                Debug.WriteLine("Signature request failed");
                                return false;
                            }
                    }
                }
            }

            byte[] result = new byte[4];
            try
            {
                // read until we get the signature or retrys have happend
                int retries = 256;
                Debug.WriteLine("Reading signature result");
                while (retries-- > 0)
                {
                    // Keep loading until we have our required data buffered (or we run out of retris)
                    pending = await reader.LoadAsync(0xFFFF);
                    if (reader.UnconsumedBufferLength >= 4)
                    {
                        reader.ReadBytes(result);
                        break;
                    }
                    await Task.Delay(20);
                }

                if (retries == 0)
                {
                    Debug.WriteLine("CheckSignature retries ran out");
                    return false;
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }


            Debug.WriteLine("Signature read, validating");
            if (result == null || result.Length != 4 || result[3] != Constants.RespStkOk)
            {
                Debug.WriteLine("Invalid signature");
            }
            else
            {
                signature = new byte[] { result[0], result[1], result[2] };

                byte[] ATMega328PSig = new byte[] { 0x1E, 0x95, 0x0F };

                signatureGood =
                    ATMega328PSig[0] == signature[0] &&
                    ATMega328PSig[1] == signature[1] &&
                    ATMega328PSig[2] == signature[2];
            }

            Debug.WriteLine(signatureGood ? "Signature good": "Signature Bad");

            return signatureGood;
        }

        public void ResetDevice()
        {
            serialDevice.IsDataTerminalReadyEnabled = false;
            Task.Delay(250).GetAwaiter();
            serialDevice.IsDataTerminalReadyEnabled = true;
            Task.Delay(250).GetAwaiter();
        }

    
        public void InitializeDevice()
        {
            Debug.WriteLine("Initialize Device Start");
            Mcu = new AtMega328P();
            Debug.WriteLine("Get STK Sw Major Version ");
            var majorVersion = GetParameterValue(Constants.ParmStkSwMajor);
            Debug.WriteLine("Get STK Sw Minor Version ");
            var minorVersion = GetParameterValue(Constants.ParmStkSwMinor);
            Debug.WriteLine($"Retrieved software version: {majorVersion}.{minorVersion}.");

            Debug.WriteLine("Setting device programming parameters...");
            SendWithSyncRetry(new SetDeviceProgrammingParametersRequest(Mcu));
            var nextByte = ReceiveNext();

            if (nextByte != Constants.RespStkOk)
                throw new ArduinoUploaderException("Unable to set device programming parameters!");
        }

        private uint GetParameterValue(byte param)
        {
            Debug.WriteLine($"Retrieving parameter '{param:X}'...");
            SendWithSyncRetry(new GetParameterRequest(param));
            var nextByte = ReceiveNext();
            var paramValue = (uint)nextByte;
            nextByte = ReceiveNext();

            if (nextByte == Constants.RespStkFailed)
                throw new ArduinoUploaderException($"Retrieving parameter '{param:X}' failed!");

            if (nextByte != Constants.RespStkOk)
                throw new ArduinoUploaderException(
                    $"General protocol error while retrieving parameter '{param:X}'.");

            return paramValue;
        }

        internal class GetParameterRequest : Request
        {
            internal GetParameterRequest(byte param)
            {
                Bytes = new[]
                {
                Constants.CmdStkGetParameter,
                param,
                Constants.SyncCrcEop
            };
            }
        }

        internal void SendWithSyncRetry(IRequest request)
        {
            byte nextByte;
            while (true)
            {
                Send(request);
                nextByte = (byte)ReceiveNext();
                if (nextByte == Constants.RespStkNosync)
                {
                    EstablishSync();
                    continue;
                }
                break;
            }
            if (nextByte != Constants.RespStkInsync)
                throw new ArduinoUploaderException(
                    $"Unable to aqcuire sync in SendWithSyncRetry for request of type {request.GetType()}!");
        }

        internal void Send(IRequest request)
        {
            var bytes = request.Bytes;
            var length = bytes.Length;
            Debug.WriteLine($"Send IRequest: Len {length} bytes: {BitConverter.ToString(bytes)}" );
            writer.WriteBytes(bytes);
            writer.StoreAsync().GetAwaiter();
        }

        internal TResponse Receive<TResponse>(uint length = 1)
            where TResponse : Response, new()
        {
            Debug.WriteLine("Receive<TResponse>");
            byte[] bytes = ReceiveNext(length);
            if (bytes == null)
                return null;
            return new TResponse { Bytes = bytes };
        }

        internal byte ReceiveNext()
        {
            byte[] buffer = ReceiveNext(1);
            if (buffer == null)
                return 0;
            else
                return buffer[0];
        }

        internal byte[] ReceiveNext(uint length)
        {
            Debug.WriteLine($"ReceiveNext {length}");
            byte[] bytes = null;
            uint pending = 0;
            uint unconsumed = 0;
            try
            {
                pending = reader.LoadAsync(length).GetAwaiter().GetResult();
                unconsumed = reader.UnconsumedBufferLength;
                if (unconsumed >= length)
                {
                    // Allocate our buffer
                    bytes = new byte[length];
                    reader.ReadBytes(bytes);
                }
                else
                {
                    Debug.WriteLine($"RecieveNext not enough data {unconsumed} of {length}");
                }
                //Logger?.Trace($"Receiving bytes: {BitConverter.ToString(bytes)}");
            }
            catch (TimeoutException)
            {
                Debug.WriteLine("ReceiveNext timeout");
                // Toss any partial results
                bytes = null;
            }

            return bytes;
        }

        void DiscardInBuffer()
        {
            if (reader.UnconsumedBufferLength > 0)
            {
                byte[] discard = new byte[reader.UnconsumedBufferLength];
                reader.ReadBytes(discard);
            }
        }

        /// <summary>
        ///  library establishsync
        /// </summary>
        public void EstablishSync()
        {
            Debug.WriteLine("EstablishSync");

            const int maxRetries = 256;
            var retryCounter = 0;
            GetSyncResponse result;
            int nextByte;
            while (retryCounter++ < maxRetries)
            {
                Send(new GetSyncRequest());
                result = Receive<GetSyncResponse>();
                if (result == null)
                {
                    continue;
                }

                if (result.IsInSync)
                {
                    break;
                }
                Task.Delay(20).GetAwaiter();
            }
            if (retryCounter == maxRetries)
            {
                throw new ArduinoUploaderException($"Unable to establish sync after {maxRetries} retries.");
            }
            Debug.WriteLine("EstablishSync InSync");
            retryCounter = 0;
            while (retryCounter++ < maxRetries)
            {
                nextByte = ReceiveNext();
                if (nextByte == Constants.RespStkOk)
                {
                    Debug.WriteLine("RespStkOK");
                    break;
                }
            }
            if (retryCounter == maxRetries)
                throw new ArduinoUploaderException("Unable to establish sync.");
            Debug.WriteLine("EstablishSync ACK");

        }

        public void Dispose()
        {
            if (writer  != null)
                writer.Dispose();
            if (reader != null)
                reader.Dispose();
            if (serialDevice != null)
                serialDevice.Dispose();
        }
    }


    internal class GetSyncRequest : Request
    {
        internal GetSyncRequest()
        {
            Bytes = new[]
            {
                Constants.CmdStkGetSync,
                Constants.SyncCrcEop
            };
        }
    }

    internal class GetSyncResponse : Response
    {
        internal bool IsInSync => Bytes.Length > 0 && Bytes[0] == Constants.RespStkInsync;
    }

    internal class ArduinoUploaderException : Exception
    {
        public ArduinoUploaderException(string message) : base(message)
        {
        }
    }

    public enum Command
    {
        PgmEnable,
        ReadFlash,
        ReadEeprom
    }


    internal sealed class SetDeviceProgrammingParametersRequest : Request
    {
        public SetDeviceProgrammingParametersRequest(IMcu mcu)
        {
            var flashMem = mcu.Flash;
            var eepromMem = mcu.Eeprom;
            var flashPageSize = flashMem.PageSize;
            var flashSize = flashMem.Size;
            var epromSize = eepromMem.Size;

            Bytes = new byte[22];
            Bytes[0] = Constants.CmdStkSetDevice;
            Bytes[1] = mcu.DeviceCode;
            Bytes[2] = mcu.DeviceRevision;
            Bytes[3] = mcu.ProgType;
            Bytes[4] = mcu.ParallelMode;
            Bytes[5] = mcu.Polling;
            Bytes[6] = mcu.SelfTimed;
            Bytes[7] = mcu.LockBytes;
            Bytes[8] = mcu.FuseBytes;
            Bytes[9] = flashMem.PollVal1;
            Bytes[10] = flashMem.PollVal2;
            Bytes[11] = eepromMem.PollVal1;
            Bytes[12] = eepromMem.PollVal2;
            Bytes[13] = (byte)((flashPageSize >> 8) & 0x00ff);
            Bytes[14] = (byte)(flashPageSize & 0x00ff);
            Bytes[15] = (byte)((epromSize >> 8) & 0x00ff);
            Bytes[16] = (byte)(epromSize & 0x00ff);
            Bytes[17] = (byte)((flashSize >> 24) & 0xff);
            Bytes[18] = (byte)((flashSize >> 16) & 0xff);
            Bytes[19] = (byte)((flashSize >> 8) & 0xff);
            Bytes[20] = (byte)(flashSize & 0xff);
            Bytes[21] = Constants.SyncCrcEop;
        }
    }
}
