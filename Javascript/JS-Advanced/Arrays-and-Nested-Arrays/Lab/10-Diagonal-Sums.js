function solve(matrix) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(row == col){
                mainDiagonal += matrix[row][col];
                secondaryDiagonal += matrix[row][matrix[row].length - 1 - row];
                                            
            }
        }
    }

    console.log(`${mainDiagonal} ${secondaryDiagonal}`)
}

solve([
    [20, 40],
    [10, 60]
]);

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);

// solve([
//     [3, 4, 7, 3, 4],
//     [4, 5, 7, 3, 5],
//     [3, 7, 3, 2, 7],
//     [3, 9, 7, 1, 9],
//     [3, 9, 7, 1, 9],
// ])
