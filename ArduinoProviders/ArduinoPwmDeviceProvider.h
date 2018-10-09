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

using namespace Windows::Devices::Pwm::Provider;

using namespace Windows::Foundation::Collections;
using namespace Windows::Foundation;

using namespace Microsoft::Maker::Serial;
using namespace Microsoft::Maker::RemoteWiring;

namespace ArduinoProviders
{
    public ref class ArduinoPwmControllerProvider sealed : public IPwmControllerProvider
    {
    public:
        // Inherited via IPwmControllerProvider
        virtual property double ActualFrequency
        {
            double get() { return _ArduinoPwmMinFrequency; }
        }
        virtual property double MaxFrequency
        {
            double get() { return _ArduinoPwmMaxFrequency; }
        }
        virtual property double MinFrequency
        {
            double get() { return _ArduinoPwmMinFrequency; }
        }
        virtual property int PinCount
        {
            int get() { return _ArduinoPwmPinCount; }
        }

        virtual double SetDesiredFrequency(double frequency)
        {
            throw ref new Platform::Exception(E_NOTIMPL, L"Modifying the frequency is not supported");
        }

        virtual void AcquirePin(int pin) { /*no op*/ }
        virtual void ReleasePin(int pin) { /*no op*/ }
        virtual void EnablePin(int pin) { /*no op*/ }
        virtual void DisablePin(int pin) { /*no op*/ }

        virtual void SetPulseParameters(int pin, double dutyCycle, bool invertPolarity);

        virtual ~ArduinoPwmControllerProvider()
        {
        }

    internal:
        ArduinoPwmControllerProvider() 
        {
            Initialize();
        }

    private:
        void Initialize();

    private:
        RemoteDevice ^_Arduino;

        //static const unsigned short _ArduinoPwmPinMap[6] = { 3, 5, 6, 9, 10, 11 };
        static const unsigned short _ArduinoPwmPinCount = 6;
        static const unsigned short _ArduinoPwmMaxFrequency = 980;
        static const unsigned short _ArduinoPwmMinFrequency = 490;
    };

    public ref class ArduinoPwmProvider sealed : public IPwmProvider
    {
    public:
        virtual IVectorView<IPwmControllerProvider^>^ GetControllers();
    };
}