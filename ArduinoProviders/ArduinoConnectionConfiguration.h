// Copyright (c) Microsoft. All rights reserved.
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
