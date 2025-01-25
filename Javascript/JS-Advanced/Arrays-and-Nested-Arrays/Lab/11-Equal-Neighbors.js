function solve(matrix) {
    let result = 0;

    for(let row = 0; row < matrix.length; row ++){
        for(let col = 0; col < matrix[row].length; col++){
            const currentValue = matrix[row][col];

            //check right
            if(currentValue === matrix[row][col + 1]){
                result += 1;
            }

            //check down
            if(row < matrix.length - 1 && currentValue === matrix[row + 1][col]){
                result += 1;
            }
        }
    }

    return result
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));

