const hexaDecimalBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

export function hexadecConverter (num) {
    let hexadec = ''

    // make the conversion and add the remains to hexadec variable
    while (num >= 0) {
        hexadec += hexaDecimalBase[num%16]
        num = Math.floor(num/16)

        if (num <= 0) {
            break
        }
    }

    // reverse the order of the remains and return this value
    return hexadec.split('').reverse().join('')
}