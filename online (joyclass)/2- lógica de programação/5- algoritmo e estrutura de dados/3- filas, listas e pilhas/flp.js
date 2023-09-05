//flp = filas, listas e pilhas
let arr = [3, 7, 9, 1, 0];
const size = arr.length;


// ------------------- fila - desenfileirar -------------------
console.log('-----------desenfileirar-----------')
console.log('array original:', arr, '\n');

dequeue = () => {
    if (!arr) {
        return null;
    } else {
        return arr.shift();
    } 
}

for (i = 0; i < size; i++) {
    dequeue();
    console.log(`${i+1}° shift =`, arr);
}
arr = [3, 7, 9, 1, 0];

//------------------------ lista - remover --------------------
console.log('\n--------------remover--------------')
console.log('array original:', arr, '\n');

remove = (element) => {
    const idx = arr.indexOf(element)
    arr.splice(idx, 1);
}

for (i = 1; i <= size; i++) {
    let e = arr[0];
    
    remove(e); 
    console.log(`${i}° splice:`, arr);
}
arr = [3, 7, 9, 1, 0];

//------------------------ pilha - desempilhar -----------------
console.log('\n------------desempilhar------------')
console.log('array original:', arr, '\n');

unstack = ( )=> {
    if (arr.length == 0) {
        return null;
    }
    return arr.pop()
}

for (i = 1; i <= size; i++) {
    unstack();
    console.log(`${i}° pop:`, arr);
}