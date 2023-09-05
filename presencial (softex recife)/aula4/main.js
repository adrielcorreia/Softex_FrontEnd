//--------------------- atv 1 ---------------------
let frase = prompt("Digite uma frase: ");
console.log(frase);

//--------------------- atv 2 ---------------------
let string = "123";
let number = 321;

console.log(typeof Number(string));
console.log(typeof String(number));

//--------------------- atv 3 ---------------------
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

let result = num1 + num2;
console.log(result);

//--------------------- atv 4 ---------------------
let string1 = "Estudar"
let string2 = "é bom!"

console.log(string1 + " " + string2);

//--------------------- atv 5 ---------------------
const nome = prompt("Digite seu nome: ");
console.log(`Seja bem-vindo ${nome}!`);

//--------------------- atv 6 ---------------------
let idade = Number(prompt("Digite sua idade: "));
console.log(typeof(idade));

//--------------------- atv 7 ---------------------
let numero = Number(prompt("Digite um número inteiro: ")).toFixed(1);
console.log(numero);

//--------------------- atv 8 ---------------------
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
console.log(`A soma dos dois números resultou em: ${n1+n2}`);

//--------------------- atv 9 ---------------------
let numDecimal = Number(prompt("Digite um número decimal [use ponto]: ")).toFixed(1);
console.log(numDecimal**2);

//--------------------- atv 10 --------------------
let anoNascimento = Number(prompt("Digite seu ano de nascimento: "));
console.log(2023 - anoNascimento);

//--------------------- atv 11 --------------------
let primeiroNome = prompt("Digite seu primeiro nome: ");
let sobrenome = prompt("Agora digite seu sobrenome: ");
console.log(primeiroNome + " " + sobrenome);

//--------------------- atv 12 --------------------
let nums = prompt("Digite números separados por espaço: ");
const numSeparados = nums.split(" ").map(Number);
console.log(numSeparados.length);

//--------------------- atv 13 --------------------
let nomeAnimal = prompt("Digite o nome de um animal: ");
console.log(`O animal que você digitou foi: ${nomeAnimal}`);

//--------------------- atv 14 --------------------
let pNome = prompt("Digite seu primeiro nome: ");
let sNome = prompt("Agora digite seu sobrenome: ");
console.log(sNome + " " + pNome);

//--------------------- atv 15 --------------------
let caracter = prompt("Digite uma frase: ");
console.log(caracter.length);

//--------------------- atv 16 --------------------
let int = Number(prompt("Digite um número inteiro: "));

if (int % 2 == 0) {
    console.log("par");
} else {
    console.log("impar");
}

//--------------------- atv 17 --------------------
let positivo = Number(prompt("Digite um número inteiro: "));

if (positivo >= 0) {
    console.log("positivo")
} else {
    console.log("negativo");
}

//--------------------- atv 18 --------------------
let menor = Number(prompt("Digite seu primeiro número: "));
let maior = Number(prompt("Agora digite seu segundo número: "));

console.log(Math.max(menor, maior));

//--------------------- atv 19 --------------------
let peso = Number(prompt("Digite seu peso: ")).toFixed(2);
let altura = Number(prompt("Digite sua altura: ")).toFixed(2);
const imc = (peso / (altura**2)).toFixed(2);

console.log(imc);

//--------------------- atv 20 --------------------
let userName = prompt("Digite seu nome: ");

if (userName.length > 5) {
    console.log("Maior que 5 caracteres");
} else {
    console.log("Menor que 5 caracteres");
}

//--------------------- atv 21 --------------------
let estadoCivil = prompt("Qual seu(a) estado civil?")
console.log(`Você está ${estadoCivil}. `)

//--------------------- atv 22 --------------------
let base = parseInt(prompt("Digite a base do retângulo:"))
let height = parseInt(prompt("Digite a altura do retângulo"));
const area = base*height;

console.log(`A área do retângulo é: ${area}`);

//--------------------- atv 23 --------------------
let cidade = prompt("Digite o nome da sua cidade:")
console.log(cidade[0] == "S" || cidade[0] == "s");

