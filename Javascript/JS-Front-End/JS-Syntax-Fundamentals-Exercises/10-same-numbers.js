function solve(number) {
    
    let isTrue = true;
    let totalSum = 0;
    let numberString = number.toString();

    for (let i = 0; i < numberString.length; i++) {

        let currentNumber = numberString[i];
        let previousNumber = currentNumber;

        if (i != 0) {
            previousNumber = numberString[i-1];  
        }

        if (currentNumber != previousNumber) {
            isTrue = false;
        }

        totalSum += parseInt(currentNumber, 10)
        
    }

    console.log(`${isTrue}\n${totalSum}`);
}
