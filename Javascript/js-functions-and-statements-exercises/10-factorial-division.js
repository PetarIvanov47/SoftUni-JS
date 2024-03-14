function solve(num1, num2) {
    function factorial(n) {
        if (n === 0) {
            return 1
        }
        
        return n * factorial(n - 1);
    
    }

    return (factorial(num1) / factorial(num2)).toFixed(2)

}

console.log(solve(6, 2));

