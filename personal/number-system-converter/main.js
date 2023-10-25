//the package.json has the type: "module", cause without it, the nodejs cant run import and export methods

import { binaryConverter } from "./systems/binary.js"
import { octalConverser } from "./systems/octal.js"
import { hexadecConverter } from "./systems/hexadecimal.js"

const number = 20425 //put any number you want
const formatedNumber = Intl.NumberFormat('pt-BR').format(number) //language-sensitive number formatting (for Brazilian Portuguese)

const binary = binaryConverter(number)
const hexadecimal = hexadecConverter(number)
const octal = octalConverser(number)

console.log(`Number (Decimal): ${formatedNumber}\n`)
console.log(`Binary = ${binary}`)
console.log(`Octal = ${octal}`)
console.log(`Hexadecimal = ${hexadecimal}`)