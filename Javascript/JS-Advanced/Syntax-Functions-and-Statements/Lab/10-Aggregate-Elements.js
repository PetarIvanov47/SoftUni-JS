function solve(numArray){
    const sumOfElements = numArray.reduce((acc, currentValue) => {
        return acc + currentValue
    } ,0);

    const sumOfInverseValues = numArray.reduce((acc, currentValue) => {
        return acc + 1 / currentValue;
    }, 0);

    const concatElements = numArray.reduce((acc, currentValue) => {
        return acc + currentValue.toString();
    }, "");

    console.log(sumOfElements);
    console.log(sumOfInverseValues)
    console.log(concatElements)
};

// solve([1, 2, 3]);
solve([2, 4, 8, 16]);