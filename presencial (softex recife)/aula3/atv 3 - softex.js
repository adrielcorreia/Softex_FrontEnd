//------------------------------ STRING ------------------------------

const nome = "adriel";
const frase = "He said to me: “It is done. I am the Alpha and the Omega, the Beginning and the End. To the thirsty I will give water without cost from the spring of the water of life";

const palavra = "Bíblia";
console.log("primeira letra da frase Bíblia: ", palavra[0]);

const frase2 = "Gen 1.1: In the beginning God created the heavens and the earth.";
console.log("2° frase em maiúsculo - ", frase2.toUpperCase());

console.log("");

let endereco = "21 5-й Донской пр-д, Moscovo, Moscou - RU";
console.log("valor inicial: ", endereco);

endereco = "Tamriel, Cyrodill 401 - MUNDUS";
console.log("valor alterado: ", endereco);

//------------------------------ Integer and Float ------------------------------

console.log("");
const pi = Math.PI;
console.log(pi);

const y = pi;

const taxaJuros = 0.05;

let x = 7;
let z = 14;
console.log("adição: ", x + z);
console.log("substração: ", x - z);
console.log("multiplicação: ", x * z);
console.log("divisão: ", x / z);

//------------------------------ Boolean ------------------------------
console.log("");
let estaChovendo = false;
const verdadeiro = false;
let temperatura = 27;

if (temperatura > 30) {
    console.log("temperatura é maior que ", temperatura, "°C");
} else {
    console.log("a temperatura é menor que ", temperatura, "°C");
}
console.log("");

let resultado = 10 > 5;
console.log("10 > 5: ", resultado);
console.log("");

//------------------------------ Object -------------------------------

//---------- objeto pessoa ----------
const Pessoa = {
    nome: "Adriel",
    idade: 18,
    endereco: "Moscou, Russia 401"
}
console.log(Pessoa.nome);
console.log("");

Pessoa.profissao = "Diplomata";

console.log("Idade anterior: ", Pessoa.idade);
Pessoa.idade = 19;
console.log("Idade posterior: ", Pessoa.idade);

//---------- objeto animal ----------
const Animal = {
    nome: "Scalon",
    especie: "Daedra",
    cor: "Dourado"
}
console.log("");

//---------- objeto livro -----------
const Livro = {
    titulo: "Santidade: Sem a qual ninguém verá o Senhor",
    autor: "J.C Ryle",
    ano: 1877
}
console.log("Autor: ", Livro.autor);
Livro.ano = 2016;

delete Livro.titulo;
console.log("")

//---------- objeto carro -----------
const Carro = {
    marca: "Porsche",
    modelo: "911 GT3 RS",
    ano: 2023
}
console.log("Carro original: ", Carro);
Carro.modelo = undefined;
console.log("Carro modificado: ", Carro);
console.log("");

//---------- outros tipos -----------
const variavelNull = null;
const variavelUndefined = undefined;

console.log(variavelNull == null);
console.log(variavelUndefined == undefined);

const vazio = {
    nome: undefined
}
console.log("");

//-------------- array --------------
let numeros = [1,2,3,4];
console.log(numeros[1]);
numeros[2] = 10;

numeros.pop();
console.log(numeros.length);

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);

frutas.push("uva");

const aluno = {
    nome: "Jyggalag",
    idade: undefined
}

const alunos = [];
alunos.push(aluno);
alunos[0] = alunos[0].nome;
alunos[1] = alunos[0].idade;

console.log(alunos);

const aluno2 = {
    nome: "Sheogorath",
    idade: undefined
}
const aluno3 = {
    nome: "Mehrunes Dagon",
    idade: undefined
}
const aluno4 = {
    nome: "Hermaeos Mora",
    idade: undefined
}

alunos.push(aluno2, aluno3, aluno4);
console.log(alunos);

let produtos = ["leite", "ovos", "coca-cola", "carne", "queijo", "cupnoodles", "farinha", "arroz", "feijão", "batata"];

console.log(produtos[1], produtos[3], produtos[5], produtos[7], produtos[9]);
console.log("")

//-------------- typeOf --------------
let numero = 7;
console.log(typeof(numero));

let txt = "hello world";
console.log(typeof(txt));

let booleano = true;
console.log(typeof(booleano));

let array = [];
console.log(typeof(array));

let objet = {};
console.log(typeof(object));

let nulo = null;
console.log(typeof(nulo));

let indefinido = 7;
console.log(typeof(undefined));

//-------------- operadores lógicos --------------
console.log(10 == 10); // 1

console.log(10 != 9); // 2

console.log(10 > 9); // 3 

console.log(10 < 11); // 4

console.log(10 >= 11); // 5

console.log(10 <= 9); // 6

console.log(14 == 14 && 12 > 13); // 7

console.log(5 < 5 || 7 == 7); // 8

console.log(!(7 > 6)); // 9

const num = 10; // 10
console.log(num >= 5 && num <= 20); // 10

console.log(num < 5 || num > 10); // 11

console.log(num >= 0); // 12

const stringvazia = ""; // 13
console.log(stringvazia.length == 0); //13

const varBoolean = true; // 14
console.log(typeof(varBoolean) == "boolean"); //14



