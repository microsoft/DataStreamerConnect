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
