// Copyright (c) Microsoft. All rights reserved.
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


