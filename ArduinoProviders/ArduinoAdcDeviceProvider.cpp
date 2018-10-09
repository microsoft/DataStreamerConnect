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
#include "ArduinoAdcDeviceProvider.h"  
#include "ArduinoConnection.h"
#include <ppltasks.h>

using namespace concurrency;

using namespace ArduinoProviders;
using namespace Platform::Collections;

void ArduinoAdcControllerProvider::AcquireChannel(int channel)
{
    if (_Arduino)
        _Arduino->pinMode(14 + channel, PinMode::ANALOG);
}

int ArduinoAdcControllerProvider::ReadValue(int channel)
{
    unsigned short value = 0;
    if (_Arduino)
        value = _Arduino->analogRead(ref new Platform::String(L"A") + channel.ToString());
    return value;
}

void ArduinoAdcControllerProvider::Initialize()
{
    _Arduino = create_task(ArduinoConnection::GetArduinoConnectionAsync()).get();
}

IVectorView<IAdcControllerProvider^>^ ArduinoAdcProvider::GetControllers(
    void
    )
{
    auto controllerCollection = ref new Vector<IAdcControllerProvider^>();
    controllerCollection->Append(ref new ArduinoAdcControllerProvider());
    return controllerCollection->GetView();
}


