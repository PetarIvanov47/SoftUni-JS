function solve(num1, num2, num3) {
    function sum(a, b){
        return a + b
    }

    function subract (a, b){
        return a - b
    }

    const result = subract(sum(num1, num2), num3);
    return result
}

console.log(solve(1, 17, 30));