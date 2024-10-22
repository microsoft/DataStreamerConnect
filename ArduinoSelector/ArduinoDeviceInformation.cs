﻿/*
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
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArduinoSelector
{
    internal class DeviceProperties
    {
        public const String DeviceInstanceId = "System.Devices.DeviceInstanceId";
    }

    public sealed class ArduinoDeviceInformationConfiguration
    {
        internal ArduinoDeviceInformationConfiguration() { }

        ArduinoDeviceInformation[] _ArduinoDeviceInformation;

        public ArduinoDeviceInformation[] ArduinoDeviceInformationList { get => _ArduinoDeviceInformation; set => _ArduinoDeviceInformation = value; }
    }

    public sealed class ArduinoDeviceInformation
    {
        ushort _Vid;
        ushort _Pid;
        internal ArduinoDeviceInformation()
        {
            // For xml serialization
        }

        public ArduinoDeviceInformation(ushort vid, ushort pid)
        {
            Vid = vid;
            Pid = pid;
        }

        public ushort Vid { get => _Vid; set => _Vid = value; }
        public ushort Pid { get => _Pid; set => _Pid = value; }
    }
}
