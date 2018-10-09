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

#include "pch.h"  
#include "ArduinoConnectionConfiguration.h"

using namespace ArduinoProviders;

ArduinoConnectionConfiguration::ArduinoConnectionConfiguration()
{
	// default to
	_vid = ref new Platform::String(L"VID_2341");
	_pid = ref new Platform::String(L"PID_0043");
	_baudRate = 57600;
}

ArduinoConnectionConfiguration::ArduinoConnectionConfiguration(Platform::String ^vid, Platform::String ^pid, unsigned int baudRate)
{
	_vid = vid;
	_pid = pid;
	_baudRate = baudRate;
}

ArduinoConnectionConfiguration::ArduinoConnectionConfiguration(Windows::Devices::Enumeration::DeviceInformation ^deviceInformation, unsigned int baudRate)
{
    _deviceInformation = deviceInformation;
	_baudRate = baudRate;
}

ArduinoConnectionConfiguration::ArduinoConnectionConfiguration(Platform::String ^name)
{
	_name = name;
}