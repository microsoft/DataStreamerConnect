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
#include "ArduinoConnection.h"  
#include <ppltasks.h>

using namespace concurrency;

using namespace ArduinoProviders;
using namespace Platform::Collections;

HANDLE ArduinoConnection::_ConnectedEvent = nullptr;
HANDLE ArduinoConnection::_CancelConnectionEvent = nullptr;
std::mutex ArduinoConnection::_ConnectionMutex;

UsbSerial ^ArduinoConnection::_Usb = nullptr;
BluetoothSerial ^ArduinoConnection::_BTSerial = nullptr;
RemoteDevice ^ArduinoConnection::_Arduino = nullptr;
ArduinoConnectionConfiguration ^ArduinoConnection::_ArduinoConnectionConfiguration = nullptr;

ArduinoConnectionConfiguration^ ArduinoConnection::Configuration::get()
{
    if (nullptr == _ArduinoConnectionConfiguration)
    {
        _ArduinoConnectionConfiguration = ref new ArduinoConnectionConfiguration();
    }
    return _ArduinoConnectionConfiguration;
}

void ArduinoConnection::Configuration::set(ArduinoConnectionConfiguration^ value)
{
    if (nullptr != _Arduino)
    {
        throw ref new Platform::Exception(E_ACCESSDENIED, L"ArduinoConnection, Cannot change connection properties after a connection has been established");
    }
    _ArduinoConnectionConfiguration = value;
}

bool ArduinoConnection::WaitForConnection(unsigned int timeout)
{
    HANDLE hEvents[2] =
    {
        _ConnectedEvent,
        _CancelConnectionEvent
    };

    DWORD dwWaitResult = WaitForSingleObjectEx(_ConnectedEvent, timeout, true);
    return (dwWaitResult == WAIT_OBJECT_0);
}

void ArduinoConnection::Close()
{
    // If we are still waiting for a connection, cancel it.
    SetEvent(_CancelConnectionEvent);

    if (_Arduino != nullptr)
    {
        delete(_Arduino);
        _Arduino = nullptr;
    }

    if (_Usb != nullptr)
    {
        _Usb->end();
        delete(_Usb);
        _Usb = nullptr;
    }

    if (_BTSerial != nullptr)
    {
        _BTSerial->end();
        delete(_BTSerial);
        _BTSerial = nullptr;
    }

    // We can keep the _AruinoConnectionConfiguration because it is just information about what we want to connect to.
    //_ArduinoConnectionConfiguration = nullptr;
}


IAsyncOperation<RemoteDevice^>^ ArduinoConnection::GetArduinoConnectionAsync()
{
    auto config = ArduinoConnection::Configuration;
    auto vid = config->Vid;
    auto pid = config->Pid;
    auto baudRate = config->BaudRate;
    auto deviceInformation = config->DeviceInformation;
    auto name = config->Name;

    return create_async([vid, pid, baudRate, deviceInformation, name]() -> RemoteDevice^ {

        std::lock_guard<std::mutex> lock(_ConnectionMutex);

        try {
            if (_Arduino == nullptr)
            {
                _ConnectedEvent = CreateEventEx(NULL, NULL, CREATE_EVENT_MANUAL_RESET, EVENT_ALL_ACCESS);
                _CancelConnectionEvent = CreateEventEx(NULL, NULL, CREATE_EVENT_MANUAL_RESET, EVENT_ALL_ACCESS);
                

                if (deviceInformation == nullptr)
                {
                    _Usb = ref new UsbSerial(vid, pid);
                    _Arduino = ref new RemoteDevice(_Usb);
                }
                else
                {
                    try {
                        _Usb = ref new UsbSerial(deviceInformation); // first pass
                        _Arduino = ref new RemoteDevice(_Usb);
                    }
                    catch (...)
                    {
                        _BTSerial = ref new BluetoothSerial(deviceInformation);
                        _Arduino = ref new RemoteDevice(_BTSerial);
                    }
                }

                if (nullptr == _Arduino)
                {
                    // Unable to get a device, is it connected?
                    return nullptr;
                }

                _Arduino->DeviceReady +=
                    ref new RemoteDeviceConnectionCallback([]() -> void
                {
                    SetEvent(_ConnectedEvent);
                });

                _Arduino->DeviceConnectionFailed +=
                    ref new RemoteDeviceConnectionCallbackWithMessage([](Platform::String^ message) -> void
                {
                    OutputDebugString(L"_Arduino->DeviceConnectionFailed\r\n");
                    throw ref new Platform::Exception(E_FAIL, message);
                });

                if (_Usb != nullptr)
                {
                    _Usb->begin(baudRate, SerialConfig::SERIAL_8N1);
                }

                if (_BTSerial != nullptr)
                {
                    _BTSerial->begin(baudRate, SerialConfig::SERIAL_8N1);
                }

                if (!WaitForConnection(INFINITE))
                {
                    OutputDebugString(L"_Arduino->WaitForConnection Timeout\r\n");
                    throw ref new Platform::Exception(E_FAIL);
                }
            }
        }
        catch (Platform::Exception ^e)
        {
            if (e->HResult == E_INVALIDARG)
            {
                // Couldn't find a USB device matching
                OutputDebugString(L"Couldn't find a USB device matching");
            }
        }
        return _Arduino;
    });
}
