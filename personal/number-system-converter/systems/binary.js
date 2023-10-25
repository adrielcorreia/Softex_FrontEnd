export function binaryConverter(num) {
    let binary = ''
    
    // make the conversion and add the remains to binary variable
    while (num >= 0) {
        binary += num%2
        num = Math.floor(num/2)
        
        if (num <= 0) {
            break
        }
    }

    // reverse the order of the remains
    return parseInt(binary.split('').reverse().join(''))
}