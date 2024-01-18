function fuja() {
    var botaoNao = document.getElementById('nao')

    var larguraJanela = window.innerWidth
    var alturaJanela = window.innerHeight

    var maxX = larguraJanela - botaoNao.offsetLeft
    var maxY = alturaJanela - botaoNao.offsetHeight

    var aleatórioX = Math.floor(Math.random() * maxX)
    var aleatórioY = Math.floor(Math.random() * maxY)

    botaoNao.style.left = aleatórioX + "px"
    botaoNao.style.top = aleatórioY + "px"
}