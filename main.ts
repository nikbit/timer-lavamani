input.onButtonPressed(Button.A, function () {
    while (Secondi > 0) {
        Secondi += -1
        basic.pause(1000)
        basic.showNumber(Secondi)
    }
    basic.showIcon(IconNames.Yes)
    music.playMelody("G C5 - - - - - - ", 120)
})
input.onGesture(Gesture.Shake, function () {
    Secondi = 30
    basic.showNumber(Secondi)
})
let Secondi = 0
Secondi = 30
basic.showNumber(Secondi)
