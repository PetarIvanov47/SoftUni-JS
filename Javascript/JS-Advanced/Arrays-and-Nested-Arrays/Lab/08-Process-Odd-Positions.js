function solve(nums){
    const result = nums
        .filter((n, i) => i % 2 != 0)
        .map(e => e * 2)
        .reverse()
        .join(' ');

    return result
};

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));