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

#include "ArduinoConnectionConfiguration.h"
#include "ArduinoConnection.h"

using namespace Windows::Devices;
using namespace Windows::Devices::Adc::Provider;
using namespace Windows::Devices::Pwm::Provider;
using namespace Windows::Devices::Gpio::Provider;
using namespace Windows::Devices::I2c::Provider;
using namespace Windows::Devices::Spi::Provider;

namespace ArduinoProviders
{
    public ref class ArduinoProvider sealed : public ILowLevelDevicesAggregateProvider
    {
    public:

        // Inherited via ILowLevelDevicesAggregateProvider
        virtual property IAdcControllerProvider ^ AdcControllerProvider
        {
            IAdcControllerProvider ^get();
        }
        virtual property IGpioControllerProvider ^ GpioControllerProvider
        {
            IGpioControllerProvider ^get();
        }
        virtual property II2cControllerProvider ^ I2cControllerProvider
        {
            II2cControllerProvider ^get();
        }
        virtual property IPwmControllerProvider ^ PwmControllerProvider
        {
            IPwmControllerProvider ^get();
        }
        virtual property ISpiControllerProvider ^ SpiControllerProvider
        {
            ISpiControllerProvider ^get();
        }

	public:
		ArduinoProvider()
		{
            _Created = true;
		}

        static property ArduinoConnectionConfiguration^ Configuration
        {
            ArduinoConnectionConfiguration^ get();
            void set(ArduinoConnectionConfiguration^ value);
        }

        static void Close();

    private:
        static bool _Created;
	};
}