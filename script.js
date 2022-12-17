//table
const cp_table = document.createElement('table');
const cp_result = document.createElement('div');

// for (let i = 0; i < 3; i++) {   //tr
//     const cp_tr = document.createElement('tr');
//     for (let j = 0; j < 3; j++) {   //td
//         const cp_td = document.createElement('td');
//         cp_tr.append(cp_td);
//     }
//     cp_table.append(cp_tr);
// }

// document.body.append(cp_table);
// document.body.append(cp_result);

//decide outcome
const checkWin = (_td) => {
    let rowIndex = _td.parentNode.rowIndex;
    let colIndex = _td.cellIndex;

    //row
    if (board[rowIndex][0].textContent === mark &&
        board[rowIndex][1].textContent === mark &&
        board[rowIndex][2].textContent === mark) {
        return true;
    }

    //column
    if (board[0][colIndex].textContent === mark &&
        board[1][colIndex].textContent === mark &&
        board[2][colIndex].textContent === mark) {
        return true;
    }

    //diagonal (backslash)
    if (board[0][0].textContent === mark &&
        board[1][1].textContent === mark &&
        board[2][2].textContent === mark) {
        return true;
    }

    //diagonal (slash)
    if (board[0][2].textContent === mark &&
        board[1][1].textContent === mark &&
        board[2][0].textContent === mark) {
        return true;
    }

    return false;
}


//click
let mark = 'O';
let cnt = 0;

const table_event_listener = () => {
    const which_td = event.target.closest('td');

    //avoid overlapping
    if (which_td.textContent !== '') {
        return;
    }

    //alternate 'O' and 'X'
    which_td.textContent = mark;
    cnt = cnt + 1;

    //decide outcome
    if (checkWin(which_td) === true) {
        cp_result.textContent = "The winner is " + mark;
        cp_table.removeEventListener('click', table_event_listener);
        return;
    }
    if (cnt === 9) {
        cp_result.textContent = "Match ended in a draw";
        cp_table.removeEventListener('click', table_event_listener);
        return;
    }
    // if (board.flat().every((_td) => _td.textContent !== '') === true) {
    //     cp_result.textContent = "Match ended in a draw";
    //     cp_table.removeEventListener('click', table_event_listener);
    //     return;
    // }

    //mark = (mark === 'O')?'X':'O'; 
    if (mark === 'O') {
        mark = 'X';
    } else {
        mark = 'O';
    }
};


//two dimensional array to save 'td's
const board = [];

for (let i = 0; i < 3; i++) {   //tr
    const cp_tr = document.createElement('tr');
    const t_row = [];

    for (let j = 0; j < 3; j++) {   //td
        const cp_td = document.createElement('td');
        cp_tr.append(cp_td);
        t_row.push(cp_td);
    }
    board.push(t_row);
    cp_table.append(cp_tr);
}

document.body.append(cp_table);
document.body.append(cp_result);


cp_table.addEventListener('click', table_event_listener);
