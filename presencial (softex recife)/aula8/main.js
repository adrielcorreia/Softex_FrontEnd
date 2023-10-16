const {lines} = require('./lines')

//------------------- atv 1 -------------------
lines(1)
console.log('Estudar é muito bom')
console.log('Paciência e resistência')
console.log('Revisão é a mãe do aprendizado\n')

console.log('Estudar é muito bom')
console.log('Paciência e resistência')
console.log('Revisão é a mãe do aprendizado\n')

console.log('Estudar é muito bom')
console.log('Paciência e resistência')
console.log('Revisão é a mãe do aprendizado\n')

//------------------- atv 2 -------------------
lines(2)
function criarFrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e resistência')
    console.log('Revisão é a mãe do aprendizado\n')
}

criarFrases()
criarFrases()
criarFrases()

//------------------- atv 3 -------------------
lines(3)
function sum(a, b) {
    return console.log(`Soma de ${a} + ${b} = ${a+b}`)
}

sum(10, 15)
sum(2, 5)

//------------------- atv 4 -------------------
lines(4)
function sumUpdate(a, b) {
    return a+b
}

console.log("7 + 7 =", sumUpdate(7, 7))

//------------------- atv 5 -------------------
lines(5)
function soma(a, b) {
    return console.log(a+b)
}

soma(1, 2)

//------------------- atv 6 -------------------
lines(6)

function isEven(i) {
    return i%2 == 0
}

console.log(isEven(3))

//------------------- atv 7 -------------------
lines(7)

function media(num1, num2, num3) {
    return ((num1 + num2 + num3) / 3).toFixed(1)
}

console.log(media(7, 8, 9.5))

//------------------- atv 8 -------------------
lines(8)

function imc(peso, altura) {
    const imc = (peso/altura**2).toFixed(1)
    return console.log(`IMC: ${imc}`)
}

imc(62, 1.73)

//------------------- atv 9 -------------------
lines(9)

function calcularDesconto(valor, desconto) {
    const resultadoDoDesconto = valor - (valor * desconto/100)

    valor = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor)

    const resultadoConvertidoBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(resultadoDoDesconto)

    return console.log(`${valor} com desconto de ${desconto}% = ${resultadoConvertidoBRL}`)
}

calcularDesconto(2000, 10)

//------------------- atv 10 -------------------
lines(10)

function calcularImpostoDeRenda(salarioBruto) {
    if (salarioBruto <= 1903.98) {
        return console.log(`com R$ ${salarioBruto}, é isento de desconto`)
    } else if (salarioBruto > 1903.99 && salarioBruto <= 2826.65) {
        return console.log(`com R$ ${salarioBruto}, é ${salarioBruto * 0.075}`)
    }
}