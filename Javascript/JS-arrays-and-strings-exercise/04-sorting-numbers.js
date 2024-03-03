function solve(numbers) {
    let result = [];
    
    numbers.sort((a, b) => a - b);

    while (numbers.length != 0) {
        let minNumber = numbers.shift();
        let maxNumber = numbers.pop();
        result.push(minNumber, maxNumber);
    }

    return result

}

solve([1, 65, 3, 52, 48, 63, 31, -3])

