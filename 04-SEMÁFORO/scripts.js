var img = document.getElementById('img')
var buttons = document.getElementById('buttons')
let intervalId = null
let colorIndex = 0

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]();
}

var nextIndex = () => {

    if (colorIndex < 2) {
    colorIndex++
    } else {
        colorIndex = 0
    }
}

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval (intervalId)
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'buttonOff': () => img.src = './img/desligado.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000)
}

buttons.addEventListener('click', trafficLight)