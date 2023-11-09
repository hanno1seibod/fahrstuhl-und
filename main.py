t2 = 0
t1 = 0
def ODER(var1: number, var2: number):
    if var1 == 1:
        return True
    else:
        return False
    if var2 == 1:
        return True
    else:
        return False
def oeffneTuer():
    global t2
    if t2 == 1:
        for x in range(4):
            for y in range(5):
                led.toggle(3 - x, y)
            basic.pause(100)
    t2 = 0
def knopfGedrueckt():
    global t1
    t1 = 1
    if t1 == 1:
        led.toggle(4, 2)
        basic.pause(100)
        led.toggle(4, 2)
        basic.pause(100)
def NICHT(bool2: bool):
    if bool2 == True:
        return False
    else:
        return True
def knopfNichtGedrueckt():
    global t1
    t1 = 0
def schliesseTuer():
    global t2
    if t2 == 0:
        for x2 in range(4):
            for y2 in range(5):
                led.toggle(x2, y2)
            basic.pause(100)
    t2 = 1
def UND(var12: number, var22: number):
    if var12 == 1:
        if var22 == 1:
            return True
        else:
            return False
    else:
        return False

def on_forever():
    if ODER(t1, t2):
        basic.set_led_color(0xff0000)
    if True:
        pass
basic.forever(on_forever)

def on_forever2():
    if input.button_is_pressed(Button.A):
        schliesseTuer()
    else:
        oeffneTuer()
    if input.button_is_pressed(Button.B):
        knopfGedrueckt()
    else:
        knopfNichtGedrueckt()
basic.forever(on_forever2)

def on_forever3():
    pass
basic.forever(on_forever3)
