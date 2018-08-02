let game = {
    score: 0,
    isRunning: false,
    player: {r:0,c:0,colorIndex:1},
    enemy: {r:5,c:5,colorIndex:2},
    board: [
        [4,1,1,1,1,1],
        [1,1,3,3,1,1],
        [1,0,1,1,0,1],
        [2,0,2,2,0,2],
        [2,2,3,3,2,2],
        [2,2,2,2,2,0]

    ]

}


// setup the board
const __ = 0;
const P1 = 1;
const P2 = 2;
const SPONGE = 3;
const WALL = 4;

const ROWS = 6;
const COLS = 6;