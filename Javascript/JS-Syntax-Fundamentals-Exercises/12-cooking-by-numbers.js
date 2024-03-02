function solve(num, operationOne, operationTwo, operationThree, operationFour, operationFive) {
    const listOfOperations = [
        operationOne,
        operationTwo,
        operationThree,
        operationFour,
        operationFive
    ];
    let result = parseInt(num, 10);
    for (let i = 0; i < listOfOperations.length; i++) {
        let operation = listOfOperations[i];
        switch (operation) {
            case 'chop':
                result /= 2;
                break;
            case 'dice':
                result = Math.sqrt(result);
                break;
            case 'spice':
                result += 1
                break;
            case 'bake':
                result *= 3;
                break;
            case 'fillet':
                result -= (result * 0.20);
                break;
        }

        console.log(result)
    }
}

