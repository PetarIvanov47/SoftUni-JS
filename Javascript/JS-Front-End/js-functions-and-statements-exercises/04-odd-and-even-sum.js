function solve(number) {
    const numString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numString.length; i++) {
        let currentNum = parseInt(numString[i]);

        if (currentNum % 2 === 1) {
            oddSum += currentNum;
        } else {
            evenSum += currentNum
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(solve(3495892137259234));