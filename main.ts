let tuerGeschlossen = 0
let knopfGeklickt = 0
function oeffneTuer () {
    if (tuerGeschlossen == 1) {
        for (let x = 0; x <= 3; x++) {
            for (let y = 0; y <= 4; y++) {
                led.toggle(3 - x, y)
            }
            basic.pause(100)
        }
    }
    tuerGeschlossen = 0
}
function knopfGedrueckt () {
    knopfGeklickt = 1
    if (knopfGeklickt == 1) {
        led.toggle(4, 2)
        basic.pause(100)
        led.toggle(4, 2)
        basic.pause(100)
    }
}
function knopfNichtGedrueckt () {
    knopfGeklickt = 0
}
function schliesseTuer () {
    if (tuerGeschlossen == 0) {
        for (let x = 0; x <= 3; x++) {
            for (let y = 0; y <= 4; y++) {
                led.toggle(x, y)
            }
            basic.pause(100)
        }
    }
    tuerGeschlossen = 1
}
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        schliesseTuer()
    } else {
        oeffneTuer()
    }
    if (input.buttonIsPressed(Button.B)) {
        knopfGedrueckt()
    } else {
        knopfNichtGedrueckt()
    }
})
