function numberModification(number) {
    let modifiedNumber = number;

    function findAverageSum(n) {
        let nToArray = n.toString().split('').map(Number);
        return (nToArray.reduce((a, b) => a + b, 0)) / nToArray.length
    }
    
    while (findAverageSum(modifiedNumber) <= 5) {
        modifiedNumber = Number(modifiedNumber.toString() + '9');
    }

    return modifiedNumber
}

console.log(numberModification(5835));