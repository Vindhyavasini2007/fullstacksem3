function calc(a, b, operation) {
    return operation(a, b); // pass both arguments
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calc(10, 20, add));       // 30
console.log(calc(10, 20, multiply));  // 200
