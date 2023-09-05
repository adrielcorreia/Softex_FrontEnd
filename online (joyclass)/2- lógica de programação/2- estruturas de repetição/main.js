let num = parseInt(prompt('Digite um número inteiro: '));
console.log(`tabuada do ${num}:`)

for (i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
}