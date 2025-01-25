function solve(n, k) {
    const result = [1];
    for (let i = 1; i < n; i++){
        let numberToAdd = 0;
        let start = result.length - k;
        if(start < 0){
            start = 0;
        }

        result.slice(start, start + k).forEach(e => numberToAdd += e);
        result.push(numberToAdd);
    }

    return result
};


console.log(solve(6, 3));
console.log(solve(8, 2));