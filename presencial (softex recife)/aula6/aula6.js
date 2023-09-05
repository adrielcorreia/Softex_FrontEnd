/* atv 1, 2, 3 e 4

1- uma estrutura de repetição, tendo em vista que "sabemos"
onde ele vai parar, diferente do while.

2- enquanto a condição inserida não for atendida, ele começará a repetir

3- quando a condição inserida for atendida

4- o "índice" do for ele é alterado a cada repetição, por exemplo, se tiver: i++,
na primeira repetição, caso for indicado que i = 0, ele seguirá
1° repetição: i = 0
2° repetição: i = 1
3° repetição: i = 2

... */

//----------- ATV 5 -----------

for (let i = 1; i <= 10; i++) {
    console.log('testando...');
}
console.log(''); //espaço entre linhas

//----------- ATV 6 -----------

for (i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('');


//----------- ATV 7 -----------

for (i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
console.log('')

//----------- ATV 8 -----------

for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
console.log('')


//----------- ATV 9 -----------

let nomes = ['Jesus', 'Pedro', 'Tiago', 'João', 'André', 'Filipe', 'Judas Iscariotes'];

for (n of nomes) {
    console.log(n)
}
console.log('');

//----------- ATV 10 -----------

for (i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('');

//----------- ATV 11 -----------

for (i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('');

//----------- ATV 12 -----------

let soma = 0;
for (i = 1; i <= 100; i++) {
    soma = soma+i;
}
console.log(soma);
console.log('');

//----------- ATV 13 -----------

for (i = 0; i <= 25; i++) {
    if (i != 0) {
        console.log(`${i}° par:`, i*2);
    }
}
console.log('');

//----------- ATV 14 -----------

let produto = 1;
for (i = 1; i <= 5; i++) {
    produto = produto*i;
}
console.log(produto);
console.log('');

//----------- ATV 15 -----------

for (t = 1; t <= 10; t++) {
    console.log(`7x${t} =`,t*7);
}
console.log('');

//----------- ATV 16 -----------

let sum = 0;
for (m = 1; m <= 5; m++) {
    sum = sum + parseInt(prompt('Digite um número: '));
}
console.log('Média:', sum/5);
console.log('');

//----------- ATV 17 -----------

let multiplos = 0
for (i = 1; i <= 50; i++) {
    if (i%3 == 0) {
        multiplos = multiplos+1;
        console.log(`${multiplos}° múltiplo de 3:`, i);
    }
}
console.log('');

//----------- ATV 18 -----------

let nmrs = []
let maiorNum = 0;
let menorNum = 0;

for (i = 0; i < 10; i++) {
    nmrs.push(parseInt(prompt(`Digite o ${i+1}° número: `)));
    
    if (nmrs[i] > maiorNum) {maiorNum = nmrs[i];}
        
    if (i == 0) {menorNum = nmrs[i];}
    if (nmrs[i] < menorNum) {menorNum = nmrs[i];}
}
console.log('Maior número:', maiorNum);
console.log("Menor número:", menorNum);
console.log('');

//----------- ATV 19 -----------

let c = 0;
for (i = 1; i <= 100; i = i+2) {
    c++;
    console.log(`${c}° ímpar: `, i);
}
console.log('');

//----------- ATV 20 -----------

let aprov = 0;
let nota = 0.0;

for (i = 1; i <= 5; i++) {
    nota = parseFloat(prompt(`${i}° aluno, digite sua nota: `));

    if (nota >= 7) {
        aprov++;
    }
}
console.log('Houveram:', aprov, 'aprovados');
console.log('');

//----------- ATV 21 -----------

const numberToSplit = prompt('Digite um número para somar todos seus dígitos: ');
const digits = numberToSplit.split('').map(Number);
let sumAllDigits = 0;

for (i of digits) {
    sumAllDigits = sumAllDigits+i;
}
console.log('soma de todos os dígitos: ', sumAllDigits);
console.log('');

//----------- ATV 22 -----------

const divisor = parseInt(prompt('Digite um número para ver todos os seus divisores: '));
let cont = 0;

for (i = 1; i <= divisor; i++) {
    if (divisor%i == 0) {
        cont++;

        if (divisor%i == 0) {
            console.log(`${cont}° divisor de ${divisor}:`, i)
        }
    }
}
console.log('');

//----------- ATV 23 -----------

let somaAlturas = 0;
let altura;

for (i = 1; i <= 5; i++) {
    altura = parseFloat(prompt('Digite sua altura: '));
    somaAlturas = somaAlturas+altura;
}
console.log('Média das cinco alturas: ', (somaAlturas/5).toFixed(2));
console.log('');

//----------- ATV 24 -----------

for (i = 1; i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log('FizzBuzz');
    } else if (i%3 == 0 && i%5 != 0) {
        console.log('Fizz');
    } else if (i%3 != 0 && i%5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
console.log('');


//----------- ATV 25 -----------

const dts = prompt('Digite um número para somar todos seus dígitos pares: ').split('').map(Number);
let sad = 0;
pares = []

for (i of dts) {
    if (i%2 == 0) {
        pares.push(i);
        sad = sad+i
    }
}
console.log('soma dos dígitos pares:', sad);
console.log('');

//----------- ATV 26 -----------

const inv = prompt('Digite um número para inverter: ').split('').map(Number);
let arrInv = [];

for (i = inv.length-1; i >= 0; i--) {
    arrInv.push(inv[i]);
}
console.log(arrInv.reduce((a, c) => (a * 10) + c, 0));