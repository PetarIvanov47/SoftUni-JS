function solve(numOne, numTwo, numThree) {

    const multiply = (a, b) => a * b;
    let result = multiply(numOne, multiply(numTwo, numThree));

    return result < 0 ? 'Negative' : 'Positive'

}

console.log(solve(5, 12,  -15));