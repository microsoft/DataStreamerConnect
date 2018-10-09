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

namespace UploaderComponent
{
    internal class AtMega328P : Mcu
    {
        public override byte DeviceCode => 0x86;

        public override byte DeviceRevision => 0;

        public override byte ProgType => 0;

        public override byte ParallelMode => 1;

        public override byte Polling => 1;

        public override byte SelfTimed => 1;

        public override byte LockBytes => 1;

        public override byte FuseBytes => 3;

        public override byte Timeout => 200;

        public override byte StabDelay => 100;

        public override byte CmdExeDelay => 25;

        public override byte SynchLoops => 32;

        public override byte ByteDelay => 0;

        public override byte PollIndex => 3;

        public override byte PollValue => 0x53;

        public override string DeviceSignature => "1E-95-0F";

        public override IDictionary<Command, byte[]> CommandBytes =>
            new Dictionary<Command, byte[]>();

        public override IList<IMemory> Memory => new List<IMemory>
        {
            new FlashMemory
            {
                Size = 32 * 1024,
                PageSize = 128,
                PollVal1 = 0xff,
                PollVal2 = 0xff
            },
            new EepromMemory
            {
                Size = 1024,
                PollVal1 = 0xff,
                PollVal2 = 0xff
            }
        };
    }
}
