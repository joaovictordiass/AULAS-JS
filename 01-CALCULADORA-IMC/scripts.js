var calcular = document.getElementById('calcular')

function imc () {
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var pika = document.getElementById('pika').value
    var resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        let condicao = ""

        if (pika < 18) {
            condicao = 'pequena pra carai'
        } else if (pika >= 18){
            condicao = 'que da para enrolar e enfiar no CU!'
        }

        var valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = ""

        if (valorIMC < '18.5') {
            classificacao = 'abaixo do Peso!'
        } else if (valorIMC < '25') {
            classificacao = 'com o peso ideal. Parabéns!'
        } else if (valorIMC < '30') {
            classificacao = 'levemente acima do peso!'
        } else if (valorIMC < '35') {
            classificacao = 'com obesidade grau I.'
        } else if (valorIMC < '40') {
            classificacao = 'com obesidade grau II.'
        } else {
            classificacao = 'com obesidade grau III. CUIDADO!'
        }
        resultado.innerHTML = `${nome} seu IMC é ${valorIMC}, você está ${classificacao} E ainda tem uma pika ${condicao}`
    } else {
        resultado.innerHTML = "Preencha todos os campos!"
    }
}
calcular.addEventListener('click', imc)