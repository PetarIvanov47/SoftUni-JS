function solve(arr) {
    const result = arr
    .sort((a, b) => a - b)
    .slice(Math.floor(arr.length) / 2);

    return result
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));