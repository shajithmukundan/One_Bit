/**
 * Custom blocks for One_Bit
 */
//% weight=100 color=#E3D114 icon="\uf1ba" block="One_Bit"
namespace One_Bit {

    //////////////
    //  PRIME  //
    //////////////

    /**
     * Example block for Prime subcategory
     */
    //% subcategory="Prime"
    //% blockId="one_bit_prime_example"
    //% block="Prime block example"
    //% weight=100 blockGap=8
    export function primeBlockExample(): void {
        // Code for Prime block
    }

    ////////////////
    //  RAINBOW  //
    ////////////////

    let neoStrip: neopixel.Strip = null;

    /**
     * Initialize the Rainbow
     * @param numLeds number of LEDs in the strip
     */
    //% subcategory="Rainbow"
    //% blockId="one_bit_rainbow_initialize"
    //% block="initialize Rainbow with %numLeds|LEDs"
    //% weight=100 blockGap=8
    export function initializeNeoPixel(numLeds: number): void {
        neoStrip = neopixel.create(DigitalPin.P2, numLeds, NeoPixelMode.RGB);
    }



    /**
     * Custom color picker
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' group=Colors weight=150
    //% blockId=brightColorNumberPicker block="%value"
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ffffff","#ff0000","#ffdc00","#ffff00","#eaff00","#8eff00","#4df243","#42b87f","#00ffdc","#00dcff","#00a3ff","#0087ff","#acb3f3","#e0acfe","#a300ff","#ea00ff","#ff00e3","#fdd3f8","#f1d07e","#a8b5f5","#C3C6D8", "#f3f2da","#727474", "#000000"]'
    //% value.fieldOptions.columns=5 value.fieldOptions.className='rgbColorPicker' 
    export function __colorNumberPicker(value: number) {
        return value;
    }

    /**
     * Set color of all LEDs on the strip
     * @param color the color to set
     */
    //% subcategory="Rainbow"
    //% value.defl='#eaff00' group=Colors weight=150
    //% blockId="one_bit_rainbow_set_color"
    //% block="set Rainbow color to %color"
    //% weight=90 blockGap=8
    //% color.shadow="brightColorNumberPicker" // Add color picker
    export function setStripColor(color: number): void {
        if (neoStrip) {
            neoStrip.showColor(color);
        }
    }

    /**
     * Set color of a specific LED on the strip
     * @param ledIndex the index of the LED to change
     * @param color the color to set
     */
    //% subcategory="Rainbow"
    //% value.defl='#42b87f' group=Colors weight=150
    //% blockId="one_bit_rainbow_set_led_color"
    //% block="set Rainbow LED %ledIndex|color to %color"
    //% weight=80 blockGap=8
    //% color.shadow="brightColorNumberPicker" // Add color picker
    export function setLedColor(ledIndex: number, color: number): void {
        if (neoStrip) {
            neoStrip.setPixelColor(ledIndex, color);
            neoStrip.show();
        }
    }

    /**
     * Show rainbow colors on the strip
     */
    //% subcategory="Rainbow"
    //% blockId="one_bit_rainbow_show_rainbow"
    //% block="show Rainbow"
    //% weight=70 blockGap=8
    export function showRainbow(): void {
        if (neoStrip) {
            neoStrip.showRainbow(1, 360);
            neoStrip.show();
        }
    }

    /**
     * Clear all LEDs on the strip
     */
    //% subcategory="Rainbow"
    //% blockId="one_bit_rainbow_clear"
    //% block="clear Rainbow "
    //% weight=60 blockGap=8
    export function clearStrip(): void {
        if (neoStrip) {
            neoStrip.clear();
            neoStrip.show();
        }
    }

    /**
     * Rotate the colors on the strip
     */
    //% subcategory="Rainbow"
    //% value.defl='#ffdc00' group=Effects weight=150
    //% blockId="one_bit_rainbow_rotate"
    //% block="Rotate Rainbow "
    //% weight=50 blockGap=8
    export function rotateStrip(): void {
        if (neoStrip) {
            neoStrip.rotate(1);
            neoStrip.show();
        }
    }

