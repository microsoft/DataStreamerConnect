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

using namespace Windows::Devices::Gpio::Provider;

using namespace Windows::Foundation::Collections;
using namespace Windows::Foundation;

using namespace Microsoft::Maker::Serial;
using namespace Microsoft::Maker::RemoteWiring;

namespace ArduinoProviders
{
    ref class ArduinoConnection sealed
    {

    public:
        static IAsyncOperation<RemoteDevice^>^ GetArduinoConnectionAsync();

        static property ArduinoConnectionConfiguration^ Configuration
        {
            ArduinoConnectionConfiguration^ get();
            void set(ArduinoConnectionConfiguration^ value);
        }

        static void Close();

    private:
        static bool WaitForConnection(unsigned int timeout = 5000);

        static ArduinoConnectionConfiguration ^_ArduinoConnectionConfiguration;

        static HANDLE _ConnectedEvent;
        static HANDLE _CancelConnectionEvent;

        static std::mutex _ConnectionMutex;

        static UsbSerial ^_Usb;
		static BluetoothSerial ^_BTSerial;
        static RemoteDevice ^_Arduino;
        static bool _Connected;
    };
}