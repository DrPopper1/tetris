export const PLAYFIELD_COLUMNS = 10;
export const PLAYFIELD_ROWS = 20;
export const TETROMINO_NAMES = ['I', 'J', 'L', 'O', 'S', 'Z', 'T'];
export const TETROMINOES = {
    'I' : [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    'J' : [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    'L' : [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    'O' : [
        [1, 1],
        [1, 1]
    ],
    'S' : [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    'Z' : [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ], 
    'T' : [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ]
};

export function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function convertPositionToIndex(row, column) {
    return row * PLAYFIELD_COLUMNS + column;    
}