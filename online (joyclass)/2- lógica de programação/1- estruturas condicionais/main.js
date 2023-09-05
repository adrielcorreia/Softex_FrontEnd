const terrestre = prompt('é terrestre? ').toUpperCase();

if (terrestre == 'SIM') {
    const umaPessoa = prompt('cabe só uma pessoa? ').toUpperCase();
    if (umaPessoa == 'SIM') {

        const pesada = prompt('é pesado? ').toUpperCase();
        if (pesada == 'SIM') {alert('é um trator')} 

        else {
            const pedal = prompt('tem pedal? ').toUpperCase();
            if (pedal == 'SIM') {alert('é uma bicicleta');} 
            else {alert('sei o que é não amigo')}
        }
    } else {
        const capacete = prompt('usa capacete? ').toUpperCase();
        if (capacete == 'SIM') {alert('é uma moto');}
        else {alert('sei o que é não amigo');}
    }
} else {alert('só trabalho com terrestre meu chefe')}