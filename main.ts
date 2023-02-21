input.onButtonPressed(Button.A, function () {
    if (pulsado == false) {
        pulsado = true
        if (num_icono == 0 || num_icono == 2) {
            puntos_A += 1
        } else if (num_icono == 0) {
            basic.showString("A: has perdido")
            basic.pause(5000)
        } else {
            if (puntos_A > 0) {
                puntos_A += -1
            }
        }
    }
})
function partida_nueva () {
	
}
input.onButtonPressed(Button.B, function () {
    if (pulsado == false) {
        pulsado = true
        if (num_icono == 0 || num_icono == 2) {
            puntos_B += 1
        } else if (num_icono == 0) {
            basic.showString("A: has perdido")
            basic.pause(5000)
        } else {
            if (puntos_B > 0) {
                puntos_B += -1
            }
        }
    }
})
function cambia_icono () {
    icono = randint(0, 9)
    lista[icono].showImage(0)
    basic.pause(200)
}
let icono = 0
let puntos_B = 0
let puntos_A = 0
let num_icono = 0
let pulsado = false
let lista: Image[] = []
lista = [
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.StickFigure),
images.iconImage(IconNames.Happy),
images.iconImage(IconNames.Asleep),
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.Yes),
images.iconImage(IconNames.Sad),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.Confused),
images.iconImage(IconNames.Skull)
]
basic.forever(function () {
    cambia_icono()
})
