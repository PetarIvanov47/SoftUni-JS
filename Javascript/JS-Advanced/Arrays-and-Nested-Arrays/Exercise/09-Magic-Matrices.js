function solve(matrix) {
    let magicNumber = 0;
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        let colSum = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            rowSum += matrix[row][col];
            if (col < matrix.length) {
                colSum += matrix[col][row];
            };
        }

        if (rowSum != colSum) {
            return false
        };

        if (magicNumber == 0) {
            magicNumber = rowSum;
        };

        if (rowSum != magicNumber) {
            return false
        };

    }

    return true
}

console.log(solve([
    [4, 5, 6, 1],
    [6, 5, 4, 1],
    [5, 5, 5, 1],
]));

// console.log(solve([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]
// ]));

// console.log(solve([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]
// ]));