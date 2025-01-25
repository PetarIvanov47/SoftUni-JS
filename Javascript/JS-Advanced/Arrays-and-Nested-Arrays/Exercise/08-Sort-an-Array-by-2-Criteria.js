function solve(arr) {
    const result = arr.sort((a, b) => {
        const aLength = a.length;
        const bLength = b.length;

        if (aLength < bLength) {
            return -1;
           
        } else if(aLength > bLength){
            return 1;
        }else {
            return a.localeCompare(b);
        }
    });

    console.log(result.join("\n"))
}

// solve(['alpha', 'beta', 'gamma']);
// solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);
