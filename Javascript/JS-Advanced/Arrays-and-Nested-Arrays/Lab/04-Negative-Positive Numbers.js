function solve(arr){
    const result = arr
    .reduce((acc, el) => {
        if(el < 0){
            acc.unshift(el)
        }else{
            acc.push(el)
        };
        return acc
    }, [])
    .join("\n");

    console.log(result)

};

// solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);