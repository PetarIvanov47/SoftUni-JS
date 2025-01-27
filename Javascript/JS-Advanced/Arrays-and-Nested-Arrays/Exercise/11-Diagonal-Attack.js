function solve(arr) {
    function printMatrix(matrix){
        for(let row = 0; row < matrix.length; row++){
            console.log(matrix[row].join(" "));
        }
    };

    const matrix = arr.map(e => e.split(' ').map(n => Number(n)));
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

    if(mainDiagonal == secondaryDiagonal){
        for(let row = 0; row < matrix.length; row++){
            for(let col = 0; col < matrix[row].length; col++){
                if(!(row == col || col == matrix[row].length - 1 - row)){
                    matrix[row][col] = mainDiagonal;      
                }
            }
        }
    }

    printMatrix(matrix);
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

solve(['1 1 1',
    '1 1 1',
    '1 1 0'])