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

namespace UploaderComponent
{
    public interface IRequest : IMessage
    {
    }

    internal abstract class Request : IRequest
    {
        public byte[] Bytes { get; set; }
    }

    internal abstract class Response : IRequest
    {
        public byte[] Bytes { get; set; }
    }


    internal class EnableProgrammingModeRequest : Request
    {
        internal EnableProgrammingModeRequest()
        {
            Bytes = new[]
            {
                Constants.CmdStkEnterProgmode,
                Constants.SyncCrcEop
            };
        }
    }

    internal class LeaveProgrammingModeRequest : Request
    {
        internal LeaveProgrammingModeRequest()
        {
            Bytes = new[]
            {
                Constants.CmdStkLeaveProgmode,
                Constants.SyncCrcEop
            };
        }
    }

    internal class LoadAddressRequest : Request
    {
        internal LoadAddressRequest(int address)
        {
            Bytes = new[]
            {
                Constants.CmdStkLoadAddress,
                (byte) (address & 0xff),
                (byte) ((address >> 8) & 0xff),
                Constants.SyncCrcEop
            };
        }
    }

    internal class ExecuteProgramPageRequest : Request
    {
        internal ExecuteProgramPageRequest(IMemory memory, byte[] bytesToCopy)
        {
            var size = bytesToCopy.Length;
            Bytes = new byte[size + 5];
            var i = 0;
            Bytes[i++] = Constants.CmdStkProgPage;
            Bytes[i++] = (byte)((size >> 8) & 0xff);
            Bytes[i++] = (byte)(size & 0xff);
            Bytes[i++] = (byte)(memory.Type == MemoryType.Eeprom ? 'E' : 'F');
            Buffer.BlockCopy(bytesToCopy, 0, Bytes, i, size);
            i += size;
            Bytes[i] = Constants.SyncCrcEop;
        }
    }

    internal class ExecuteReadPageRequest : Request
    {
        internal ExecuteReadPageRequest(MemoryType memType, int pageSize)
        {
            Bytes = new byte[5];
            Bytes[0] = Constants.CmdStkReadPage;
            Bytes[1] = (byte)((pageSize >> 8) & 0xff);
            Bytes[2] = (byte)(pageSize & 0xff);
            Bytes[3] = (byte)(memType == MemoryType.Eeprom ? 'E' : 'F');
            Bytes[4] = Constants.SyncCrcEop;
        }
    }

}
