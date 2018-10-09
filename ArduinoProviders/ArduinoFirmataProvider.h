// Copyright (c) Microsoft. All rights reserved.
#pragma once

using namespace Windows::Devices::Pwm::Provider;

using namespace Windows::Foundation::Collections;
using namespace Windows::Foundation;

using namespace Microsoft::Maker::Serial;
using namespace Microsoft::Maker::RemoteWiring;
using namespace Microsoft::Maker::Firmata;

namespace ArduinoProviders
{

	public ref class ArduinoFirmataProvider sealed
	{
	public:
		property UwpFirmata ^ FirmataInstance
		{
			Microsoft::Maker::Firmata::UwpFirmata ^ get()
			{
				if (_initialized)
				{
					return _Arduino->FirmataInstance;
				}
				return nullptr;
			}
		};
		
		Windows::Foundation::IAsyncOperation<bool>^ InitializeAsync();

		virtual ~ArduinoFirmataProvider();
		ArduinoFirmataProvider();

	private:
		RemoteDevice ^ _Arduino;
		//initialized state member
		std::atomic_bool _initialized;
	};

}