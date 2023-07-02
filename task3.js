const prompt = require('prompt-sync')()
let age = prompt("Enter your age : ")
if (age <= 18) {
    console.log("You are minor")
}
else if (age > 18 && age <= 65) {
    console.log("You are Adult")
}
else {
    console.log("You are senior citizen")
}