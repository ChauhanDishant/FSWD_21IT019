const prompt = require('prompt-sync')()
let number = prompt("Enter your number : ");
function arguments(number) {
    try {
        if (number < 0) {
            throw new Error('The error is due to the negative number')
        }
    }
    catch (Error) {
        console.log(Error)
    }
}
arguments(number)
