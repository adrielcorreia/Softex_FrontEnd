// receive inputs from console
const prompt = require('prompt-sync')();

//----------------ATV 1----------------
let nint = parseInt(prompt("Digite um número inteiro: "));

if (nint > 0) {
    console.log('Número positivo');
} else if (nint < 0) {
    console.log('Número negativo');
} else if (nint == 0) {
    console.log('Igual a zero');
} else {
    console.log('não é um número');
}
console.log('')

//----------------ATV 2----------------
let age = parseInt(prompt('Digite sua idade: '));

if (age >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}
console.log('')

//----------------ATV 3----------------
const arr = prompt('Digite dois números separados por espaço: ').split(' ').map(Number); //convertendo cada elemento com o .map, em seguida transformando-os em inteiros
if (arr.length > 2 || arr.length < 2) {
    console.log('você não digitou os dois valores corretamente');
} else {
    const max = arr.reduce((acc, cur) => Math.max(acc, cur));
    console.log(max);
}
console.log('')

//----------------ATV 4----------------
const oddsEven = prompt('Digite um número (par ou ímpar): ');

if (oddsEven%2 == 0) {
    console.log('Par');
} else {
    console.log('Ímpar');
}
console.log('')

//----------------ATV 5----------------
const gradesArr = prompt('Digite três notas (separadas por espaço): ').split(' ').map(Number);
const media = (gradesArr.reduce((acc, cur) => acc + cur) / 3).toFixed(1);

if (media >= 7) {
    console.log(`Média ${media}; Aprovado!`);
} else {
    console.log(`Média ${media}; Reprovado!`);
}
console.log('')

//----------------ATV 6----------------
try {
    const twoNames = prompt('Digite dois nomes (separados por vírgula): ').split(', ')
    const name1 = twoNames[0].replace(/\s+/g, '').length
    const name2 = twoNames[1].replace(/\s+/g, '').length

    if ((name1) > name2) {
        console.log(`${twoNames[0]} é o maior nome`)
    } else if (name1 < name2) {
        console.log(`${twoNames[1]} é o maior nome`)

    } else if (name1 == name2) {
        console.log('os nomes tem tamanho igual');
    } else {
        console.log('você não digitou corretamente')
    }

} catch(e) {
    console.log(`Ocorreu um erro: ${e}`);
}
console.log('');

//----------------ATV 7----------------
const ch = prompt('Digite uma letra: ');
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`${ch} é uma vogal`)
        break;
    default:
        console.log(`${ch} é uma consoante`);
}
console.log('');

//----------------ATV 8----------------
const threeNum = prompt('Digite três números (separados por espaço): ').split(' ').map(Number);

threeNum.sort((a,b) => a-b);
console.log(threeNum);
console.log('');

//----------------ATV 9----------------
let peso = parseFloat(prompt('Digite seu peso: '));
let altura = parseFloat(prompt('Digite sua altura: '));
const imc = (peso / altura**2).toFixed(1);
console.log(imc);

switch (true) {
    case (imc < 18.5):
        console.log('Magreza');
        break;

    case (imc >= 18.5) && (imc <= 24.9):
        console.log('Normal');
        break;

    case (imc >= 25.0) && (imc <= 29.9):
        console.log('Sobrepeso');
        break;

    case (imc >= 30.0) && (imc <= 34.9):
        console.log('Obesidade grau I')
        break;

    case (imc >= 35.0) && (imc <= 39.9):
        console.log('Obesidade grau II')
        break;

    default:
        console.log('Obesidade grau III')
}
console.log('');

//----------------ATV 10----------------
const date = new Date(prompt('Digite o número de um mês: '));
const mes = date.getMonth();
const mesesNomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

console.log(`O mês digitado é: ${mesesNomes[mes]}`);
console.log('');

//----------------ATV 11----------------
let salary = parseFloat(prompt('Qual seu salário? '));

if (salary > 1500.00) {
    salary = (salary + salary*(10/100)).toFixed(2);
    console.log(`Você receberá um aumento de 10%, ficando com R$ ${salary}`);
    
} else if (salary <= 1500.00) {
    salary = (salary + salary*(15/100)).toFixed(2);
    console.log(`Você receberá um aumento de 15%, ficando com R$ ${salary}`);

} else {
    console.log('Você digitou algo incorretamente');
}
console.log('');

//----------------ATV 12----------------
const int = parseInt(prompt('Digite qualquer número inteiro: '));

if ( (int % 3 == 0) && (int % 5 == 0) ) {
    console.log('Este número é divisível por três e por cinco. ');
} else {
    console.log('Esté número não é divisível por três e cinco. ')
}
console.log('');

//----------------ATV 13----------------
const day = prompt('Digite um dia da semana (por extenso): ');

switch (day) {
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log('Dia útil')
        break;
    case 'sábado':
    case 'domingo':
        console.log('Fim de semana');
    default:
        console.log('Algo foi digitado incorretamente');
} 

//----------------ATV 14----------------
const rate = parseInt(prompt('Digite um número de 1 a 5: '))

switch (rate) {
    case 1:
        console.log('Muito insuficiente');
        break;
    case 2:
        console.log('Insuficiente');
        break;
    case 3:
        console.log('Regular');
        break;
    case 4:
        console.log('Bom');
        break;
    case 5:
        console.log('Muito bom');
        break;
    default:
        console.log('Não foi digitado corretamente');
}
