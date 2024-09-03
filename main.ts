plenbit.servoInitialSet()
basic.forever(function () {
    plenbit.servoWriteInit(6, 90)
    basic.pause(500)
    plenbit.servoWriteInit(6, -90)
    basic.pause(500)
})
