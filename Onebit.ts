/**
 * Custom blocks for One:Bit
 */

//%  weight=100 color=#FFC300 block="One:Bit" icon="\uf121"
namespace One_Bit {


    // Convert any AnalogPinPrime to AnalogPin
    function getAnalogPin(pin: AnalogPinPrime | ServoPin): AnalogPin {
        switch (pin) {
            case AnalogPinPrime.P0: return AnalogPin.P0;
            case AnalogPinPrime.P1: return AnalogPin.P1;
            case AnalogPinPrime.P2: return AnalogPin.P2;
            case AnalogPinPrime.P3: return AnalogPin.P3;
            case AnalogPinPrime.P4: return AnalogPin.P4;
            case AnalogPinPrime.P5: return AnalogPin.P5;
            case ServoPin.P0: return AnalogPin.P0;
            case ServoPin.P3: return AnalogPin.P3;
            case ServoPin.P4: return AnalogPin.P4;
            case ServoPin.P5: return AnalogPin.P5;
            case ServoPin.P6: return AnalogPin.P6;
            case ServoPin.P7: return AnalogPin.P7;
            case ServoPin.P10: return AnalogPin.P10;
            case ServoPin.P11: return AnalogPin.P11;
            default: return AnalogPin.P0; // Fallback
        }
    }

    ////////////////////
    //  PRIME  //
    ////////////////////

    let primeStrip: neopixel.Strip = null;

    // Define pins for Digital and Analog operations
    export enum DigitalPinPrime {
        //% block="P9"
        P9,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P19"
        P19,
        //% block="P20"
        P20
    }

    export enum AnalogPinPrime {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P3"
        P3,
        //% block="P4"
        P4,
        //% block="P5"
        P5
    }

    // Convert DigitalPinPrime to DigitalPin
    function getDigitalPin(pin: DigitalPinPrime): DigitalPin {
        switch (pin) {
            case DigitalPinPrime.P9: return DigitalPin.P9;
            case DigitalPinPrime.P13: return DigitalPin.P13;
            case DigitalPinPrime.P14: return DigitalPin.P14;
            case DigitalPinPrime.P15: return DigitalPin.P15;
            case DigitalPinPrime.P19: return DigitalPin.P19;
            case DigitalPinPrime.P20: return DigitalPin.P20;
            default: return DigitalPin.P0; // Fallback
        }
    }



    // Define servo pins for Prime
    export enum PrimeServoPin {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P3"
        P3,
        //% block="P4"
        P4,
        //% block="P9"
        P9,
        //% block="P10"
        P10,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P19"
        P19,
        //% block="P20"
        P20
    }

    // Define servo positions enumeration
    export enum PrimeServoPosition {
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

    // Convert PrimeServoPin to AnalogPin
    function getPrimeAnalogPin(pin: PrimeServoPin): AnalogPin {
        switch (pin) {
            case PrimeServoPin.P0: return AnalogPin.P0;
            case PrimeServoPin.P1: return AnalogPin.P1;
            case PrimeServoPin.P2: return AnalogPin.P2;
            case PrimeServoPin.P3: return AnalogPin.P3;
            case PrimeServoPin.P4: return AnalogPin.P4;
            case PrimeServoPin.P10: return AnalogPin.P10;
            case PrimeServoPin.P9: return AnalogPin.P9;
            case PrimeServoPin.P13: return AnalogPin.P13;
            case PrimeServoPin.P14: return AnalogPin.P14;
            case PrimeServoPin.P15: return AnalogPin.P15;
            case PrimeServoPin.P19: return AnalogPin.P19;
            case PrimeServoPin.P20: return AnalogPin.P20;
            default: return AnalogPin.P0; // Fallback
        }
    }


    /**
     * Write a digital value to a pin.
     * @param pin which pin to control
     * @param value the value to write (0 or 1)
     */
    //% subcategory="Prime"
    //% group="Digital Pins"
    //% blockId="digital_write"
    //% block="Digital write pin %pin |to %value"
    export function digitalWrite(pin: DigitalPinPrime, value: number): void {
        pins.digitalWritePin(getDigitalPin(pin), value);
    }

    /**
     * Read a digital value from a pin.
     * @param pin which pin to read from
     * @returns the value read (0 or 1)
     */
    //% subcategory="Prime"
    //% group="Digital Pins"
    //% blockId="digital_read"
    //% block="Read digital pin %pin"
    export function digitalRead(pin: DigitalPinPrime): number {
        return pins.digitalReadPin(getDigitalPin(pin));
    }

    /**
     * Read an analog value from a pin.
     * @param pin which pin to read from
     * @returns the analog value (0 to 1023)
     */
    //% subcategory="Prime"
    //% group="Analog Pins"
    //% blockId="analog_read"
    //% block="Read analog pin %pin"
    export function analogRead(pin: AnalogPinPrime): number {
        return pins.analogReadPin(getAnalogPin(pin));
    }

