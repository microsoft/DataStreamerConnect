/*
    Copyright(c) Microsoft Open Technologies, Inc. All rights reserved.

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

#include "IStream.h"
#include <mutex>

namespace Microsoft {
namespace Maker {
namespace Serial {

public ref class UsbSerial sealed : public IStream
{
public:
    virtual event IStreamConnectionCallback ^ConnectionEstablished;
    virtual event IStreamConnectionCallbackWithMessage ^ConnectionLost;
    virtual event IStreamConnectionCallbackWithMessage ^ConnectionFailed;

    ///<summary>
    ///A constructor which accepts a string corresponding to a device VID to connect to.
    ///</summary>
    UsbSerial(
        Platform::String ^vid_
        );

    ///<summary>
    ///A constructor which accepts two strings corresponding to a device VID and PID to connect to.
    ///</summary>
    UsbSerial(
        Platform::String ^vid_,
        Platform::String ^pid_
        );

    ///<summary>
    ///A constructor which accepts a DeviceInformation object to explicitly specify which device to connect to.
    ///</summary>
    [Windows::Foundation::Metadata::DefaultOverloadAttribute]
    UsbSerial(
        Windows::Devices::Enumeration::DeviceInformation ^device_
        );

    virtual
    ~UsbSerial(
        void
        );

    virtual
    uint16_t
    available(
        void
        );

    [Windows::Foundation::Metadata::DefaultOverloadAttribute]
    inline
    void
    begin(
        uint32_t baud_
        )
    {
        //default Serial configuration for Arduino Devices and similar microcontrollers matches the 8N1 profile
        begin( baud_, SerialConfig::SERIAL_8N1 );
    }

    virtual
    void
    begin(
        uint32_t baud_,
        SerialConfig config_
        );

    virtual
    bool
    connectionReady(
        void
        );

    virtual
    void
    end(
        void
        );

    virtual
    void
    flush(
        void
        );

    virtual
    void
    lock(
        void
        );

    virtual
    uint16_t
    print(
          uint8_t c_
         );

    virtual
    uint16_t
    print(
          int32_t value_
         );

    virtual
    uint16_t
    print(
          int32_t value_,
          Radix base_
         );

    virtual
    uint16_t
    print(
          uint32_t value_
         );

    virtual
    uint16_t
    print(
          uint32_t value_,
          Radix base_
         );

    virtual
    uint16_t
    print(
          double value_
         );

    [Windows::Foundation::Metadata::DefaultOverloadAttribute]
    virtual
    uint16_t
    print(
          double value_,
          int16_t decimal_place_
         );

    [Windows::Foundation::Metadata::DefaultOverloadAttribute]
    virtual
    uint16_t
    print(
        const Platform::Array<uint8_t> ^buffer_
        );

    virtual
    uint16_t
    read(
        void
        );

    virtual
    void
    unlock(
        void
        );

    virtual
    uint16_t
    write(
        uint8_t c_
        );

    [Windows::Foundation::Metadata::DefaultOverloadAttribute]
    virtual
    uint16_t
    write(
        const Platform::Array<uint8_t> ^buffer_
        );

    ///<summary>
    ///Begins an asyncronous request for all USB devices that are connected and may be used to attempt a device connection.
    ///</summary>
    static
    Windows::Foundation::IAsyncOperation<Windows::Devices::Enumeration::DeviceInformationCollection ^> ^
    listAvailableDevicesAsync(
        void
        );

private:
    //maximum amount of data that may be read at a time, allows efficient reads
    static const uint8_t MAX_READ_SIZE = 100;

    // Device specific members (set during instantation)
    Windows::Devices::Enumeration::DeviceInformation ^_deviceInformation;
    Platform::String ^_pid;
    Platform::String ^_vid;

    //thread-safe mechanisms. std::unique_lock used to manage the lifecycle of std::mutex
    std::mutex _usbutex;
    std::unique_lock<std::mutex> _usb_lock;

    uint32_t _baud;
    SerialConfig _config;
    std::atomic_bool _connection_ready;
    Windows::Storage::Streams::DataReaderLoadOperation ^_current_load_operation;
    Windows::Devices::Enumeration::DeviceInformationCollection ^_device_collection;
    Windows::Devices::SerialCommunication::SerialDevice ^_serial_device;
    Windows::Storage::Streams::DataReader ^_rx;
    Windows::Storage::Streams::DataWriter ^_tx;

    Concurrency::task<void>
    connectToDeviceAsync(
        Windows::Devices::Enumeration::DeviceInformation ^device_
        );

    Windows::Devices::Enumeration::DeviceInformation ^
    identifyDeviceFromCollection(
        Windows::Devices::Enumeration::DeviceInformationCollection ^devices_
        );
};

} // namespace Serial
} // namespace Maker
} // namespace Microsoft