//--------------------- atv 24 --------------------
let d1 = parseFloat(prompt("Digite o 1° número decimal:"))
let d2 = parseFloat(prompt("Digite o 2° número decimal:"))

console.log(d1%d2);

//--------------------- atv 25 --------------------
let decimal1 = 2.5
decimal1 = parseInt(decimal1);
console.log(decimal1)

//--------------------- atv 26 --------------------
let integer = parseInt(prompt("Digite um número inteiro: "));
integer = integer + 10;
integer = integer.toString();

console.log(integer)

//--------------------- atv 27 --------------------
let data = prompt("coloque a data de hoje (dd/mm/aaaa):")
let a = data.split("/");

var aInt = a.map(function(str) {
    return parseInt(str)
});

console.log(aInt);

//--------------------- atv 28 --------------------
let cidEstado = prompt("Digite sua cidade e seu estado (separado por espaço): ");
cidEstado = cidEstado.split(" ");
cid = cidEstado[0];
est = cidEstado[1];

console.log(`Você é de ${cid} do estado de ${est}`);

//--------------------- atv 29 --------------------
let birth = parseInt(prompt("digite seu ano de nascimento:"));
console.log(`Bem-vindo ao nosso programa, nascido em ${birth}`);

//--------------------- atv 30 --------------------
let Int = parseInt(prompt("Digite um número inteiro:"));
let Str = parseInt(prompt("Digite uma string:"));
const Concatenado = `${Int} ${Str}`;

console.log(Concatenado);

//--------------------- atv 31 --------------------
let produtoPreco = prompt("Digite o nome de algum produto e seu preço (separado por vírgula): ");
const prodArray = produtoPreco.split(",");
prodArray[1] = parseInt(prodArray[1]);

console.log(`${prodArray[0]}, R$ ${prodArray[1]}`);

//--------------------- atv 32 --------------------
let nmrInt = 7;
console.log(`O número é: ${7} e o dobro é: ${7*2}`);

//--------------------- atv 33 --------------------
const email = 'adrielcostacorreia54@gmail.com';
console.log(`Agradecemos o envio do seu email: ${email}`);

//--------------------- atv 34 --------------------
const arrayInteiros = [2,7];
const array1 = arrayInteiros[0];
const array2 = arrayInteiros[1];

console.log(array1 + array2); //soma
console.log(array1 - array2); //diferença
console.log(array1 * array2); //produto
console.log(array1 / array2); //quociente

//--------------------- atv 35 --------------------
function triangulo(a,b) {
    return a*b
}
console.log("A área: ", triangulo(4, 6))

//--------------------- atv 36 --------------------
let raioCirc = 7;
pi = 3.14;

console.log('Perímetro: ', 2*pi*raioCirc);

//--------------------- atv 37 --------------------
const bR = 10;       // base retângulo
const aR = 15;       // altura retângulo
const p = 2*(bR*aR); // perímetro

console.log(p);

//--------------------- atv 38 --------------------
let nD = prompt('insira 3 números decimais (separados por espaço): ');
nD = nD.split(' ');

nD = nD.map(function(str) {
    return parseFloat(str);
});

console.log((nD[0]+nD[1]+nD[2]) / 3)

//--------------------- atv 39 --------------------
let age = 19;
const months = age*12
const days = age*365

console.log(months, days);

//--------------------- atv 40 --------------------
const real = 50.00
const cotacao = 4.80

console.log(real/cotacao);

//--------------------- atv 41 --------------------
const nmrDec = 5.25;
console.log(Math.round(nmrDec));

//--------------------- atv 42 --------------------
const nume1 = 1;
const nume2 = 2;
const nume3 = 3;
const formula = (nume1 + nume2) * nume3;
console.log(formula);

//--------------------- atv 43 --------------------
let temp = parseFloat(prompt('Qual a temperatura atual? '));
let formulaFahrenheit = (temp * 9/5) + 32;

console.log(formulaFahrenheit);