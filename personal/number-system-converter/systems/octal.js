export function octalConverser(num) {
    let octal = ''

    while (num >= 0) {
        octal += num%8
        num = Math.floor(num/8)

        if (num <= 0) {
            break
        }
    }

    return parseInt(octal.split('').reverse().join(''))
}