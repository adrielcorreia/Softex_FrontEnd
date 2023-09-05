calcularIdade = (n, a) => alert(`você tem ${a - n} anos.`);
let anoAtual = new Date().getFullYear();

while(true) {
    try {
        let nascimento = parseInt(prompt('Digite seu ano de nascimento: '));

        if (nascimento < 1922 || nascimento > 2021) {throw 'só aceitamos entre os anos de 1922 e 2021, tente novamente.'}

        else if (isNaN(nascimento) == true) {throw 'ano de nascimento inválido, tente novamente.'}

        else {calcularIdade(nascimento, anoAtual); break;}
        
    } catch (e) {
        alert(e);
    }
}

