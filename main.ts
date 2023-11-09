let t2 = 0
let t1 = 0
function ODER (var1: number, var2: number) {
    if (var1 == 1 || var2 == 1) {
        return true
    } else {
        return false
    }
}
function oeffneTuer () {
    if (t2 == 1) {
        for (let x = 0; x <= 3; x++) {
            for (let y = 0; y <= 4; y++) {
                led.toggle(3 - x, y)
            }
            basic.pause(100)
        }
    }
    t2 = 0
}
function knopfGedrueckt () {
    t1 = 1
    if (t1 == 1) {
        led.toggle(4, 2)
        basic.pause(100)
        led.toggle(4, 2)
        basic.pause(100)
    }
}
function NICHT (bool2: boolean) {
    if (bool2 == true) {
        return false
    } else {
        return true
    }
}
function knopfNichtGedrueckt () {
    t1 = 0
}
function schliesseTuer () {
    if (t2 == 0) {
        for (let x2 = 0; x2 <= 3; x2++) {
            for (let y2 = 0; y2 <= 4; y2++) {
                led.toggle(x2, y2)
            }
            basic.pause(100)
        }
    }
    t2 = 1
}
function UND (var12: number, var22: number) {
    if (var12 == 1 && var22 == 1) {
        return true
    } else {
        return false
    }
}
basic.forever(function () {
    if (ODER(t1, t2)) {
        basic.setLedColor(0xff0000)
    }
    if (NICHT(ODER(t1, t2))) {
        basic.setLedColor(0x000000)
    }
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
