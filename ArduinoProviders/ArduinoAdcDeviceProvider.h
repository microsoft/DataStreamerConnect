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

using namespace Windows::Devices::Adc::Provider;

using namespace Windows::Foundation::Collections;
using namespace Windows::Foundation;

using namespace Microsoft::Maker::Serial;
using namespace Microsoft::Maker::RemoteWiring;

namespace ArduinoProviders
{
    public ref class ArduinoAdcControllerProvider sealed : public IAdcControllerProvider
    {
    public:
        // Inherited via IAdcControllerProvider
        virtual property int ChannelCount { int get() { return _ArduinoChannelCount; }}
        virtual property int MaxValue { int get() { return 1 << _ArduinoResolutionBits; } }
        virtual property int MinValue { int get() { return 0; } }
        virtual property int ResolutionInBits { int get() { return _ArduinoResolutionBits; } }
        virtual property ProviderAdcChannelMode ChannelMode
        {
            ProviderAdcChannelMode get() { return ProviderAdcChannelMode::SingleEnded; }
            void set(ProviderAdcChannelMode mode)
            {
                if (mode != ProviderAdcChannelMode::SingleEnded)
                    throw ref new Platform::Exception(E_NOTIMPL, L"Only SingleEnded is supported");
            }
        }

        virtual bool IsChannelModeSupported(ProviderAdcChannelMode channelMode)
        {
            return (channelMode == ProviderAdcChannelMode::SingleEnded);
        }

        virtual void AcquireChannel(int channel);
        virtual void ReleaseChannel(int channel) { /*no op*/ }
        virtual int ReadValue(int channelNumber);

        virtual ~ArduinoAdcControllerProvider()
        {
        }

    internal:
        ArduinoAdcControllerProvider()
        {
            Initialize();
        }

    private:
        void Initialize();

    private:
        RemoteDevice ^_Arduino;

        static const unsigned short _ArduinoResolutionBits = 10;
        static const unsigned short _ArduinoChannelCount = 6;
    };

    public ref class ArduinoAdcProvider sealed : public IAdcProvider
    {
    public:
        virtual IVectorView<IAdcControllerProvider^>^ GetControllers();
    };
}