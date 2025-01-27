function ticTacToe(coordinates) {
    function createBoard() {
        const result = [];
        for (let row = 0; row < 3; row++) {
            result.push([]);
            for (let col = 0; col < 3; col++) {
                result[row][col] = "false"
            }
        }
        return result
    };

    function checkBoard(board, playerSymbol) {
        let winner = false;

        if (board[0][0] == playerSymbol && board[0][1] == playerSymbol && board[0][2] == playerSymbol) {
            winner = true;
        } else if (board[1][0] == playerSymbol && board[1][1] == playerSymbol && board[1][2] == playerSymbol) {
            winner = true;
        } else if (board[2][0] == playerSymbol && board[2][1] == playerSymbol && board[2][2] == playerSymbol) {
            winner = true;
        } else if (board[0][0] == playerSymbol && board[1][0] == playerSymbol && board[2][0] == playerSymbol) {
            winner = true;
        } else if (board[0][1] == playerSymbol && board[1][1] == playerSymbol && board[2][1] == playerSymbol) {
            winner = true;
        } else if (board[0][2] == playerSymbol && board[1][2] == playerSymbol && board[2][2] == playerSymbol) {
            winner = true;
        } else if (board[0][0] == playerSymbol && board[1][1] == playerSymbol && board[2][2] == playerSymbol) {
            winner = true;
        } else if (board[0][2] == playerSymbol && board[1][1] == playerSymbol && board[2][0] == playerSymbol) {
            winner = true;
        }
        return winner
    };

    function printBoard(board){
        for(let r = 0; r < board.length; r++){
            console.log(board[r].join("\t"));
        }
    };

    const board = createBoard();
    const firstPlayerSymbol = "X";
    const secondPlayerSymbol = "O";
    let playerOnTurn = firstPlayerSymbol;
    let validTurns = 0;

    for (let turn = 0; turn < coordinates.length; turn++) {
        let [row, col] = coordinates[turn].split(" ");
        let hasWinner = false;

        if (board[row][col] != "false") {
            console.log("This place is already taken. Please choose another!");
            continue
        };

        board[row][col] = playerOnTurn;
        validTurns += 1;

        if(validTurns > 4){
            hasWinner = checkBoard(board, playerOnTurn);
        };
        
        if(hasWinner){
            console.log(`Player ${playerOnTurn} wins!`);
            break
        }

        playerOnTurn = playerOnTurn == firstPlayerSymbol ? secondPlayerSymbol : firstPlayerSymbol;

        if(validTurns > 8){
            console.log("The game ended! Nobody wins :(");
            break
        }
    };

    printBoard(board);
};


ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);
