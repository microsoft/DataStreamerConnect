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

namespace UploaderComponent
{
    public enum MemoryType
    {
        Flash,
        Eeprom
    }

    public interface IMemory
    {
        MemoryType Type { get; }
        int Size { get; }
        int PageSize { get; }
        byte PollVal1 { get; }
        byte PollVal2 { get; }
        byte Delay { get; }
        byte[] CmdBytesRead { get; }
        byte[] CmdBytesWrite { get; }
    }


    internal abstract class Memory : IMemory
    {
        public abstract MemoryType Type { get; }

        public int Size { get; set; }
        public int PageSize { get; set; }
        public byte PollVal1 { get; set; }
        public byte PollVal2 { get; set; }
        public byte Delay { get; set; }
        public byte[] CmdBytesRead { get; set; }
        public byte[] CmdBytesWrite { get; set; }
    }


    internal class FlashMemory : Memory
    {
        public override MemoryType Type => MemoryType.Flash;
    }

    internal class EepromMemory : Memory
    {
        public override MemoryType Type => MemoryType.Eeprom;
    }
}
