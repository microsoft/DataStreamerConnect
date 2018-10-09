var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../libs/core/enums.d.ts"/>
var pxsim;
(function (pxsim) {
    var hare;
    (function (hare) {
        /**
         * This is hop
         */
        //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
        //% hop.fieldEditor="gridpicker"
        function hop(hop, color) {
        }
        hare.hop = hop;
        //% blockId=sampleOnLand block="on land"
        //% optionalVariableArgs
        function onLand(handler) {
        }
        hare.onLand = onLand;
    })(hare = pxsim.hare || (pxsim.hare = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var turtle;
    (function (turtle) {
        /**
         * Moves the sprite forward
         * @param steps number of steps to move, eg: 1
         */
        //% weight=90
        //% blockId=sampleForward block="forward %steps"
        function forwardAsync(steps) {
            return pxsim.board().sprite.forwardAsync(steps);
        }
        turtle.forwardAsync = forwardAsync;
        /**
         * Moves the sprite forward
         * @param direction the direction to turn, eg: Direction.Left
         * @param angle degrees to turn, eg:90
         */
        //% weight=85
        //% blockId=sampleTurn block="turn %direction|by %angle degrees"
        //% angle.min=-180 angle.max=180
        function turnAsync(direction, angle) {
            var b = pxsim.board();
            if (direction == 0 /* Left */)
                b.sprite.angle -= angle;
            else
                b.sprite.angle += angle;
            return Promise.delay(400);
        }
        turtle.turnAsync = turnAsync;
        /**
         * Triggers when the turtle bumps a wall
         * @param handler
         */
        //% blockId=onBump block="on bump"
        function onBump(handler) {
            var b = pxsim.board();
            b.bus.listen("Turtle", "Bump", handler);
        }
        turtle.onBump = onBump;
    })(turtle = pxsim.turtle || (pxsim.turtle = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var loops;
    (function (loops) {
        /**
         * Repeats the code forever in the background. On each iteration, allows other code to run.
         * @param body the code to repeat
         */
        //% help=functions/forever weight=55 blockGap=8
        //% blockId=device_forever block="forever" 
        function forever(body) {
            pxsim.thread.forever(body);
        }
        loops.forever = forever;
        /**
         * Pause for the specified time in milliseconds
         * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
         */
        //% help=functions/pause weight=54
        //% block="pause (ms) %pause" blockId=device_pause
        function pauseAsync(ms) {
            return Promise.delay(ms);
        }
        loops.pauseAsync = pauseAsync;
    })(loops = pxsim.loops || (pxsim.loops = {}));
})(pxsim || (pxsim = {}));
function logMsg(m) { console.log(m); }
(function (pxsim) {
    var console;
    (function (console) {
        /**
         * Print out message
         */
        //% 
        function log(msg) {
            logMsg("CONSOLE: " + msg);
            // why doesn't that work?
            pxsim.board().writeSerial(msg + "\n");
        }
        console.log = log;
    })(console = pxsim.console || (pxsim.console = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    /**
     * A ghost on the screen.
     */
    //%
    var Sprite = /** @class */ (function () {
        function Sprite() {
            /**
             * The X-coordiante
             */
            //%
            this.x = 100;
            /**
            * The Y-coordiante
            */
            //%
            this.y = 100;
            this.angle = 90;
        }
        Sprite.prototype.foobar = function () { };
        /**
         * Move the thing forward
         */
        //%
        Sprite.prototype.forwardAsync = function (steps) {
            var deg = this.angle / 180 * Math.PI;
            this.x += Math.cos(deg) * steps * 10;
            this.y += Math.sin(deg) * steps * 10;
            pxsim.board().updateView();
            if (this.x < 0 || this.y < 0)
                pxsim.board().bus.queue("TURTLE", "BUMP");
            return Promise.delay(400);
        };
        return Sprite;
    }());
    pxsim.Sprite = Sprite;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var sprites;
    (function (sprites) {
        /**
         * Creates a new sprite
         */
        //% blockId="sampleCreate" block="createSprite"
        function createSprite() {
            return new pxsim.Sprite();
        }
        sprites.createSprite = createSprite;
    })(sprites = pxsim.sprites || (pxsim.sprites = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../libs/core/enums.d.ts"/>
// Note: Make sure to build the PWA application first, as this is a generated file.
// TypeScript Version for MakeCode was updated to support this for intellisense in VS Code
// However, that causes a bunch of lib.d.ts errors for some reason, they seem benign.
/// <reference path="../../WinRTTypes/winrtrefs.d.ts" />
/**
 * Provides API support for Windows 10
 */
//% icon="\uf17a" block="Windows 10"
var pxsim;
(function (pxsim) {
    var Windows10;
    (function (Windows10) {
        // promisify copied from https://github.com/Microsoft/pxt/blob/master/pxtwinrt/winrt.ts
        function promisify(p) {
            return new Promise(function (resolve, reject) {
                p.done(function (v) { return resolve(v); }, function (e) { return reject(e); });
            });
        }
        /**
         * Pops up a Message.
         * @param message message to display.
         */
        //% weight=95
        //% block
        function popup(message) {
            // Shows how to call WinRT directly in JS
            if (typeof Windows !== 'undefined') {
                var msg = new Windows.UI.Popups.MessageDialog(message);
                // Show the message dialog
                msg.showAsync();
            }
            else {
                // Browser Fallback
                alert(message);
            }
        }
        Windows10.popup = popup;
        /**
         * Displays an Informative Toast Message which will disappear after the specified amount of time.
         * @param title title of message
         * @param message message to display
         * @param duration time in seconds to display
         */
        //% weight=90
        //% block
        function toast(title, message, duration) {
            // Call into our WinRT Component class.
            if (typeof BlockCode !== 'undefined') {
                BlockCode.Commands.makeToast(title, message, duration);
            }
        }
        Windows10.toast = toast;
    })(Windows10 = pxsim.Windows10 || (pxsim.Windows10 = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var Arduino;
    (function (Arduino) {
        // promisify copied from https://github.com/Microsoft/pxt/blob/master/pxtwinrt/winrt.ts
        function promisify(p) {
            return new Promise(function (resolve, reject) {
                p.done(function (v) { return resolve(v); }, function (e) { return reject(e); });
            });
        }
        /**
     * Writes a TRUE(HIGH) or FALSE(LOW) voltage to the pin. The actual voltage will be device specific.
     * @param pin The number of the pin to turn on
     * @param value Whether to set the pin to  TRUE(HIGH) or FALSE(LOW)
     */
        //% weight=85
        //% block
        function digitalWriteAsync(pin, value) {
            // Call into our WinRT Component class.
            if (typeof BlockCode !== 'undefined') {
                return promisify(BlockCode.Commands.digitalWriteAsync(pin, value));
            }
            else
                return new Promise(function () { return; });
        }
        Arduino.digitalWriteAsync = digitalWriteAsync;
        /**
         * Reads a TRUE(HIGH) or FALSE(LOW) voltage from a given pin. The actual voltage will be device specific.
         * @param pin The number of the pin to turn on
         * @returns Returns TRUE (HIGH) or FALSE (LOW) for the pin specified
         */
        //% weight=84
        //% block
        function digitalReadAsync(pin) {
            // Call into our WinRT Component class.
            if (typeof BlockCode !== 'undefined') {
                return promisify(BlockCode.Commands.digitalReadAsync(pin));
            }
            return new Promise(function () { false; });
        }
        Arduino.digitalReadAsync = digitalReadAsync;
        /**
     * Writes a specified percentage of the device voltage to the specified pin.
     * @param pin The number of the pin to write to
     * @param value The percentage value of the device HIGH voltage
     */
        //% weight=84
        //% block
        function pwmWriteAsync(pin, value) {
            // Call into our WinRT Component class.
            if (typeof BlockCode !== 'undefined') {
                return promisify(BlockCode.Commands.pwmWriteAsync(pin, value));
            }
            else
                return new Promise(function () { return; });
        }
        Arduino.pwmWriteAsync = pwmWriteAsync;
        /**
     * Reads the voltage on a given pin. This value is dependent on the actual device.
     * @param pin The number of the pin to read from
     * @returns An interger representation of the analog voltage on the pin specified
     */
        //% weight=84
        //% block
        function analogReadAsync(pin) {
            // Call into our WinRT Component class.
            if (typeof BlockCode !== 'undefined') {
                return promisify(BlockCode.Commands.analogReadAsync(pin));
            }
            return new Promise(function () { return 0; });
        }
        Arduino.analogReadAsync = analogReadAsync;
        /**
         * Reads the distance using a HC-SR04 ultrasonic sensor.
         * @param trigger The number of the pin to trigger the sensor
         * @param echo the number of the pin which will get the distance echo
         * @returns An interger representation of the analog voltage on the pin specified
         */
        //% weight=84
        //% block
        function getDistanceAsync(trigger, echo) {
            // Call into our WinRT Component class.
            if (typeof BlockCode !== 'undefined') {
                return promisify(BlockCode.Commands.getDistanceAsync(trigger, echo));
            }
            return new Promise(function () { return 0; });
        }
        Arduino.getDistanceAsync = getDistanceAsync;
    })(Arduino = pxsim.Arduino || (pxsim.Arduino = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var Excel;
    (function (Excel) {
        // promisify copied from https://github.com/Microsoft/pxt/blob/master/pxtwinrt/winrt.ts
        function promisify(p) {
            return new Promise(function (resolve, reject) {
                p.done(function (v) { return resolve(v); }, function (e) { return reject(e); });
            });
        }
        //% weight=84
        //% block
        function writeAsync(data) {
            // Call into our WinRT Component class.
            if (typeof BlockCode !== 'undefined') {
                promisify(BlockCode.Commands.writeMessageAsync("Write data: " + data)).then(function (value) { return; });
                return promisify(BlockCode.Commands.sendCommandAsync("Write", data)).then(function (value) { return; });
                ;
            }
            return new Promise(function () { return; });
        }
        Excel.writeAsync = writeAsync;
        //% weight=84
        //% block
        function readAsync() {
            // Call into our WinRT Component class.
            if (typeof BlockCode !== 'undefined') {
                return promisify(BlockCode.Commands.sendCommandAsync("Read", "Read")).then(function (value) {
                    return promisify(BlockCode.Commands.writeMessageAsync("Reading data: " + value["ReadData"])).then(function (value2) { return value["ReadData"]; });
                });
            }
            return new Promise(function () { return; });
        }
        Excel.readAsync = readAsync;
        //% weight=84
        //% block
        function getDataItem(data, item) {
            try {
                var stringArray = data.split(',');
            }
            catch (e) {
                return "0";
            }
            return stringArray[item];
        }
        Excel.getDataItem = getDataItem;
    })(Excel = pxsim.Excel || (pxsim.Excel = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
(function (pxsim) {
    /**
     * This function gets called each time the program restarts
     */
    pxsim.initCurrentRuntime = function () {
        pxsim.runtime.board = new Board();
    };
    /**
     * Gets the current 'board', eg. program state.
     */
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    var Board = /** @class */ (function (_super) {
        __extends(Board, _super);
        function Board() {
            var _this = _super.call(this) || this;
            _this.bus = new pxsim.EventBus(pxsim.runtime);
            _this.element = document.getElementById('svgcanvas');
            _this.spriteElement = _this.element.getElementById('svgsprite');
            _this.hareElement = _this.element.getElementById('svgsprite2');
            _this.sprite = new pxsim.Sprite();
            _this.hare = new pxsim.Sprite();
            return _this;
        }
        Board.prototype.initAsync = function (msg) {
            document.body.innerHTML = ''; // clear children
            document.body.appendChild(this.element);
            return Promise.resolve();
        };
        Board.prototype.updateView = function () {
            this.spriteElement.cx.baseVal.value = this.sprite.x;
            this.spriteElement.cy.baseVal.value = this.sprite.y;
            this.hareElement.cx.baseVal.value = this.hare.x;
            this.hareElement.cy.baseVal.value = this.hare.y;
        };
        return Board;
    }(pxsim.BaseBoard));
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
