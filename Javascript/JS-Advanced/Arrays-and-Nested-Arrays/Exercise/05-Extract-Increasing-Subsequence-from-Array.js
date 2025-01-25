function solve(numbers) {
    const result = [];
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for(let num of numbers){
        if(num >= biggestNumber){
            result.push(num);
            biggestNumber = num
        }
    }
    return result
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([20]));