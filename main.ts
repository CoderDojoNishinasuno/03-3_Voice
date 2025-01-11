input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Happy)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    serial.writeValue("x", input.soundLevel())
})
