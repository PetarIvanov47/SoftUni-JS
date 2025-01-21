function solve(num) {
    const numToString = num.toString();
    let result = 0;
    let firstNumber = numToString[0];
    let isSame = false;

    for (let i = 0; i < numToString.length; i++) {
        result += Number(numToString[i]);
        if (numToString[i] != firstNumber) {
            isSame = false;
        } else {
            isSame = true;
        }
    };
    console.log(isSame);
    console.log(result);
};

solve(2222222);
solve(1234);