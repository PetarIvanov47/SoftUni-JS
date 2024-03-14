function findPerfectNumber(number) {
    let isPerfect = false;

    if (number % 2 === 1 && number <= 0) {
        return "It's not so perfect"
    }

    let divisors = [];
    const divisorsRange = number / 2;

    for (let i = 1; i <= divisorsRange; i++) {

        if (number % i === 0) {
            divisors.push(i);
        }
    }

    const totalSum = divisors.reduce((a, b) => a + b, 0);

    if (totalSum === number) {
        isPerfect = true
    }

    if (isPerfect) {
        return 'We have a perfect number!'
    }

    return "It's not so perfect."
}

console.log(findPerfectNumber(-6));
console.log(findPerfectNumber(29));
console.log(findPerfectNumber(6));