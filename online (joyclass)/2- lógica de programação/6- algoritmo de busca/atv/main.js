const arr = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
alert(`o array é ${arr}`);

function linearSearch(arr, e) {
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] === e) {
            return i;
        }
    }
    return -1;
}

let num = parseInt(prompt('Digite um valor a ser encontrado seu índice no array: '));
const indice = linearSearch(arr, num);

if (indice !== -1) {
    alert(`o elemento ${num} está no índice ${indice}`);
} else {
    alert('o valor não foi encontrado.')
}