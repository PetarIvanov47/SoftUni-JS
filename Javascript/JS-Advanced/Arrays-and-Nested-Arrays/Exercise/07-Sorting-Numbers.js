function solve(numbers) {
    result = [];
    const sortedArray = numbers.sort((a, b) => a - b);

    while(sortedArray.length > 0){
        result.push(sortedArray.shift());

        const lastElement = sortedArray.pop();
        if(lastElement){
            result.push(lastElement);
        }
    }
    return result
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(solve([22, 9, 63, 3, 2, 19, 54, 11, 21]));
