let voto = 0;
const candidatos = [
    {name: 'Sheogorath', voto: 889},
    {name: 'Jyggalag', voto: 847},
    {name: 'Akatosh', voto: 515},
    {name: 'Brancos', voto: 0},
    {name: 'Nulos', voto: 0}
]

while (true) {
    try {
        voto = parseInt(prompt(`digite em quem você quer votar [1- ${candidatos[0].name}] [2- ${candidatos[1].name}] [3- ${candidatos[2].name}] [4- Branco]:`));

        if (isNaN(voto) == true && voto != undefined) {throw 'valor digitado incorretamente, tente novamente.'}

        else {
            if (voto > 4 || voto < 1) {voto = null;}

            let encerrar = parseInt(prompt('você quer encerrar a votação? [1- Sim] [2- Não]:'));
            if (encerrar == 1) {break;}
            else if (encerrar != 1 && encerrar != 2) {throw 'valor digitado incorretamente, tente novamente.';}
        }

    } catch (e) {
        alert(e);
        continue;
    }
}

switch (voto) {
    case 1:
        candidatos[0].voto++;
        break;

    case 2:
        candidatos[1].voto++;
        break;
    case 3:
        candidatos[2].voto++;
        break;
    case 4:
        candidatos[4].voto++;
        break;
    default:
        candidatos[4].voto++;
        break;
}

const maisVotado = candidatos.reduce(
    (p, c) => {
      return p.voto > c.voto ? p : c
    }
);

console.log(`O candidato mais votado foi: ${maisVotado.name}`);
for (i=0; i <= 4; i++) {
    console.log(`Votos ${candidatos[i].name}: ${candidatos[i].voto}`);
}

