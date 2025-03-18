function arithmeticOperations(a, b, c) {
    let op1 = a + b * c;
    let op2 = a % b + c;
    let op3 = c + a / b;
    let op4 = a * b + c;

    console.log(`a + b * c = ${op1}`);
    console.log(`a % b + c = ${op2}`);
    console.log(`c + a / b = ${op3}`);
    console.log(`a * b + c = ${op4}`);

    let max = Math.max(op1, op2, op3, op4);
    let min = Math.min(op1, op2, op3, op4);

    console.log(`Maximum Value: ${max}`);
    console.log(`Minimum Value: ${min}`);
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter three numbers separated by space: ", (input) => {
    let [a, b, c] = input.split(" ").map(Number); 
    arithmeticOperations(a, b, c); 
    readline.close();
});
