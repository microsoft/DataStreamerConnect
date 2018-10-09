/// <reference path="../libs/core/enums.d.ts" />
// Note: Make sure to build the PWA application first, as this is a generated file.
// TypeScript Version for MakeCode was updated to support this for intellisense in VS Code
// However, that causes a bunch of lib.d.ts errors for some reason, they seem benign.
/// <reference path="../../DataStreamerConnect/bld/x86/Debug/winrtrefs/winrtrefs.d.ts" />

/**
 * Provides API support for Windows 10
 */
//% icon="\uf17a" block="Windows 10"
namespace pxsim.Windows10 {

    // promisify copied from https://github.com/Microsoft/pxt/blob/master/pxtwinrt/winrt.ts
    function promisify<T>(p: Windows.Foundation.IAsyncOperation<T> | Windows.Foundation.Projections.Promise<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            p.done(v => resolve(v), e => reject(e));
        })
    }

    /**
     * Pops up a Message.
     * @param message message to display.
     */
    //% weight=95
    //% block
    export function popup(message: string) {
        // Shows how to call WinRT directly in JS
        if (typeof Windows !== 'undefined') {
            var msg = new Windows.UI.Popups.MessageDialog(message);

            // Show the message dialog
            msg.showAsync();
        } else {
            // Browser Fallback
            alert(message);
        }
    }

    /**
     * Displays an Informative Toast Message which will disappear after the specified amount of time.
     * @param title title of message
     * @param message message to display
     * @param duration time in seconds to display
     */
    //% weight=90
    //% block
    export function toast(title: string, message: string, duration: number)
    {
        // Call into our WinRT Component class.
        if (typeof BlockCode !== 'undefined') {
            BlockCode.Commands.makeToast(title, message, duration);
        }
    }
}

namespace pxsim.Arduino {

    // promisify copied from https://github.com/Microsoft/pxt/blob/master/pxtwinrt/winrt.ts
    function promisify<T>(p: Windows.Foundation.IAsyncOperation<T> | Windows.Foundation.Projections.Promise<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            p.done(v => resolve(v), e => reject(e));
        })
    }
        /**
     * Writes a TRUE(HIGH) or FALSE(LOW) voltage to the pin. The actual voltage will be device specific.
     * @param pin The number of the pin to turn on
     * @param value Whether to set the pin to  TRUE(HIGH) or FALSE(LOW)
     */
    //% weight=85
    //% block
    export function digitalWriteAsync(pin: number, value: boolean)
    {
        // Call into our WinRT Component class.
        if (typeof BlockCode !== 'undefined') {
           return promisify(BlockCode.Commands.digitalWriteAsync(pin, value));
        }
        else
        return new Promise<void>(() => {return;});
    }

    /**
     * Reads a TRUE(HIGH) or FALSE(LOW) voltage from a given pin. The actual voltage will be device specific.
     * @param pin The number of the pin to turn on
     * @returns Returns TRUE (HIGH) or FALSE (LOW) for the pin specified
     */
    //% weight=84
    //% block
    export function digitalReadAsync(pin: number) : Promise<boolean>
    {
        // Call into our WinRT Component class.
        if (typeof BlockCode !== 'undefined') {
            return promisify(BlockCode.Commands.digitalReadAsync(pin));
        }

        return new Promise<boolean>(() => {false});
    }

        /**
     * Writes a specified percentage of the device voltage to the specified pin.
     * @param pin The number of the pin to write to
     * @param value The percentage value of the device HIGH voltage
     */
    //% weight=84
    //% block
    export function pwmWriteAsync(pin: number, value: number)
    {
        // Call into our WinRT Component class.
        if (typeof BlockCode !== 'undefined') {
            return promisify(BlockCode.Commands.pwmWriteAsync(pin, value));
        }
        else
            return new Promise<void>(() => {return;});
    }

        /**
     * Reads the voltage on a given pin. This value is dependent on the actual device.
     * @param pin The number of the pin to read from
     * @returns An interger representation of the analog voltage on the pin specified 
     */
    //% weight=84
    //% block
    export function analogReadAsync(pin: number) : Promise<number>
    {
        // Call into our WinRT Component class.
        if (typeof BlockCode !== 'undefined') {
            return promisify(BlockCode.Commands.analogReadAsync(pin));
        }

        return new Promise<number>(() => {return 0;});
    }

    /**
     * Reads the distance using a HC-SR04 ultrasonic sensor.
     * @param trigger The number of the pin to trigger the sensor
     * @param echo the number of the pin which will get the distance echo
     * @returns An interger representation of the analog voltage on the pin specified 
     */
    //% weight=84
    //% block
    export function getDistanceAsync(trigger: number, echo: number) : Promise<number>
    {
        // Call into our WinRT Component class.
        if (typeof BlockCode !== 'undefined') {
            return promisify(BlockCode.Commands.getDistanceAsync(trigger, echo));
        }

        return new Promise<number>(() => {return 0;});
    }
}

namespace pxsim.Excel {

    // promisify copied from https://github.com/Microsoft/pxt/blob/master/pxtwinrt/winrt.ts
    function promisify<T>(p: Windows.Foundation.IAsyncOperation<T> | Windows.Foundation.Projections.Promise<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            p.done(v => resolve(v), e => reject(e));
        })
    }
    //% weight=84
    //% block
    export function writeAsync(data: string)
    {
         // Call into our WinRT Component class.
         if (typeof BlockCode !== 'undefined') { 
            promisify(BlockCode.Commands.writeMessageAsync("Write data: " + data)).then(value => {return;});             
            return promisify(BlockCode.Commands.sendCommandAsync("Write", data)).then(value => {return;});;
        }

        return new Promise<void>(() => {return;});            
    }

    //% weight=84
    //% block
    export function readAsync() : Promise<string>
    {
         // Call into our WinRT Component class.
         if (typeof BlockCode !== 'undefined') { 
            return promisify(BlockCode.Commands.sendCommandAsync("Read", "Read")).then(value => {
               return promisify(BlockCode.Commands.writeMessageAsync("Reading data: " + value["ReadData"])).then(value2 => {return value["ReadData"];});
            });
        }

        return new Promise<string>(() => {return;});            
    }

    //% weight=84
    //% block
    export function getDataItem(data: string, item: number)
    {
        try
        {
            var stringArray = data.split(',');
        }
        catch (e)
        {
            return "0";
        }
        return stringArray[item];           
    }
}