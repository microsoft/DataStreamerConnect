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

using IntelHexFormatReader;
using IntelHexFormatReader.Model;
using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Windows.Foundation;

namespace UploaderComponent
{
    public sealed class ArduinoProgrammer
    {
        private ArduinoData arduinoData;
        Arduino arduino;
        
        public ArduinoProgrammer(Arduino a, ArduinoData ad)
        {
            arduino = a;
            arduinoData = ad;
        }

        public IAsyncAction Program(String fileName, int memorySize)
        {
            Debug.WriteLine("Load hex file");
            HexFileReader reader = new HexFileReader(fileName, memorySize);
            Debug.WriteLine("Load hex file: Done");

            Debug.WriteLine("Parse hex file: Start");
            MemoryBlock memoryRepresentation = reader.Parse();
            Debug.WriteLine("Parse hex file: Done");

            return ProgramInternal(memoryRepresentation).AsAsyncAction();
        }

        internal async Task ProgramInternal(MemoryBlock memoryBlockContents)
        {
            Debug.WriteLine("ProgramInternal");
            if (!arduino.IsConnected)
            {
                Debug.WriteLine("Arduino is not connected????");
                throw new Exception("Arduino is not connected");
            }

            // Reset the device
            Debug.WriteLine("Reset device");
            arduino.ResetDevice();

            // Reopen the device
            Debug.WriteLine("Reopen device");
            await arduino.Connect();
            await Task.Delay(250);

            // setup connection with the arduino
            Debug.WriteLine("Establish bootlooder sync");
            arduino.EstablishSync();
            arduino.EstablishSync();


            // Check device signature
            //Debug.WriteLine("Validate device signature");
            //good = await arduino.CheckSignature();
            //Debug.WriteLine("signature validated");

            Debug.WriteLine("Initialize device");
            arduino.InitializeDevice();
            Debug.WriteLine("Device initialized");

            Debug.WriteLine("Enable programming mode");
            EnableProgrammingMode();
            Debug.WriteLine("Enable programming mode Done");

            Debug.WriteLine("Programming device...");
            ProgramDevice(memoryBlockContents);
            Debug.WriteLine("Device programmed.");

            Debug.WriteLine("Leave programming mode");
            LeaveProgrammingMode();
            Debug.WriteLine("Leave programming mode");
        }

        internal void EnableProgrammingMode()
        {
            arduino.SendWithSyncRetry(new EnableProgrammingModeRequest());
            var nextByte = arduino.ReceiveNext();
            if (nextByte == Constants.RespStkOk) return;
            if (nextByte == Constants.RespStkNodevice || nextByte == Constants.RespStkFailed)
                throw new ArduinoUploaderException("Unable to enable programming mode on the device!");
        }

        internal void LeaveProgrammingMode()
        {
            arduino.SendWithSyncRetry(new LeaveProgrammingModeRequest());
            var nextByte = arduino.ReceiveNext();
            if (nextByte == Constants.RespStkOk) return;
            if (nextByte == Constants.RespStkNodevice || nextByte == Constants.RespStkFailed)
                throw new ArduinoUploaderException("Unable to leave programming mode on the device!");
        }

        internal void ProgramDevice(MemoryBlock memoryBlock, IProgress<double> progress = null)
        {
            int sizeToWrite = memoryBlock.HighestModifiedOffset + 1;

            var flashMem = arduino.Mcu.Flash;
            int pageSize = flashMem.PageSize;
            Debug.WriteLine($"Preparing to write {sizeToWrite} bytes...");
            Debug.WriteLine($"Flash page size: {pageSize}.");

            int offset;
            for (offset = 0; offset < sizeToWrite; offset += pageSize)
            {
                progress?.Report((double)offset / (sizeToWrite * 2));

                var needsWrite = false;
                for (var i = offset; i < offset + pageSize; i++)
                {
                    if (!memoryBlock.Cells[i].Modified) continue;
                    needsWrite = true;
                    break;
                }
                if (needsWrite)
                {
                    var bytesToCopy = memoryBlock.Cells.Skip(offset).Take(pageSize).Select(x => x.Value).ToArray();
                    Debug.WriteLine($"Writing page at offset {offset}.");
                    LoadAddress(flashMem, offset);
                    ExecuteWritePage(flashMem, offset, bytesToCopy);
                }
                else
                {
                    Debug.WriteLine("Skip writing page...");
                }
            }
            Debug.WriteLine($"{sizeToWrite} bytes written to flash memory!");
        }

        internal void LoadAddress(IMemory memory, int addr)
        {
            Debug.WriteLine($"Sending load address request: {addr}.");
            addr = addr >> 1;
            arduino.SendWithSyncRetry(new LoadAddressRequest(addr));
            var result = arduino.ReceiveNext();
            if (result != Constants.RespStkOk)
                throw new ArduinoUploaderException($"LoadAddress failed with result {result}!");
        }

        internal void ExecuteWritePage(IMemory memory, int offset, byte[] bytes)
        {
            arduino.SendWithSyncRetry(new ExecuteProgramPageRequest(memory, bytes));
            var nextByte = arduino.ReceiveNext();
            if (nextByte == Constants.RespStkOk) return;
            throw new ArduinoUploaderException($"Write at offset {offset} failed!");
        }

        internal byte[] ExecuteReadPage(IMemory memory)
        {
            int pageSize = memory.PageSize;
            arduino.SendWithSyncRetry(new ExecuteReadPageRequest(memory.Type, pageSize));
            var bytes = arduino.ReceiveNext((uint)pageSize);
            if (bytes == null)
                throw new ArduinoUploaderException("Execute read page failed!");

            var nextByte = arduino.ReceiveNext();
            if (nextByte == Constants.RespStkOk) return bytes;
            throw new ArduinoUploaderException("Execute read page failed!");
        }
    }
}