    /**
     * Write an analog value to a pin.
     * @param pin which pin to control
     * @param value the value to write (0 to 1023)
     */
    //% subcategory="Prime"
    //% group="Analog Pins"
    //% blockId="analog_write"
    //% block="Analog write pin %pin|to %value "
    //% value.min=0 value.max=1023
    export function analogWrite(pin: AnalogPinPrime, value: number): void {
        pins.analogWritePin(getAnalogPin(pin), value);
    }


    /**
     * Move a Prime servo to a specified position.
     * @param pin which pin to control
     * @param position the position to move to
     */
    //% subcategory="Prime"
    //% group="Positional Servo"
    //% blockId="move_prime_servo"
    //% block="Move Prime servo on pin %pin|to position %position"
    export function movePrimeServo(pin: PrimeServoPin, position: PrimeServoPosition): void {
        const angle = position === PrimeServoPosition.Zero ? 0 :
            position === PrimeServoPosition.FortyFive ? 45 :
                position === PrimeServoPosition.Ninety ? 90 :
                    position === PrimeServoPosition.OneThirtyFive ? 135 : 180;

        pins.servoWritePin(getPrimeAnalogPin(pin), angle);
    }

    /**
     * Move servo on the specified pin from one angle to another.
     * @param pin the pin connected to the servo
     * @param fromAngle the starting angle
     * @param toAngle the ending angle
     */
    //% subcategory="Prime"
    //% group="Positional Servo"
    //% blockId="move_servo_from_to"
    //% block="Move Prime servo on pin %pin|from angle %fromAngle degrees to %toAngle degrees"
    //% fromAngle.min=0 fromAngle.max=180
    //% toAngle.min=0 toAngle.max=180
    export function movePrimeServoFromTo(pin: ServoPin, fromAngle: number, toAngle: number): void {
        let step = fromAngle < toAngle ? 1 : -1;
        for (let angle = fromAngle; angle !== toAngle; angle += step) {
            pins.servoWritePin(getAnalogPin(pin), angle);
            basic.pause(20);
        }
        pins.servoWritePin(getAnalogPin(pin), toAngle); // Ensure final position
    }

    /**
     * Moves a servo on the given pin from one angle to another over a specified duration.
     * @param pin which pin to control
     * @param from starting angle
     * @param to ending angle
     * @param duration duration to complete the movement
     */
    //% subcategory="Prime"
    //% group="Positional Servo"
    //% blockId="move_servo_from_to_duration"
    //% block="Move Prime servo on pin %pin|from angle %from|to angle %to|over %duration seconds"
    //% from.min=0 from.max=180
    //% to.min=0 to.max=180
    //% duration.min=1 duration.max=10
    export function movePrimeServoFromTo1(pin: ServoPin, from: number, to: number, duration: number): void {
        const startAngle = Math.clamp(0, 180, from);
        const endAngle = Math.clamp(0, 180, to);
        const steps = Math.abs(endAngle - startAngle);
        const stepDuration = duration * 1000 / steps;

        for (let i = 0; i <= steps; i++) {
            const currentAngle = startAngle + (endAngle > startAngle ? i : -i);
            pins.servoWritePin(getAnalogPin(pin), currentAngle);
            basic.pause(stepDuration);
        }
    }

    /**
     * Control continuous Prime servo at specified speed and direction
     * @param pin which pin to control
     * @param direction the direction to turn
     * @param speed how fast to spin (0 to 255)
     */
    //% subcategory="Prime"
    //% group="Continuous Servo"
    //% blockId="control_continuous_prime_servo"
    //% block="Continuous Prime servo on |pin %pin|in direction %direction|at speed %speed"
    //% speed.min=0 speed.max=255
    export function controlContinuousPrimeServo(pin: PrimeServoPin, direction: ContinuousServoDirection, speed: number): void {
        const outputVal = Math.clamp(0, 255, speed);
        if (direction === ContinuousServoDirection.Clockwise) {
            pins.analogWritePin(getPrimeAnalogPin(pin), outputVal);
        } else {
            pins.analogWritePin(getPrimeAnalogPin(pin), 0);
        }
    }

    /**
         * Initialize the Prime
         * @param numLeds number of LEDs in the strip
         */
    //% subcategory="Prime"
    //% blockId="one_bit_prime_initialize"
    //% block="initialize Prime with %numLeds|LEDs"
    //% group=Colors 
    //% weight=150 blockGap=10
    //% blockNamespace="One_Bit"
    export function initializePrime(numLeds: number): void {
        primeStrip = neopixel.create(DigitalPin.P16, numLeds, NeoPixelMode.RGB);
    }

    /**
     * Show rainbow colors on the strip
     */
    //% subcategory="Prime"
    //% group=Colors weight=150
    //% blockId="one_bit_prime_show_rainbow"
    //% block="show Prime"
    //% weight=70 blockGap=8
    export function showPrime(): void {
        if (primeStrip) {
            primeStrip.showRainbow(1, 360);
            primeStrip.show();
        }
    }

