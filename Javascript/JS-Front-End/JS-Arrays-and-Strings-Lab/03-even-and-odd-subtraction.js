function solve(numbers) {

    let evenSum = 0;
    let oddSum = 0;

    for (let num of numbers) {
        num = Number(num);

        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
}
