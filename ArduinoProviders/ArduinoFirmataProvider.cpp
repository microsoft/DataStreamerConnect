// Copyright (c) Microsoft. All rights reserved.
#include "pch.h"
#include "ArduinoFirmataProvider.h"
#include "ArduinoProvider.h" 
#include <ppltasks.h>

using namespace concurrency;


using namespace ArduinoProviders;
using namespace Platform::Collections;

Windows::Foundation::IAsyncOperation<bool>^ ArduinoFirmataProvider::InitializeAsync()
{
    return create_async([this]()->bool
    {
        // Ensure we have an arduino connection over some transport

        auto arduinoTask = create_task(ArduinoConnection::GetArduinoConnectionAsync());

        try
        {
            _Arduino = arduinoTask.get();
        }
        catch (const std::exception& ex)
        {
            OutputDebugString(L"_Arduino->GetArduinoConnectionAsync(); failed");
            return false;
        }

        // Now we need to initialze our firmata instance
        if (_Arduino == nullptr)
        {
            // invalid state, the _Arduino should exist and there should be a firmata instance (but not pin config yet)
            OutputDebugString(L"Invalid state");
            return false;
        }
        else
        {
            try
            {
                OutputDebugString(L"setup Getting pin config");
                bool pinConfigOk = _Arduino->GetPinConfiguration();

                if (_Arduino->DeviceHardwareProfile != nullptr)
                {
                    OutputDebugString(L"Got firmata pin config");
                    _initialized = true;
                }
            }
            catch (const std::exception& ex)
            {
                OutputDebugString(L"_Arduino->GetPinConfigurationAsync(); failed");
            }
        }

        return _initialized == true;
    });
}

ArduinoFirmataProvider::ArduinoFirmataProvider()
{
}

ArduinoFirmataProvider::~ArduinoFirmataProvider(
	void
)
{
    delete _Arduino;
    _Arduino = nullptr;
    _initialized = false;
}
