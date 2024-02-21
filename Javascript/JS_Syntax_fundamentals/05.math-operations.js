function solve(firstNum, secondNum, operator) {
    let result;

    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        
        case '-':
            result = firstNum - secondNum;
            break;
        
        case '*':
            result = firstNum * secondNum;
            break;

        case '/':
            result = firstNum / secondNum;
            break;
        
        case '**':
            result = firstNum ** secondNum;
            break;
        
        case '%':
            result = firstNum % secondNum;
            break;
        default:
            result = 'The operator is not Valid'
            break;
    }

    console.log(result);
}