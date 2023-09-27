const display = document.querySelector(".display");
let opr = '';
let arr = [];
let result = 0;

function guardar(e) {
    display.innerHTML += `${e}`;
}

function soma() {
    opr = 'soma';
    arr.push(display.innerHTML);
    display.innerHTML = '';
    console.log(arr);
}

function subtrair() {
    opr = 'subtrair';
    arr.push(display.innerHTML);
    display.innerHTML = '';
    console.log(arr);
}

function multiplicar() {
    opr = 'multiplicar';
    arr.push(display.innerHTML);
    display.innerHTML = '';
    console.log(arr);
}

function dividir() {
    opr = 'dividir';
    arr.push(display.innerHTML);
    display.innerHTML = '';
    console.log(arr);
}


function resultado() {
    arr = arr.map((x) => parseInt(x))

    if (opr == 'soma') {
        result = arr.reduce((a, v) => a+v);
    }

    if (opr == 'subtrair') {
        result = arr.reduce((a, v) => a-v);
    }

    if (opr == 'multiplicar') {
        result = arr.reduce((a, v) => a*v); 
    }

    if (opr == 'dividir') {
        result = arr.reduce((a, v) => a/v); 
    }

    console.log(result)
    display.innerHTML = result;
}