    /**
     * Clear all LEDs on the strip
     */
    //% subcategory="Prime"
    //% group=Colors weight=150
    //% blockId="one_bit_prime_clear"
    //% block="clear Prime "
    //% weight=60 blockGap=8
    export function clearPrime(): void {
        if (primeStrip) {
            primeStrip.clear();
            primeStrip.show();
        }
    }

    /**
     * Set brightness of the strip
     * @param brightness brightness level (0-255)
     */
    //% subcategory="Prime"
    //% group=Colors weight=150
    //% blockId="one_bit_prime_set_brightness"
    //% block="set Prime brightness to %brightness"
    //% weight=30 blockGap=8
    export function setPrimeBrightness(brightness: number): void {
        if (primeStrip) {
            primeStrip.setBrightness(brightness);
            primeStrip.show();
        }
    }


    /**
     * Custom color picker
     */
    //% subcategory="Prime"
    //% value.defl='#ffffff'
    //% group=Colors weight=150
    //% blockId=brightColorNumberPicker block="%value"
    //% shim=TD_ID colorSecondary="#ffffff"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ffffff","#ff0000","#ff4500","#ffa500","#ffd700","#ffff00","#eaff00","#8eff00","#4df243","#42b87f","#00ffdc","#00dcff","#00a3ff","#0087ff","#0000ff","#4682b4","#6a5acd","#a300ff","#ea00ff","#ff00e3","#c71585","#ff69b4","#000000","#727474"]'
    //% value.fieldOptions.columns=5 value.fieldOptions.className='rgbColorPicker'

    export function __colorNumberPicker(value: number) {
        return value;
    }

    /**
     * Set color of all LEDs on the strip
     * @param color the color to set
     */
    //% subcategory="Prime"
    //% value.defl='#ffffff'
    //% group=Colors weight=150
    //% blockId="one_bit_prime_set_color"
    //% block="set Prime color to %color"
    //% weight=90 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function setPrimeColor(color: number): void {
        if (primeStrip) {
            primeStrip.showColor(color);
        }
    }

