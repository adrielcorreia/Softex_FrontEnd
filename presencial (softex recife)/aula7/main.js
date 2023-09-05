/* 
ATV 1- o for é geralmente usado quando se sabe onde a repetição se encerrará, diferente do while.
no for se usa uma variável de índice que aumenta ou diminui seu valor até determinado valor para
encerrar as repetições.

    o while não precisa, é apenas uma condição que retorna true ou false, e continuará repetindo o código
abaixo até que a condição seja atendida, por exemplo, para se criar um sistema onde o usuário escolhe
qual função seja executada, não sabemos quantas vezes o usuário vai fazer isso, nesse caso se usa o while.

ATV 2 - o for quando se já tem certo quando vai parar, o while o contrário.
*/

// ---------------- ATV 3 ----------------

let i = 1;

while (i <= 10) {
    console.log('i:', i);
    i++;
}

// ---------------- ATV 4 ----------------

let i2 = 100000;
while (i2 > 10) {
    console.log(i2);
    i2 /= 10;
}

// ---------------- ATV 5 ----------------

let i3 = 1;
do {
    console.log(i3);
    i3++;
} while (i3 <= 10);

// ---------------- ATV 6 ----------------

let nCc = 0; // número crescente

while (nCc < 10) {
    nCc++
    console.log(nCc, '\r')
}

// ---------------- ATV 7 ----------------

let nDc = 10; // número decrescente

while (nDc > 0) {
    console.log(nDc, '\r')
    nDc--;
}

// ---------------- ATV 8 ----------------

let n100 = 0;
let sum100 = 0;

while (n100 < 100) {
    n100++;
    sum100 = sum100+n100;
}
console.log(sum100);

// ---------------- ATV 9 ----------------

let p5 = 0; // de 1 a 5
let pT = 1; // produto total de 1 até 5

while (p5 < 5) {
    p5++;
    pT = pT*p5;
}
console.log(pT);

// ---------------- ATV 10 ---------------

let nT9 = 0; //o número da tabuada, de 1 a 9

while (nT9 < 10) {
    nT9++;
    console.log(`${nT9} x 9 = ${nT9*9}`)
}

// ---------------- ATV 11 ---------------

let stop = -1;
let arrInt = [];

while (stop != 0) {
    stop = parseInt(prompt('Digite um número [zero para o programa]: '));
    if (stop == 0) {break;}
    arrInt.push(stop);
}

if (arrInt.length > 0) {
    const max = arrInt.reduce((a, c) => Math.max(a, c));
    const min = arrInt.reduce((a, c) => Math.min(a, c));
    console.log('array:', arrInt, 'maior número:', max, 'menor número:', min);
}

// ---------------- ATV 12 ---------------

let stop2 = 0;
let arrInt2 = [];

while (stop2 != -1) {
    stop2 = parseInt(prompt('Digite um número [-1 para o programa]: '));
    if (stop2 == -1) {break;}
    arrInt2.push(stop2);
}

if (arrInt2.length > 0) {
    const soma2 = arrInt2.reduce((a, c) => a+c);
    const media2 = soma2/arrInt2.length;
    console.log(arrInt2, media2);
}

// ---------------- ATV 13 ---------------

const nmrDigts = prompt('(atv 13) digite um número: ');
let split = nmrDigts.split('');
let idx = 0;
let sumCube = 0;

while(idx < split.length) {
    split[idx] = parseInt(split[idx]);
    sumCube = sumCube + split[idx];
    idx++;
}
console.log(split, sumCube**3);

// ---------------- ATV 14 ---------------

let I = 0;
let arrImpar = [] 

while (I < 100) {
    I++;
    if (I%2 == 1) {
        arrImpar.push(I);
    }
}
console.log(arrImpar);

// ---------------- ATV 15 ---------------

let cont = 0;
let arrMult3 = [] 

do {
    cont++
    if (cont%3 == 0) {
        arrMult3.push(cont);
    }
} while (cont < 50);
console.log(arrMult3);

// ---------------- ATV 16 ---------------

let index = 0;
let aprov = 0; 

do {
    index++;
    let nota = 0;
    nota = parseFloat(prompt(`${index}° aluno, digite sua nota: `));

    if (nota >= 7) {
        aprov++;
    }
} while (index < 5);
console.log(`total de aprovados dos 5 alunos: ${aprov}`);

