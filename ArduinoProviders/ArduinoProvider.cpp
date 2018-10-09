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
#include "ArduinoProvider.h"  

#include "ArduinoAdcDeviceProvider.h"
#include "ArduinoPwmDeviceProvider.h"
#include "ArduinoGpioDeviceProvider.h"
#include "ArduinoI2cDeviceProvider.h"

using namespace ArduinoProviders;

bool ArduinoProvider::_Created = false;

IAdcControllerProvider ^ ArduinoProvider::AdcControllerProvider::get()
{
    return ref new ArduinoAdcControllerProvider();
}
IGpioControllerProvider ^ ArduinoProvider::GpioControllerProvider::get()
{
    return ref new ArduinoGpioControllerProvider();
}
II2cControllerProvider ^ ArduinoProvider::I2cControllerProvider::get()
{
    return ref new ArduinoI2cControllerProvider();
}
IPwmControllerProvider ^ ArduinoProvider::PwmControllerProvider::get()
{
    return ref new ArduinoPwmControllerProvider();
}
ISpiControllerProvider ^ ArduinoProvider::SpiControllerProvider::get()
{
    return nullptr;
}

ArduinoConnectionConfiguration^ ArduinoProvider::Configuration::get()
{
    return ArduinoConnection::Configuration;
}

void ArduinoProvider::Configuration::set(ArduinoConnectionConfiguration ^value)
{
    if (ArduinoProvider::_Created)
    {
        throw ref new Platform::Exception(E_ACCESSDENIED, L"ArduinoProvider, Cannot change connection properties after a provider has been created");
    }
    ArduinoConnection::Configuration = value;
}

void ArduinoProvider::Close()
{
    ArduinoConnection::Close();
    ArduinoProvider::_Created = false;
    ArduinoConnection::Configuration = nullptr;
}

