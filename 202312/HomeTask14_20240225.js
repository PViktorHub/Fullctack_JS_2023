//Task1

function ticTacToeChecker(board) {
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        if (board[i][0] !== 0) {
            let isRowWin = true;
            let isColWin = true;
            for (let j = 1; j < cols; j++) {
                if (board[i][j] !== board[i][0]) {
                    isRowWin = false;
                }
                if (board[j][i] !== board[0][i]) {
                    isColWin = false;
                }
            }
            if (isRowWin) return board[i][0];
            if (isColWin) return board[0][i];
        }
    }


    if (board[0][0] !== 0) {
        let isDiagonal1Win = true;
        let isDiagonal2Win = true;
        for (let i = 1; i < rows; i++) {
            if (board[i][i] !== board[0][0]) {
                isDiagonal1Win = false;
            }
            if (board[i][cols - i - 1] !== board[0][cols - 1]) {
                isDiagonal2Win = false;
            }
        }
        if (isDiagonal1Win) return board[0][0];
        if (isDiagonal2Win) return board[0][cols - 1];
    }


    for (let row of board) {
        if (row.includes(0)) {
            return -1;
        }
    }

    return 0; 
}


let board = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
];

console.log(ticTacToeChecker(board)); 

board = [
    [1, 1, 1],
    [0, 0, 2],
    [2, 1, 0]
];

console.log(ticTacToeChecker(board)); 

board = [
    [2, 1, 1],
    [0, 2, 2],
    [2, 1, 2]
];

console.log(ticTacToeChecker(board)); 


//Task2
function meeting(rooms, need) {
    let takenChairs = [];
    let takenTotal = 0;

    for (let room of rooms) {
        const [occupants, totalChairs] = room;
        const freeChairs = Math.max(0, totalChairs - occupants.length);

        if (freeChairs >= need - takenTotal) {
            takenChairs.push(need - takenTotal);
            takenTotal = need;
            break;
        } else {
            takenChairs.push(freeChairs);
            takenTotal += freeChairs;
        }
    }

    if (need === 0) {
        return 'Game On';
    } else if (takenTotal < need) {
        return 'Not enough!';
    } else {
        return takenChairs;
    }
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)); 
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)); 
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)); 

//Task3
let dots = '';
let intervalId1 = setInterval(() => {
    process.stdout.write('\r' + dots);
    dots += '.';
    if (dots.length > 3) dots = '';
}, 500);


setTimeout(() => {
    clearInterval(intervalId)1;
}, 5000);


const symbols = ['|', '/', '-', '\\'];
let currentSymbol = 0;
let intervalId2 = setInterval(() => {
    process.stdout.write('\r' + symbols[currentSymbol]);
    currentSymbol = (currentSymbol + 1) % symbols.length;
}, 200);


setTimeout(() => {
    clearInterval(intervalId2);
}, 5000);

let counter = 0;
let intervalId3 = setInterval(() => {
    process.stdout.write('\r' + counter);
    counter = (counter + 1) % 10;
}, 200);


setTimeout(() => {
    clearInterval(intervalId3);
}, 5000);




