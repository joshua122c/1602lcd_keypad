function read_pad (text: string) {
    index = text_array.indexOf(text)
    if (index != -1) {
        if (index <= 9) {
            sensors.i2cLcdShowNumber(1, 1, index + 1)
        }
    }
}
let text_array: string[] = []
let index = 0
index = 1
let text_display = 0
sensors.i2cLcdInit(39)
sensors.i2cLcdDisplay_Control(Item._clear)
sensors.actuator_keyborad_pin(DigitalPin.P2, DigitalPin.P8)
text_array = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
"A",
"B",
"C",
"D",
"*",
"#"
]
basic.forever(function () {
    read_pad(sensors.actuator_keyborad_read())
})
