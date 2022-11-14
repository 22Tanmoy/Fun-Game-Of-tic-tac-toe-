const cell = document.querySelectorAll('.cell');
const player1score = document.querySelector('.player1score');
const player2score = document.querySelector('.player2score');
const restartBtn = document.querySelector('.restart');

const winCombination = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 7],
    [0, 4, 8],
    [2, 4, 6],

]
let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0,
}
let flag = true;
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if (flag === true) {
            addcellsplayer1(i);

        } else {
            addcellsplayer2(i);
        }
        checkwinner();
    })
}

function addcellsplayer1(i) {
    cell[i].innerHTML = "X";
    player1.push(i);
    flag = false;
}

function addcellsplayer2(i) {
    cell[i].innerHTML = "0";
    player1.push(i);
    flag = true;
}

function checkwinner() {
    winCombination.find((item) => {
        if (item.filter((i) => player1.include(i).length === 3)) {
            alert("player1 won");
            score.player1++;
            //drawscore();
            clearfield();
        } else if (item.filter((i) => player1.include(i).length === 3)) {
            alert("player2 won");
            score.player2++;
            //drawscore();
            clearfield();
        }
        return
    })
}
/*
function drawscore() {
    player1score.innerHTML = "player 1: +score.player1";
    player2score.innerHTML = "player 2: +score.player2";
}
drawscore();
*/

function clearfield() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    flag = true;
}
restartBtn.addEventListener('click', () => {
    clearfield();
})