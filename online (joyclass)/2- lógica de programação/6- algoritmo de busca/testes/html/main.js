function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start+end) / 2);

        if (arr[middle] === element) {
            return 1;
        } else {
            if (arr[middle] > element) {
                end = middle - 1;
            }
            else if (arr[middle] < element) {
                start = middle + 1;
            }
        }
    }
    return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById('array').innerHTML = array;

const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let nmr = document.getElementById('num');
    alert(nmr.value);
});
//const elementSearched = parseInt(prompt('Digite um elemento que você queira achar o índice: '));