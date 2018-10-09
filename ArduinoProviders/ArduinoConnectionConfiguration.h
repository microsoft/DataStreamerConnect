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

#pragma once

#include <string>

namespace ArduinoProviders
{
    public ref class ArduinoConnectionConfiguration sealed
    {
    public:
        ArduinoConnectionConfiguration();
		[Windows::Foundation::Metadata::DefaultOverloadAttribute]
        ArduinoConnectionConfiguration(Platform::String ^vid, Platform::String ^pid, unsigned int baudRate);
		ArduinoConnectionConfiguration(Windows::Devices::Enumeration::DeviceInformation ^device, unsigned int baudRate);
		ArduinoConnectionConfiguration(Platform::String ^name);

        property Platform::String^ Vid { Platform::String^ get() { return _vid; } }
        property Platform::String^ Pid { Platform::String^ get() { return _pid; } }
        property unsigned int BaudRate { unsigned int get() { return _baudRate; } }
		property Windows::Devices::Enumeration::DeviceInformation^ DeviceInformation { Windows::Devices::Enumeration::DeviceInformation^ get() { return _deviceInformation; } }
		property Platform::String^ Name { Platform::String^ get() { return _name; } }

    private:
        Platform::String ^_vid;
        Platform::String ^_pid;
        unsigned int _baudRate;
		Windows::Devices::Enumeration::DeviceInformation ^_deviceInformation;
		Platform::String ^_name;
    };
}