// ---------------- ATV 17 ---------------

let arrG = []; //array geral, com todos os números
let arrP = []; //arrar dos números pares antes do primeiro ímpar
let i4 = -1;
let pi = false; //contar se apareceu um ímpar

while (i4 != 0) {
    i4 = parseInt(prompt('digite: '))
    if (i4 == 0) {break}
    arrG.push(i4);

    if ((i4%2 == 0) && (pi == false)) {arrP.push(i4)}
    else if ((i4%2 != 0) && (pi == false)) {pi = true};
    console.log(pi);
}
console.log('array geral:', arrG)
console.log('números pares do array antes do primeiro ímpar:', arrP);

// ---------------- ATV 18 ---------------

let parar = -1; 
let par = 0;
let impar = 0;

while (parar != 0) {
    parar = parseInt(prompt('digite um número: '));
    if (parar == 0) {break;}
    else {
        if (parar % 2 == 0) {par++;}
        else {impar++;};
    }
}
console.log('pares:', par, 'ímpares:', impar);

// ---------------- ATV 19 ---------------

let p = -1; 
let div2 = 0;
let div3 = 0;
let div5 = 0;

while (p != 0) {
    p = parseInt(prompt('digite um número: '));
    if (p == 0) {break;}
    else {
        console.log(p);
        if (p % 2 == 0) {div2++;}
        if (p % 3 == 0) {div3++;}
        if (p % 5 == 0) {div5++;}
    }
}
console.log(div2, div3, div5);

// ---------------- ATV 20 ---------------

let s = -1;
let sum = 0;
let ct = 0;

while (s != 0) {
    s = parseInt(prompt('digite uma sequência: '));
    if (s == 0) {break;}
    else if (s % 3 == 0) {sum = sum + s; ct++;}
}
const media = sum/ct;
console.log(media);


// ---------------- ATV 21 ---------------

let dgts = '';
let dgtsSplit = '';
let q = 0; // quantidade dos números com +3 digitos

while (dgts != '0') {
    dgts = prompt('digite um número: ');
    if (dgts == '0') {break;}
    else {dgtsSplit = dgts.split('').map(Number);}
    
    if (dgtsSplit.length > 2) {console.log(q); q++;}
}
console.log('total de números com +3 dígitos:', q);

// ---------------- ATV 22 ---------------

let stp = -1; // nmr pra digitar, pra verificar se ta entre 50 ou 100
let s50100 = 0 //soma dos nmrs entre 50 e 100;
let c50 = 0 //contar qnts numeros entre 50 e 100 foram digitados

while (stp != 0) {
    stp = parseInt(prompt('digite uma sequência de números:'));
    if (stp == 0) {break;}
    else {if (stp >= 50 && stp <= 100) {s50100 = s50100+stp; c50++;}}
}
console.log(s50100/c50);


// ---------------- ATV 23 ---------------

let para = -1;
let arrPares = [];
let arrImp = [];

while (para != 0) {
    para = parseInt(prompt('digite: '));
    if (para == 0) {break;}
    else if(para % 2 == 0) {arrPares.push(para);}
    else if(para % 2 == 1) {arrImp.push(para);}
}
const menorPar = arrPares.reduce((a, c) => Math.min(a, c))
const menorImp = arrImp.reduce((a, c) => Math.min(a, c))

console.log('menor par:', menorPar);
console.log('menor ímpar:', menorImp);


// ---------------- ATV 24 ---------------

let x = -1;
let arrPandI = []; //array com par e ímpares
let imparArr = 0;
let parArr = 0;

while (x != 0) { 
    x = parseInt(prompt('digite: '));
    if (x == 0) {break;}
    else {arrPandI.push(x)}
}

arrPandI.shift(); arrPandI.pop(); //remover o primeiro e último elemento, podendo agora contar somente os valores entre eles
let counter = 0;

while (counter < arrPandI.length) {
    if(arrPandI[counter] % 2 == 0) {parArr++;}
    else if(arrPandI[counter] % 2 != 0) {imparArr++;}
    counter++;
}

console.log(arrPandI, 'par:', parArr, 'ímpar:', imparArr);