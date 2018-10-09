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

using System.Collections.Generic;
using System.Linq;

namespace UploaderComponent
{
    internal interface IMcu
    {
        byte DeviceCode { get; }
        string DeviceSignature { get; }

        byte DeviceRevision { get; }
        byte ProgType { get; }
        byte ParallelMode { get; }
        byte Polling { get; }
        byte SelfTimed { get; }
        byte LockBytes { get; }
        byte FuseBytes { get; }

        byte Timeout { get; }
        byte StabDelay { get; }
        byte CmdExeDelay { get; }
        byte SynchLoops { get; }
        byte ByteDelay { get; }
        byte PollValue { get; }
        byte PollIndex { get; }

        IDictionary<Command, byte[]> CommandBytes { get; }

        IList<IMemory> Memory { get; }

        IMemory Flash { get; }
        IMemory Eeprom { get; }
    }

    internal abstract class Mcu : IMcu
    {
        public abstract byte DeviceCode { get; }
        public abstract string DeviceSignature { get; }

        public abstract byte DeviceRevision { get; }
        public abstract byte LockBytes { get; }
        public abstract byte FuseBytes { get; }

        public abstract byte Timeout { get; }
        public abstract byte StabDelay { get; }
        public abstract byte CmdExeDelay { get; }
        public abstract byte SynchLoops { get; }
        public abstract byte ByteDelay { get; }
        public abstract byte PollValue { get; }
        public abstract byte PollIndex { get; }

        public virtual byte ProgType => 0;

        public virtual byte ParallelMode => 0;

        public virtual byte Polling => 1;

        public virtual byte SelfTimed => 1;

        public abstract IDictionary<Command, byte[]> CommandBytes { get; }

        public abstract IList<IMemory> Memory { get; }

        public IMemory Flash => Memory.SingleOrDefault(x => x.Type == MemoryType.Flash);

        public IMemory Eeprom => Memory.SingleOrDefault(x => x.Type == MemoryType.Eeprom);
    }

}
