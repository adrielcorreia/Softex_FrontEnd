let num1 = 5;
let num2 = 2;

function print() {
    return `os números são: ${num1} e ${num2}`
}

function somar(n1, n2) {
    return `${n1} + ${n2}= ${n1+n2}`
}

expoente = (n1,n2) => {
    return `${n1}²= ${n1**n2}`
}

console.log(print())
console.log(somar(num1, num2))
console.log(expoente(num1, num2))