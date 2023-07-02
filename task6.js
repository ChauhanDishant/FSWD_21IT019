function testScope() {
    var varVariable = 'I am declared with var';
    let letVariable = 'I am declared with let';
    const constVariable = 'I am declared with const';
}

testScope();

console.log(varVariable);   // Output: Error: varVariable is not defined
console.log(letVariable);   // Output: Error: letVariable is not defined
console.log(constVariable); // Output: Error: constVa