    /**
     * Set brightness of the strip
     * @param brightness brightness level (0-255)
     */
    //% subcategory="Rainbow"
    //% value.defl='#8eff00' group=Colors weight=150
    //% blockId="one_bit_rainbow_set_brightness"
    //% block="set Rainbow brightness to %brightness"
    //% weight=30 blockGap=8
    export function setStripBrightness(brightness: number): void {
        if (neoStrip) {
            neoStrip.setBrightness(brightness);
            neoStrip.show();
        }
    }

    /**
     * Breathing effect on the strip
     * @param color the color to breathe
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff00e3' group=Effects weight=150
    //% blockId="one_bit_rainbow_breathing"
    //% block="breathing effect with %color"
    //% weight=20 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function breathingEffect(color: number): void {
        if (neoStrip) {
            for (let i = 0; i < 255; i++) {
                neoStrip.setBrightness(i);
                neoStrip.showColor(color);
                basic.pause(10);
            }
            for (let i = 255; i > 0; i--) {
                neoStrip.setBrightness(i);
                neoStrip.showColor(color);
                basic.pause(10);
            }
        }
    }

    /**
     * Color wipe effect on the strip
     * @param color the color to wipe
     */
    //% subcategory="Rainbow"
    //% value.defl='#f1d07e' group=Effects weight=150
    //% blockId="one_bit_rainbow_color_wipe"
    //% block="Rainbow color wipe with %color"
    //% weight=15 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function colorWipe(color: number): void {
        if (neoStrip) {
            for (let i = 0; i < neoStrip.length(); i++) {
                neoStrip.setPixelColor(i, color);
                neoStrip.show();
                basic.pause(50);
            }
        }
    }

    /**
     * Theater chase effect on the strip
     * @param color the color to chase
     */
    //% subcategory="Rainbow"
    //% value.defl='#f3f2da' group=Effects weight=150
    //% blockId="one_bit_rainbow_theater_chase"
    //% block="theater chase with %color"
    //% weight=10 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function theaterChase(color: number): void {
        if (neoStrip) {
            for (let j = 0; j < 10; j++) { // Do 10 cycles of chasing
                for (let q = 0; q < 3; q++) {
                    for (let i = 0; i < neoStrip.length(); i += 3) {
                        neoStrip.setPixelColor(i + q, color);  // Turn every third pixel on
                    }
                    neoStrip.show();
                    basic.pause(50);
                    for (let i = 0; i < neoStrip.length(); i += 3) {
                        neoStrip.setPixelColor(i + q, 0);      // Turn every third pixel off
                    }
                }
            }
        }
    }

    /**
     * Show a gradient pattern on the strip
     * @param startHue the starting hue value (0-360)
     * @param length the length of the gradient in number of LEDs
     * @param fromColor starting color of the gradient
     * @param toColor ending color of the gradient
     */
    //% subcategory="Rainbow"
    //% value.defl='#727474' group=Colors weight=150
    //% blockId="one_bit_rainbow_gradient"
    //% block="show gradient with start hue %startHue|length %length|from %fromColor|to %toColor"
    //% weight=60 blockGap=8
    //% fromColor.shadow="brightColorNumberPicker" // Add color picker
    //% toColor.shadow="brightColorNumberPicker" // Add color picker
    export function showGradient(startHue: number, length: number, fromColor: number, toColor: number): void {
        if (neoStrip) {
            for (let i = 0; i < length; i++) {
                let blendColor = blend(fromColor, toColor, i / length);
                neoStrip.setPixelColor(i, blendColor);
            }
            neoStrip.show();
        }
    }

    /**
     * Helper function to blend two colors
     * @param color1 the first color
     * @param color2 the second color
     * @param blend the blend factor between the two colors (0-1)
     */
    function blend(color1: number, color2: number, blend: number): number {
        let r1 = (color1 >> 16) & 0xFF;
        let g1 = (color1 >> 8) & 0xFF;
        let b1 = color1 & 0xFF;

        let r2 = (color2 >> 16) & 0xFF;
        let g2 = (color2 >> 8) & 0xFF;
        let b2 = color2 & 0xFF;

        let r = Math.round(r1 * (1 - blend) + r2 * blend);
        let g = Math.round(g1 * (1 - blend) + g2 * blend);
        let b = Math.round(b1 * (1 - blend) + b2 * blend);

        return (r << 16) | (g << 8) | b;
    }
    /**
     * Simulate a fading effect
     * @param color the color to fade
     */
    //% subcategory="Rainbow"
    //% value.defl='#00a3ff' group=Effects weight=150
    //% blockId="one_bit_rainbow_fade"
    //% block="fade in and out with %color"
    //% weight=10 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function fade(color: number): void {
        if (neoStrip) {
            for (let i = 0; i <= 255; i += 5) {
                neoStrip.setBrightness(i);
                neoStrip.showColor(color);
                basic.pause(10);
            }
            for (let i = 255; i >= 0; i -= 5) {
                neoStrip.setBrightness(i);
                neoStrip.showColor(color);
                basic.pause(10);
            }
        }
    }

    /**
     * Twinkle stars effect on the strip
     * @param color the color to twinkle
     */
    //% subcategory="Rainbow"
    //% value.defl='#acb3f3' group=Effects weight=150
    //% blockId="one_bit_rainbow_twinkle_stars"
    //% block="twinkle stars effect with %color"
    //% weight=4 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function twinkleStarsEffect(color: number): void {
        if (neoStrip) {
            for (let i = 0; i < 20; i++) {
                let ledIndex = Math.randomRange(0, neoStrip.length() - 1);
                neoStrip.setPixelColor(ledIndex, color);
                neoStrip.show();
                basic.pause(Math.randomRange(50, 150));
                neoStrip.setPixelColor(ledIndex, 0);
                neoStrip.show();
                basic.pause(Math.randomRange(50, 150));
            }
        }
    }
    /**
     * Continuous comet tail effect on the strip
     * @param color the color of the comet tail
     */
    //% subcategory="Rainbow"
    //% value.defl='#C3C6D8' group=Effects weight=150
    //% blockId="one_bit_rainbow_comet_tail"
    //% block="comet tail effect with %color continuously"
    //% weight=3 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function cometTailEffect(color: number): void {
        if (neoStrip) {
            let tailLength = 5;
            while (true) {
                for (let i = 0; i < neoStrip.length(); i++) {
                    neoStrip.clear();
                    for (let j = 0; j < tailLength; j++) {
                        let pixelIndex = (i - j + neoStrip.length()) % neoStrip.length();
                        let brightness = 255 - (j * 255 / tailLength);
                        neoStrip.setPixelColor(pixelIndex, color);
                        neoStrip.setBrightness(brightness);
                    }
                    neoStrip.show();
                    basic.pause(50);
                }
            }
        }
    }



    /**
     * Running lights effect on the strip
     * @param color1 the first color for the running lights
     * @param color2 the second color for the running lights
     */
    //% subcategory="Rainbow"
    //% value.defl='#00dcff' group=Effects weight=150
    //% blockId="one_bit_rainbow_running_lights"
    //% block="running lights effect with %color1 and %color2"
    //% weight=2 blockGap=8
    //% color1.shadow="brightColorNumberPicker"
    //% color2.shadow="brightColorNumberPicker"
    export function runningLightsEffect(color1: number, color2: number): void {
        if (neoStrip) {
            for (let i = 0; i < neoStrip.length(); i++) {
                neoStrip.setPixelColor(i, color1);
                neoStrip.setPixelColor((i + neoStrip.length() / 2) % neoStrip.length(), color2);
                neoStrip.show();
                basic.pause(100);
                neoStrip.clear();
            }
        }
    }

    /**
     * Rainbow cycle effect on the strip
     */
    //% subcategory="Rainbow"
    //% value.defl='#fdd3f8' group=Effects weight=150
    //% blockId="one_bit_rainbow_cycle"
    //% block="Rainbow cycle effect"
    //% weight=1 blockGap=8
    export function rainbowCycleEffect(): void {
        if (neoStrip) {
            for (let j = 0; j < 256 * 5; j++) { // 5 cycles of all colors on wheel
                for (let i = 0; i < neoStrip.length(); i++) {
                    neoStrip.setPixelColor(i, neopixel.hsl(i + j, 100, 50));
                }
                neoStrip.show();
                basic.pause(20);
            }
        }
    }

    /**
     * Convert RGB values to a color number
     * @param r Red value (0-255)
     * @param g Green value (0-255)
     * @param b Blue value (0-255)
     */
    //% blockId="one_bit_rgb_to_color"
    //% value.defl='#e0acfe' group=Colors weight=150
    //% block="R %r|G %g|B %b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% subcategory="Rainbow"
    export function rgbToColor(r: number, g: number, b: number): number {
        return (r << 16) | (g << 8) | b;
    }

    /**
     * Convert HSL values to a color number
     * @param h Hue (0-360)
     * @param s Saturation (0-100)
     * @param l Luminosity (0-100)
     */
    //% blockId="one_bit_hsl_to_color"
    //% value.defl='#8eff00' group=Colors weight=150
    //% block="hue %h|saturation %s|luminosity %l"
    //% h.min=0 h.max=360
    //% s.min=0 s.max=100
    //% l.min=0 l.max=100
    //% subcategory="Rainbow"
    export function hslToColor(h: number, s: number, l: number): number {
        return neopixel.hsl(h, s, l);
    }

    /**
     * Get a random color
     */
    //% blockId="one_bit_random_color"
    //% value.defl='#acb3f3' group=Colors weight=150
    //% block="random color"
    //% subcategory="Rainbow"
    export function randomColor(): number {
        return neopixel.rgb(Math.randomRange(0, 255), Math.randomRange(0, 255), Math.randomRange(0, 255));
    }

    /**
     * Select a pattern for the LED strip
     * @param pattern the pattern to apply
     */
    //% blockId="one_bit_pattern"
    //% value.defl='#f3f2da' group=Colors weight=150
    //% block="patterns %pattern"
    //% subcategory="Rainbow"
    export function applyPattern(pattern: number): void {
        if (neoStrip) {
            switch (pattern) {
                case 0:
                    // Example pattern: solid red
                    neoStrip.showColor(neopixel.colors(NeoPixelColors.Red));
                    break;
                case 1:
                    // Example pattern: rainbow
                    neoStrip.showRainbow(1, 360);
                    neoStrip.show();
                    break;
                // Add more patterns as needed
                default:
                    // Default pattern
                    neoStrip.clear();
                    neoStrip.show();
                    break;
            }
        }
    }



    //////////////
    // MOTOR_DRIVER  //
    //////////////

    // Define motor direction enumeration
    export enum MotorDirection {
        //% block="forward"
        Forward,
        //% block="reverse"
        Reverse
    }

    // Define motor enumeration
    export enum Motors {
        //% block="motor 1"
        Motor1,
        //% block="motor 2"
        Motor2,
        //% block="motor 3"
        Motor3,
        //% block="motor 4"
        Motor4
    }

    // Define turn direction enumeration
    export enum TurnDirection {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

    // Define servo pin enumeration
    export enum ServoPin {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P13"
        P13,
        //% block="P15"
        P15
    }

    // Define servo positions enumeration
    export enum ServoPosition {
        //% block="0 degrees"
        Zero,
        //% block="45 degrees"
        FortyFive,
        //% block="90 degrees"
        Ninety,
        //% block="135 degrees"
        OneThirtyFive,
        //% block="180 degrees"
        OneEighty
    }

    // Define continuous servo directions enumeration
    export enum ContinuousServoDirection {
        //% block="clockwise"
        Clockwise,
        //% block="counter-clockwise"
        CounterClockwise
    }

    // Convert ServoPin to AnalogPin
    function getAnalogPin(pin: ServoPin): AnalogPin {
        switch (pin) {
            case ServoPin.P0: return AnalogPin.P0;
            case ServoPin.P1: return AnalogPin.P1;
            case ServoPin.P2: return AnalogPin.P2;
            case ServoPin.P8: return AnalogPin.P8;
            case ServoPin.P13: return AnalogPin.P13;
            case ServoPin.P15: return AnalogPin.P15;
            default: return AnalogPin.P0; // Fallback
        }
    }

    function setMotorSpeed(motor: Motors, speed: number, direction: MotorDirection): void {
        let OutputVal = Math.clamp(0, 255, speed) * 4; // Map to 0-1023 range

        switch (motor) {
            case Motors.Motor1:
                if (direction === MotorDirection.Forward) {
                    pins.analogWritePin(AnalogPin.P1, OutputVal);
                    pins.digitalWritePin(DigitalPin.P2, 0);
                } else {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    pins.analogWritePin(AnalogPin.P2, OutputVal);
                }
                break;
            case Motors.Motor2:
                if (direction === MotorDirection.Forward) {
                    pins.analogWritePin(AnalogPin.P8, OutputVal);
                    pins.digitalWritePin(DigitalPin.P9, 0);
                } else {
                    pins.digitalWritePin(DigitalPin.P8, 0);
                    pins.analogWritePin(AnalogPin.P9, OutputVal);
                }
                break;
            case Motors.Motor3:
                if (direction === MotorDirection.Forward) {
                    pins.analogWritePin(AnalogPin.P13, OutputVal);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                } else {
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.analogWritePin(AnalogPin.P14, OutputVal);
                }
                break;
            case Motors.Motor4:
                if (direction === MotorDirection.Forward) {
                    pins.analogWritePin(AnalogPin.P15, OutputVal);
                    pins.digitalWritePin(DigitalPin.P16, 0);
                } else {
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    pins.analogWritePin(AnalogPin.P16, OutputVal);
                }
                break;
        }
    }

    function performActionAndStop(action: () => void, duration: number): void {
        action();
        control.runInBackground(() => {
            basic.pause(duration * 1000);
            stopAll();
        });
    }

    /**
     * Turns on motor in the direction specified at the requested speed 
     * @param motor which motor to turn on
     * @param dir which direction to go
     * @param speed how fast to spin the motor (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="Individual Motor"
    //% blockId="motor_bit_motor_on"
    //% block="Rotate %motor|%dir|at speed %speed"
    //% speed.min=0 speed.max=255
    export function motorOn(motor: Motors, dir: MotorDirection, speed: number): void {
        setMotorSpeed(motor, speed, dir);
    }

    /**
     * Turns off the motor
     * @param motor which motor to turn off
     */
    //% subcategory="Motor_Driver"
    //% group="Individual Motor"
    //% blockId="motor_bit_motor_off"
    //% block="stop %motor"
    export function motorOff(motor: Motors): void {
        setMotorSpeed(motor, 0, MotorDirection.Forward);
    }

    /**
     * Moves the robot forward or backward at the given speed.
     * @param dir which direction to move
     * @param speed how fast to spin the motors (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="All Motor"
    //% blockId="motor_bit_move"
    //% block="move %dir|at speed %speed"
    //% speed.min=0 speed.max=255
    export function move(dir: MotorDirection, speed: number): void {
        performActionAndStop(() => {
            setMotorSpeed(Motors.Motor1, speed, dir);
            setMotorSpeed(Motors.Motor2, speed, dir);
            setMotorSpeed(Motors.Motor3, speed, dir);
            setMotorSpeed(Motors.Motor4, speed, dir);
        }, 0);
    }

    /**
     * Turns the robot left or right at the given speed.
     * @param dir which direction to turn
     * @param speed how fast to spin the motors (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="All Motor"
    //% blockId="motor_bit_turn"
    //% block="turn %dir|at speed %speed"
    //% speed.min=0 speed.max=255
    export function turn(dir: TurnDirection, speed: number): void {
        let leftSpeed = dir === TurnDirection.Left ? -speed : speed;
        let rightSpeed = dir === TurnDirection.Left ? speed : -speed;
        performActionAndStop(() => {
            setMotorSpeed(Motors.Motor1, leftSpeed, MotorDirection.Forward);
            setMotorSpeed(Motors.Motor2, rightSpeed, MotorDirection.Forward);
            setMotorSpeed(Motors.Motor3, leftSpeed, MotorDirection.Forward);
            setMotorSpeed(Motors.Motor4, rightSpeed, MotorDirection.Forward);
        }, 0);
    }

    /**
     * Stops all motors
     */
    //% subcategory="Motor_Driver"
    //% group="All Motor"
    //% blockId="motor_bit_stop"
    //% block="stop all motors"
    export function stopAll(): void {
        motorOff(Motors.Motor1);
        motorOff(Motors.Motor2);
        motorOff(Motors.Motor3);
        motorOff(Motors.Motor4);
    }

    /**
     * Move servo on the specified pin to the given angle.
     * @param pin the pin connected to the servo
     * @param angle the angle to move to (0-180)
     */
    //% subcategory="Motor_Driver"
    //% group="Positional Servo"
    //% blockId="motor_bit_positional_servo_move"
    //% block="move servo on pin %pin|to angle %angle degrees"
    //% angle.min=0 angle.max=180
    export function movePositionalServo(pin: ServoPin, angle: number): void {
        pins.servoWritePin(getAnalogPin(pin), angle);
    }

    /**
     * Move servo on the specified pin from one angle to another.
     * @param pin the pin connected to the servo
     * @param fromAngle the starting angle
     * @param toAngle the ending angle
     */
    //% subcategory="Motor_Driver"
    //% group="Positional Servo"
    //% blockId="motor_bit_positional_servo_move_from_to"
    //% block="move servo on pin %pin|from angle %fromAngle degrees to %toAngle degrees"
    //% fromAngle.min=0 fromAngle.max=180
    //% toAngle.min=0 toAngle.max=180
    export function moveServoFromTo(pin: ServoPin, fromAngle: number, toAngle: number): void {
        let step = fromAngle < toAngle ? 1 : -1;
        for (let angle = fromAngle; angle !== toAngle; angle += step) {
            pins.servoWritePin(getAnalogPin(pin), angle);
            basic.pause(20);
        }
        pins.servoWritePin(getAnalogPin(pin), toAngle); // Ensure final position
    }

    /**
     * Rotate continuous servo in the specified direction at the given speed.
     * @param pin the pin connected to the servo
     * @param direction the direction to rotate
     * @param speed the speed to rotate (0-100)
     */
    //% subcategory="Motor_Driver"
    //% group="Continuous Servo"
    //% blockId="motor_bit_continuous_servo_rotate"
    //% block="rotate continuous servo on pin %pin|%direction|at speed %speed"
    //% speed.min=0 speed.max=100
    export function rotateContinuousServo(pin: ServoPin, direction: ContinuousServoDirection, speed: number): void {
        let output = Math.clamp(0, 100, speed) * 2; // Map to 0-200 range
        let servoSpeed = direction === ContinuousServoDirection.Clockwise ? 90 + output : 90 - output;
        pins.servoSetPulse(getAnalogPin(pin), servoSpeed);
    }

}