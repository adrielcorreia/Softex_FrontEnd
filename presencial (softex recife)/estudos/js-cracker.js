/**
 * Function to break a password cracker.
 *
 * @param {string} password - The password to be cracked.
 * @returns {string} The cracked password.
 */
function breakPasswordCracker(password) {
    // In this example, we will assume that the password is a 4-digit numeric code.
    // We will use a brute-force approach to crack the password by trying all possible combinations.
 
    // Generate all possible 4-digit numeric codes
    let possibleCodes = [];
    for (let i = 0; i < 10000; i++) {
        const codeArr = i.toString().padStart(4, '0');
        possibleCodes.push(codeArr);
    }
    possibleCodes = possibleCodes
    //console.log(possibleCodes)
 
    // Iterate through each possible code and check if it matches the given password
    for (let i = 0; i < possibleCodes.length; i++) {
        let code = possibleCodes[i];
        if (code == password) {
            return code; // Return the cracked password
        }
    }
 
    // If no match is found, return an error message
    return "Password not found!";
}
 
// Usage Example for breakPasswordCracker
 
const password = 9021;
const crackedPassword = breakPasswordCracker(password)
console.log(`The cracked password is: ${crackedPassword}`);