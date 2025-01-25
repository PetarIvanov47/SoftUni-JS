function solve(matrix) {
    function findMainDiagonl(matrix){
        let result = 0;
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row == col) {
                    result += matrix[row][col];
                }
            }
        }
        return result
    }

    let mainDiagonal = findMainDiagonl(matrix);
    
    const reversedMatrix = matrix
        .map(row => row.reverse());
    
    let secondaryDiagonal = findMainDiagonl(reversedMatrix);

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
