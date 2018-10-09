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
#include "ArduinoPwmDeviceProvider.h"
#include "ArduinoConnection.h"
#include <ppltasks.h>

using namespace concurrency;


using namespace ArduinoProviders;
using namespace Platform::Collections;

void ArduinoPwmControllerProvider::SetPulseParameters(int pin, double dutyCycle, bool invertPolarity)
{
    if (invertPolarity)
    {
        throw ref new Platform::Exception(E_NOTIMPL, L"invertPolarity is not supported");
    }

    // TODO: watch for pwm pins only?

    unsigned short dutyCycleValue = static_cast<unsigned short>((0xff) * (dutyCycle / 100.0));
    _Arduino->analogWrite(pin, dutyCycleValue);
}

void ArduinoPwmControllerProvider::Initialize()
{
    _Arduino = create_task(ArduinoConnection::GetArduinoConnectionAsync()).get();
}

IVectorView<IPwmControllerProvider^>^ ArduinoPwmProvider::GetControllers(
    void
    )
{
    auto controllerCollection = ref new Vector<IPwmControllerProvider^>();
    controllerCollection->Append(ref new ArduinoPwmControllerProvider());
    return controllerCollection->GetView();
}


