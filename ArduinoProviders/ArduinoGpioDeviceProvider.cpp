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
#include "ArduinoGpioDeviceProvider.h"
#include "ArduinoConnection.h"
#include <ppltasks.h>

using namespace concurrency;

using namespace ArduinoProviders;
using namespace Platform::Collections;

void ArduinoGpioPinProvider::SetDriveMode(
    ProviderGpioPinDriveMode value
    )
{
    if (_DriveMode != value)
    {
        switch (value)
        {
        case ProviderGpioPinDriveMode::Input:
            _Arduino->pinMode(_PinNumber, PinMode::INPUT);
            break;
        case ProviderGpioPinDriveMode::Output:
            _Arduino->pinMode(_PinNumber, PinMode::OUTPUT);
            break;
        default:
            throw ref new Platform::Exception(E_NOTIMPL, L"Unsupported Gpio Pin DriveMode");
        }

        _DriveMode = value;
    }
}

void ArduinoGpioPinProvider::Write(
    ProviderGpioPinValue value
    )
{
    _Arduino->digitalWrite(
        _PinNumber, 
        (value == ProviderGpioPinValue::High) ? 
            PinState::HIGH :
            PinState::LOW);
}

ProviderGpioPinValue ArduinoGpioPinProvider::Read()
{
    PinState state = _Arduino->digitalRead(_PinNumber);
    return (state == PinState::HIGH) ?
        ProviderGpioPinValue::High :
        ProviderGpioPinValue::Low;
}

void ArduinoGpioPinProvider::OnValueChanged(GpioPinProviderValueChangedEventArgs ^args)
{
    ValueChanged(this, args);
}

void ArduinoGpioPinProvider::Initialize()
{
    _Arduino->DigitalPinUpdated +=
        ref new Microsoft::Maker::RemoteWiring::DigitalPinUpdatedCallback(this, &ArduinoGpioPinProvider::OnDigitalPinUpdated);

    auto mode = _Arduino->getPinMode(_PinNumber);
    SetDriveMode(
        (mode == PinMode::INPUT) ?
        ProviderGpioPinDriveMode::Input :
        ProviderGpioPinDriveMode::Output);

}

void ArduinoGpioPinProvider::OnDigitalPinUpdated(unsigned char pin, PinState value)
{
    if (pin == _PinNumber)
    {
        ProviderGpioPinEdge edge = (value == PinState::LOW) ? 
            ProviderGpioPinEdge::FallingEdge : 
            ProviderGpioPinEdge::RisingEdge;
        ValueChanged(this, ref new GpioPinProviderValueChangedEventArgs(edge));
    }
}

ArduinoGpioControllerProvider::ArduinoGpioControllerProvider()
{
    _Arduino = create_task(ArduinoConnection::GetArduinoConnectionAsync()).get();
}

IGpioPinProvider^ ArduinoGpioControllerProvider::OpenPinProvider(
    int pinNumber,
    ProviderGpioSharingMode sharingMode
    )
{
    return ref new ArduinoGpioPinProvider(_Arduino, pinNumber, sharingMode);
}

IVectorView<IGpioControllerProvider^>^ ArduinoGpioProvider::GetControllers(
    void
    )
{
    auto controllerCollection = ref new Vector<IGpioControllerProvider^>();
    controllerCollection->Append(ref new ArduinoGpioControllerProvider());
    return controllerCollection->GetView();
}


