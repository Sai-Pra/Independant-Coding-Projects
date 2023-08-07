// Make an example thing for me to validate using mocha. This should have multiple functions

// Export the functions so that they can be used in other files

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};




// Function: add
// Description: Adds two numbers together
// Input: a, b
// Output: a + b

function add(a, b) {
    return a + b;
}

// Function: subtract
// Description: Subtracts two numbers
// Input: a, b
// Output: a - b

function subtract(a, b) {
    return a - b;
}

// Function: multiply
// Description: Multiplies two numbers
// Input: a, b
// Output: a * b

function multiply(a, b) {
    return a * b;
}

// Function: divide
// Description: Divides two numbers
// Input: a, b
// Output: a / b

function divide(a, b) {
    return a / b;
}