    /**
     * Set color of a specific LED on the strip
     * @param ledIndex the index of the LED to change
     * @param color the color to set
     */
    //% subcategory="Prime"
    //% value.defl='#ffffff'
    //% group=Colors weight=150
    //% blockId="one_bit_prime_set_led_color"
    //% block="set Prime LED %ledIndex|color to %color"
    //% weight=80 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function setPrimeLedColor(ledIndex: number, color: number): void {
        if (primeStrip) {
            primeStrip.setPixelColor(ledIndex, color);
            primeStrip.show();
        }
    }

    /**
     * Show a gradient pattern on the strip
     * @param startHue the starting hue value (0-360)
     * @param length the length of the gradient in number of LEDs
     * @param fromColor starting color of the gradient
     * @param toColor ending color of the gradient
     */
    //% subcategory="Prime"
    //% value.defl='#ffffff'
    //% group=Colors weight=150
    //% blockId="one_bit_prime_gradient"
    //% block="show gradient with start hue %startHue|length %length|from %fromColor|to %toColor"
    //% weight=60 blockGap=8
    //% fromColor.shadow="brightColorNumberPicker" // Add color picker
    //% toColor.shadow="brightColorNumberPicker" // Add color picker
    export function showPrimeGradient(startHue: number, length: number, fromColor: number, toColor: number): void {
        if (primeStrip) {
            for (let i = 0; i < length; i++) {
                let blendColor = blend(fromColor, toColor, i / length);
                primeStrip.setPixelColor(i, blendColor);
            }
            primeStrip.show();
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
     * Convert RGB values to a color number
     * @param r Red value (0-255)
     * @param g Green value (0-255)
     * @param b Blue value (0-255)
     */
    //% blockId="one_bit_prime_rgb_to_color"
    //% value.defl='#ffffff'
    //% group=Colors weight=150
    //% block="R %r|G %g|B %b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% subcategory="Prime"
    export function primeRgbToColor(r: number, g: number, b: number): number {
        return (r << 16) | (g << 8) | b;
    }

    /**
     * Convert HSL values to a color number
     * @param h Hue (0-360)
     * @param s Saturation (0-100)
     * @param l Luminosity (0-100)
     */
    //% blockId="one_bit_prime_hsl_to_color"
    //% value.defl='#ffffff'
    //% group=Colors weight=150
    //% block="hue %h|saturation %s|luminosity %l"
    //% h.min=0 h.max=360
    //% s.min=0 s.max=100
    //% l.min=0 l.max=100
    //% subcategory="Prime"
    export function primeHslToColor(h: number, s: number, l: number): number {
        return neopixel.hsl(h, s, l);
    }

    /**
     * Get a random color
     */
    //% blockId="one_bit_prime_random_color"
    //% value.defl='#ffffff'
    //% group=Colors weight=150
    //% block="random color"
    //% subcategory="Prime"
    export function primeRandomColor(): number {
        return Math.randomRange(0, 0xFFFFFF);
    }

    ////////////////////
    //  RAINBOW  //
    ////////////////////

    let rainbowStrip: neopixel.Strip = null;

    /**
     * Initialize the Rainbow
     * @param numLeds number of LEDs in the strip
     */
    //% subcategory="Rainbow"
    //% blockId="one_bit_rainbow_initialize"
    //% block="initialize Rainbow with %numLeds|LEDs"
    //% weight=100 blockGap=8
    export function initializeRainbow(numLeds: number): void {
        rainbowStrip = neopixel.create(DigitalPin.P2, numLeds, NeoPixelMode.RGB);
    }

    /**
     * Show rainbow colors on the rainbow strip
     */
    //% subcategory="Rainbow"
    //% blockId="one_bit_rainbow_show_rainbow"
    //% block="show Rainbow"
    //% weight=70 blockGap=8
    export function showRainbow(): void {
        if (rainbowStrip) {
            rainbowStrip.showRainbow(1, 360);
            rainbowStrip.show();
        }
    }

    /**
     * Clear all LEDs on the rainbow strip
     */
    //% subcategory="Rainbow"
    //% blockId="one_bit_rainbow_clear"
    //% block="clear Rainbow"
    //% weight=60 blockGap=8
    export function clearRainbow(): void {
        if (rainbowStrip) {
            rainbowStrip.clear();
            rainbowStrip.show();
        }
    }

    /**
     * Set brightness of the rainbow strip
     * @param brightness brightness level (0-255)
     */
    //% subcategory="Rainbow"
    //% blockId="one_bit_rainbow_set_brightness"
    //% block="set Rainbow brightness to %brightness"
    //% weight=30 blockGap=8
    export function setRainbowBrightness(brightness: number): void {
        if (rainbowStrip) {
            rainbowStrip.setBrightness(brightness);
            rainbowStrip.show();
        }
    }


    /**
     * Set color of all LEDs on the rainbow strip
     * @param color the color to set
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Colors weight=150
    //% blockId="one_bit_rainbow_set_color"
    //% block="set Rainbow color to %color"
    //% weight=90 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function setRainbowColor(color: number): void {
        if (rainbowStrip) {
            rainbowStrip.showColor(color);
        }
    }

    /**
     * Set color of a specific LED on the rainbow strip
     * @param ledIndex the index of the LED to change
     * @param color the color to set
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Colors weight=150
    //% blockId="one_bit_rainbow_set_led_color"
    //% block="set Rainbow LED %ledIndex|color to %color"
    //% weight=80 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function setRainbowLedColor(ledIndex: number, color: number): void {
        if (rainbowStrip) {
            rainbowStrip.setPixelColor(ledIndex, color);
            rainbowStrip.show();
        }
    }

    /**
     * Show a gradient pattern on the rainbow strip
     * @param startHue the starting hue value (0-360)
     * @param length the length of the gradient in number of LEDs
     * @param fromColor starting color of the gradient
     * @param toColor ending color of the gradient
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Colors weight=150
    //% blockId="one_bit_rainbow_gradient"
    //% block="show gradient with start hue %startHue|length %length|from %fromColor|to %toColor"
    //% weight=60 blockGap=8
    //% fromColor.shadow="brightColorNumberPicker"
    //% toColor.shadow="brightColorNumberPicker"
    export function showRainbowGradient(startHue: number, length: number, fromColor: number, toColor: number): void {
        if (rainbowStrip) {
            for (let i = 0; i < length; i++) {
                let blendColor = blend(fromColor, toColor, i / length);
                rainbowStrip.setPixelColor(i, blendColor);
            }
            rainbowStrip.show();
        }
    }

    /**
     * Convert RGB values to a color number for the rainbow strip
     * @param r Red value (0-255)
     * @param g Green value (0-255)
     * @param b Blue value (0-255)
     */
    //% blockId="one_bit_rainbow_rgb_to_color"
    //% value.defl='#ff0000' 
    //% group=Colors weight=150
    //% block="R %r|G %g|B %b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% subcategory="Rainbow"
    export function rainbowRgbToColor(r: number, g: number, b: number): number {
        return (r << 16) | (g << 8) | b;
    }

    /**
     * Convert HSL values to a color number for the rainbow strip
     * @param h Hue (0-360)
     * @param s Saturation (0-100)
     * @param l Luminosity (0-100)
     */
    //% blockId="one_bit_rainbow_hsl_to_color"
    //% value.defl='#ff0000' 
    //% group=Colors weight=150
    //% block="hue %h|saturation %s|luminosity %l"
    //% h.min=0 h.max=360
    //% s.min=0 s.max=100
    //% l.min=0 l.max=100
    //% subcategory="Rainbow"
    export function rainbowHslToColor(h: number, s: number, l: number): number {
        return neopixel.hsl(h, s, l);
    }

    /**
     * Get a random color for the rainbow strip
     */
    //% blockId="one_bit_rainbow_random_color"
    //% value.defl='#ff0000' 
    //% group=Colors weight=150
    //% block="random color"
    //% subcategory="Rainbow"
    export function rainbowRandomColor(): number {
        return Math.randomRange(0, 0xFFFFFF);
    }


    /**
      * Breathing effect on the strip
      * @param color the color to breathe
      */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Effects weight=150
    //% blockId="one_bit_rainbow_breathing"
    //% block="breathing effect with %color"
    //% weight=20 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function breathingEffect(color: number): void {
        if (rainbowStrip) {
            for (let i = 0; i < 255; i++) {
                rainbowStrip.setBrightness(i);
                rainbowStrip.showColor(color);
                basic.pause(10);
            }
            for (let i = 255; i > 0; i--) {
                rainbowStrip.setBrightness(i);
                rainbowStrip.showColor(color);
                basic.pause(10);
            }
        }
    }

    /**
     * Color wipe effect on the strip
     * @param color the color to wipe
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Effects weight=150
    //% blockId="one_bit_rainbow_color_wipe"
    //% block="Rainbow color wipe with %color"
    //% weight=15 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function colorWipe(color: number): void {
        if (rainbowStrip) {
            for (let i = 0; i < rainbowStrip.length(); i++) {
                rainbowStrip.setPixelColor(i, color);
                rainbowStrip.show();
                basic.pause(50);
            }
        }
    }

    /**
     * Theater chase effect on the strip
     * @param color the color to chase
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Effects weight=150
    //% blockId="one_bit_rainbow_theater_chase"
    //% block="theater chase with %color"
    //% weight=10 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function theaterChase(color: number): void {
        if (rainbowStrip) {
            for (let j = 0; j < 10; j++) { // Do 10 cycles of chasing
                for (let q = 0; q < 3; q++) {
                    for (let i = 0; i < rainbowStrip.length(); i += 3) {
                        rainbowStrip.setPixelColor(i + q, color);  // Turn every third pixel on
                    }
                    rainbowStrip.show();
                    basic.pause(50);
                    for (let i = 0; i < rainbowStrip.length(); i += 3) {
                        rainbowStrip.setPixelColor(i + q, 0);      // Turn every third pixel off
                    }
                }
            }
        }
    }

    /**
     * Simulate a fading effect
     * @param color the color to fade
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Effects weight=150
    //% blockId="one_bit_rainbow_fade"
    //% block="fade with %color"
    //% weight=40 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function fadeEffect(color: number): void {
        if (rainbowStrip) {
            for (let j = 0; j < 5; j++) {
                for (let i = 0; i < 255; i++) {
                    rainbowStrip.setBrightness(i);
                    rainbowStrip.showColor(color);
                    basic.pause(10);
                }
                for (let i = 255; i >= 0; i--) {
                    rainbowStrip.setBrightness(i);
                    rainbowStrip.showColor(color);
                    basic.pause(10);
                }
            }
        }
    }

    /**
     * Twinkle stars effect on the strip
     * @param color the color to twinkle
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Effects weight=150
    //% blockId="one_bit_rainbow_twinkle_stars"
    //% block="twinkle stars effect with %color"
    //% weight=4 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function twinkleStarsEffect(color: number): void {
        if (rainbowStrip) {
            for (let i = 0; i < 20; i++) {
                let ledIndex = Math.randomRange(0, rainbowStrip.length() - 1);
                rainbowStrip.setPixelColor(ledIndex, color);
                rainbowStrip.show();
                basic.pause(Math.randomRange(50, 150));
                rainbowStrip.setPixelColor(ledIndex, 0);
                rainbowStrip.show();
                basic.pause(Math.randomRange(50, 150));
            }
        }
    }

    /**
     * Continuous comet tail effect on the strip
     * @param color the color of the comet tail
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Effects weight=150
    //% blockId="one_bit_rainbow_comet_tail"
    //% block="comet tail effect with %color continuously"
    //% weight=3 blockGap=8
    //% color.shadow="brightColorNumberPicker"
    export function cometTailEffect(color: number): void {
        if (rainbowStrip) {
            let tailLength = 5;
            while (true) {
                for (let i = 0; i < rainbowStrip.length(); i++) {
                    rainbowStrip.clear();
                    for (let j = 0; j < tailLength; j++) {
                        let pixelIndex = (i - j + rainbowStrip.length()) % rainbowStrip.length();
                        let brightness = 255 - (j * 255 / tailLength);
                        rainbowStrip.setPixelColor(pixelIndex, color);
                        rainbowStrip.setBrightness(brightness);
                    }
                    rainbowStrip.show();
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
    //% value.defl='#ff0000' 
    //% group=Effects weight=150
    //% blockId="one_bit_rainbow_running_lights"
    //% block="running lights effect with %color1 and %color2"
    //% weight=2 blockGap=8
    //% color1.shadow="brightColorNumberPicker"
    //% color2.shadow="brightColorNumberPicker"
    export function runningLightsEffect(color1: number, color2: number): void {
        if (rainbowStrip) {
            for (let i = 0; i < rainbowStrip.length(); i++) {
                rainbowStrip.setPixelColor(i, color1);
                rainbowStrip.setPixelColor((i + rainbowStrip.length() / 2) % rainbowStrip.length(), color2);
                rainbowStrip.show();
                basic.pause(100);
                rainbowStrip.clear();
            }
        }
    }

    /**
     * Rainbow cycle effect on the strip
     */
    //% subcategory="Rainbow"
    //% value.defl='#ff0000' 
    //% group=Effects weight=150
    //% blockId="one_bit_rainbow_cycle"
    //% block="Rainbow cycle effect"
    //% weight=1 blockGap=8
    export function rainbowCycleEffect(): void {
        if (rainbowStrip) {
            for (let j = 0; j < 256 * 5; j++) { // 5 cycles of all colors on wheel
                for (let i = 0; i < rainbowStrip.length(); i++) {
                    rainbowStrip.setPixelColor(i, neopixel.hsl(i + j, 100, 50));
                }
                rainbowStrip.show();
                basic.pause(20);
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
        //% block="M1"
        Motor1,
        //% block="M2"
        Motor2,
        //% block="M3"
        Motor3,
        //% block="M4"
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
        //% block="P3"
        P3,
        //% block="P4"
        P4,
        //% block="P5"
        P5,
        //% block="P6"
        P6,
        //% block="P7"
        P7,
        //% block="P10"
        P10,
        //% block="P11"
        P11
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

    // Define stepper motor types
    export enum StepperMotorType {
        //% block="28BYJ-48"
        Stepper28BYJ,
        //% block="42BYGH"
        Stepper42BYGH
    }

    // Define stepper motor direction enumeration
    export enum StepperDirection {
        //% block="clockwise"
        Clockwise,
        //% block="counter-clockwise"
        CounterClockwise
    }

    // Define motor selection enumeration
    export enum StepperMotorSelection {
        //% block="M1M2"
        M1M2,
        //% block="M3M4"
        M3M4
    }

    // Helper function to control stepper motor speed and direction
    function controlStepperMotor(motorSelect: StepperMotorSelection, direction: StepperDirection, steps: number, speed: number): void {
        let stepDelay = Math.map(speed, 0, 255, 1000, 100); // Adjust delay based on speed

        for (let i = 0; i < steps; i++) {
            if (motorSelect === StepperMotorSelection.M1M2) {
                if (direction === StepperDirection.Clockwise) {
                    setMotorSpeed(Motors.Motor1, 255, MotorDirection.Forward);
                    setMotorSpeed(Motors.Motor2, 255, MotorDirection.Reverse);
                } else {
                    setMotorSpeed(Motors.Motor1, 255, MotorDirection.Reverse);
                    setMotorSpeed(Motors.Motor2, 255, MotorDirection.Forward);
                }
            } else if (motorSelect === StepperMotorSelection.M3M4) {
                if (direction === StepperDirection.Clockwise) {
                    setMotorSpeed(Motors.Motor3, 255, MotorDirection.Forward);
                    setMotorSpeed(Motors.Motor4, 255, MotorDirection.Reverse);
                } else {
                    setMotorSpeed(Motors.Motor3, 255, MotorDirection.Reverse);
                    setMotorSpeed(Motors.Motor4, 255, MotorDirection.Forward);
                }
            }
            basic.pause(stepDelay);

            // Stop motors after each step
            motorOff(Motors.Motor1);
            motorOff(Motors.Motor2);
            motorOff(Motors.Motor3);
            motorOff(Motors.Motor4);
        }
    }

    function setMotorSpeed(motor: Motors, speed: number, direction: MotorDirection): void {
        let outputVal = Math.clamp(0, 255, speed) * 4; // Map to 0-1023 range

        switch (motor) {
            case Motors.Motor1:
                if (direction === MotorDirection.Forward) {
                    pins.analogWritePin(AnalogPin.P1, outputVal);
                    pins.digitalWritePin(DigitalPin.P2, 0);
                } else {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    pins.analogWritePin(AnalogPin.P2, outputVal);
                }
                break;
            case Motors.Motor2:
                if (direction === MotorDirection.Forward) {
                    pins.analogWritePin(AnalogPin.P8, outputVal);
                    pins.digitalWritePin(DigitalPin.P9, 0);
                } else {
                    pins.digitalWritePin(DigitalPin.P8, 0);
                    pins.analogWritePin(AnalogPin.P9, outputVal);
                }
                break;
            case Motors.Motor3:
                if (direction === MotorDirection.Forward) {
                    pins.analogWritePin(AnalogPin.P13, outputVal);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                } else {
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.analogWritePin(AnalogPin.P14, outputVal);
                }
                break;
            case Motors.Motor4:
                if (direction === MotorDirection.Forward) {
                    pins.analogWritePin(AnalogPin.P15, outputVal);
                    pins.digitalWritePin(DigitalPin.P16, 0);
                } else {
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    pins.analogWritePin(AnalogPin.P16, outputVal);
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
    //% group="Individual Motor"  weight=150
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
    //% group="Individual Motor"  weight=150
    //% blockId="motor_bit_motor_off"
    //% block="Stop %motor"
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
    //% block="Move all motors %dir|at speed %speed"
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
    //% block="Turn %dir|at speed %speed"
    //% speed.min=0 speed.max=255
    export function turn(dir: TurnDirection, speed: number): void {
        performActionAndStop(() => {
            if (dir === TurnDirection.Left) {
                setMotorSpeed(Motors.Motor1, speed, MotorDirection.Reverse);
                setMotorSpeed(Motors.Motor2, speed, MotorDirection.Forward);
            } else {
                setMotorSpeed(Motors.Motor1, speed, MotorDirection.Forward);
                setMotorSpeed(Motors.Motor2, speed, MotorDirection.Reverse);
            }
        }, 0);
    }

    /**
     * Stops all motors
     */
    //% subcategory="Motor_Driver"
    //% group="All Motor"
    //% blockId="motor_bit_stop_all"
    //% block="Stop all motors"
    export function stopAll(): void {
        motorOff(Motors.Motor1);
        motorOff(Motors.Motor2);
        motorOff(Motors.Motor3);
        motorOff(Motors.Motor4);
    }

    /**
     * Moves a servo to a specified position.
     * @param pin which pin to control
     * @param position the position to move to
     */
    //% subcategory="Motor_Driver"
    //% group="Positional Servo"
    //% blockId="move_positional_servo"
    //% block="Move servo on pin %pin|to position %position"
    export function movePositionalServo(pin: ServoPin, position: ServoPosition): void {
        const angle = position === ServoPosition.Zero ? 0 :
            position === ServoPosition.FortyFive ? 45 :
                position === ServoPosition.Ninety ? 90 :
                    position === ServoPosition.OneThirtyFive ? 135 : 180;

        pins.servoWritePin(getAnalogPin(pin), angle);
    }

    /**
     * Move servo on the specified pin from one angle to another.
     * @param pin the pin connected to the servo
     * @param fromAngle the starting angle
     * @param toAngle the ending angle
     */
    //% subcategory="Motor_Driver"
    //% group="Positional Servo"  weight=150
    //% blockId="motor_bit_positional_servo_move_from_to"
    //% block="Move servo on pin %pin|from angle %fromAngle degrees to %toAngle degrees"
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
     * Moves a servo on the given pin from one angle to another over a specified duration.
     * @param pin which pin to control
     * @param from starting angle
     * @param to ending angle
     * @param duration duration to complete the movement
     */
    //% subcategory="Motor_Driver"
    //% group="Positional Servo"  weight=150
    //% blockId="move_servo_from_to"
    //% block="Move servo on pin %pin|from angle %from|to angle %to|over %duration seconds"
    //% from.min=0 from.max=180
    //% to.min=0 to.max=180
    //% duration.min=1 duration.max=10
    export function moveServoFromTo1(pin: ServoPin, from: number, to: number, duration: number): void {
        const startAngle = Math.clamp(0, 180, from);
        const endAngle = Math.clamp(0, 180, to);
        const steps = Math.abs(endAngle - startAngle);
        const stepDuration = duration * 1000 / steps;

        for (let i = 0; i <= steps; i++) {
            const currentAngle = startAngle + (endAngle > startAngle ? i : -i);
            pins.servoWritePin(getAnalogPin(pin), currentAngle);
            basic.pause(stepDuration);
        }
    }

    /**
     * Control continuous servo at specified speed and direction
     * @param pin which pin to control
     * @param direction the direction to turn
     * @param speed how fast to spin (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="Continuous Servo"  weight=150
    //% blockId="control_continuous_servo"
    //% block="Control continuous servo on |pin %pin|in direction %direction|at speed %speed"
    //% speed.min=0 speed.max=255
    export function controlContinuousServo(pin: ServoPin, direction: ContinuousServoDirection, speed: number): void {
        const outputVal = Math.clamp(0, 255, speed);
        if (direction === ContinuousServoDirection.Clockwise) {
            pins.analogWritePin(getAnalogPin(pin), outputVal);
        } else {
            pins.analogWritePin(getAnalogPin(pin), 0);
        }
    }

    // Blocks for 28BYJ-48 stepper motor
    /**
     * Control 28BYJ-48 stepper motor by degrees
     * @param motorSelect which motor (M1M2 or M3M4)
     * @param direction rotation direction
     * @param deg degrees to rotate
     * @param speed speed of rotation (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="Stepper Motor"
    //% blockId="Stepper_28byj48_deg" 
    //% block="28BYJ-48 step motor %motorSelect|direction %direction|degrees %deg|speed %speed"
    //% speed.min=0 speed.max=255
    export function stepper28BYJ48Deg(motorSelect: StepperMotorSelection, direction: StepperDirection, deg: number, speed: number): void {
        let steps = deg * (4076 / 360); // Convert degrees to steps for 28BYJ-48
        controlStepperMotor(motorSelect, direction, steps, speed);
    }

    /**
     * Control 28BYJ-48 stepper motor by turns
     * @param motorSelect which motor (M1M2 or M3M4)
     * @param direction rotation direction
     * @param turns number of turns
     * @param speed speed of rotation (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="Stepper Motor"
    //% blockId="Stepper_28byj48_turns" 
    //% block="28BYJ-48 step motor %motorSelect|direction %direction|turns %turns|speed %speed"
    //% speed.min=0 speed.max=255
    export function stepper28BYJ48Turns(motorSelect: StepperMotorSelection, direction: StepperDirection, turns: number, speed: number): void {
        let steps = turns * 4076; // Full steps for one turn
        controlStepperMotor(motorSelect, direction, steps, speed);
    }

    // Blocks for 42BYGH stepper motor
    /**
     * Control 42BYGH stepper motor by degrees
     * @param motorSelect which motor (M1M2 or M3M4)
     * @param direction rotation direction
     * @param deg degrees to rotate
     * @param speed speed of rotation (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="Stepper Motor"
    //% blockId="Stepper_42bygh_deg" 
    //% block="42BYGH step motor %motorSelect|direction %direction|degrees %deg|speed %speed"
    //% speed.min=0 speed.max=255
    export function stepper42BYGHDeg(motorSelect: StepperMotorSelection, direction: StepperDirection, deg: number, speed: number): void {
        let steps = deg * (200 / 360); // Convert degrees to steps for 42BYGH
        controlStepperMotor(motorSelect, direction, steps, speed);
    }

    /**
     * Control 42BYGH stepper motor by turns
     * @param motorSelect which motor (M1M2 or M3M4)
     * @param direction rotation direction
     * @param turns number of turns
     * @param speed speed of rotation (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="Stepper Motor"
    //% blockId="Stepper_42bygh_turns" 
    //% block="42BYGH step motor %motorSelect|direction %direction|turns %turns|speed %speed"
    //% speed.min=0 speed.max=255
    export function stepper42BYGHTurns(motorSelect: StepperMotorSelection, direction: StepperDirection, turns: number, speed: number): void {
        let steps = turns * 200; // Full steps for one turn
        controlStepperMotor(motorSelect, direction, steps, speed);
    }
    // Blocks for dual-stepper motor control

    /**
     * Control dual stepper motors by degrees with independent speed control
     * @param motor1Select motor M1M2 or M3M4
     * @param dir1 direction for motor 1
     * @param deg1 degrees for motor 1
     * @param speed1 speed for motor 1 (0 to 255)
     * @param motor2Select motor M1M2 or M3M4
     * @param dir2 direction for motor 2
     * @param deg2 degrees for motor 2
     * @param speed2 speed for motor 2 (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="Stepper Motor"
    //% blockId="dual_stepper_deg" 
    //% block="Dual stepper motor |%motor1Select dir %dir1 deg %deg1|%motor2Select dir %dir2 deg %deg2|speed %speed"
    //% speed.min=0 speed.max=255
    export function dualStepperDeg(motor1Select: StepperMotorSelection, dir1: StepperDirection, deg1: number, motor2Select: StepperMotorSelection, dir2: StepperDirection, deg2: number, speed: number): void {
        stepper28BYJ48Deg(motor1Select, dir1, deg1, speed);
        stepper28BYJ48Deg(motor2Select, dir2, deg2, speed);
    }

    /**
     * Control dual stepper motors by turns with independent speed control
     * @param motor1Select motor M1M2 or M3M4
     * @param dir1 direction for motor 1
     * @param turns1 turns for motor 1
     * @param speed1 speed for motor 1 (0 to 255)
     * @param motor2Select motor M1M2 or M3M4
     * @param dir2 direction for motor 2
     * @param turns2 turns for motor 2
     * @param speed2 speed for motor 2 (0 to 255)
     */
    //% subcategory="Motor_Driver"
    //% group="Stepper Motor"
    //% blockId="dual_stepper_turns" 
    //% block="Dual stepper motor |%motor1Select dir %dir1 turns %turns1|%motor2Select dir %dir2 turns %turns2|speed %speed"
    //% speed.min=0 speed.max=255
    export function dualStepperTurns(motor1Select: StepperMotorSelection, dir1: StepperDirection, turns1: number, motor2Select: StepperMotorSelection, dir2: StepperDirection, turns2: number, speed: number): void {
        stepper28BYJ48Turns(motor1Select, dir1, turns1, speed);
        stepper28BYJ48Turns(motor2Select, dir2, turns2, speed);
    }


}