function solve(stringsArr, steps) {

    let currentStep = 0;
    let result = [];

    while (currentStep < stringsArr.length) {

        result.push(stringsArr[currentStep]);
        currentStep += steps;
    }

    return result
}


