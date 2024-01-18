var turnOn = document.getElementById('turnOn')
var turnOff = document.getElementById('turnOff')
var quebrar = document.getElementById('quebrar')
var reset = document.getElementById('resetar')
var lamp = document.getElementById('lamp')

function lampOn() {
    if (!verify () ){
    lamp.src = "./img/ligada.jpg"
    }
}

function lampReset () {
    lamp.src = "./img/desligada.jpg"
}

function lampOff() {
    if (!verify () ){
    lamp.src = "./img/desligada.jpg"
}
}

function lampQ() {
    lamp.src = "./img/quebrada.jpg"
}

function verify() {
    return lamp.src.indexOf ('quebrada') > - 1
}

function lampB() {
    lamp.src = "./img/quebrada.jpg"
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampQ)
quebrar.addEventListener('click', lampB)
reset.addEventListener('click', lampReset)
