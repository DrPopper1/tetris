import { 
    PLAYFIELD_ROWS,
    PLAYFIELD_COLUMNS,
    TETROMINO_NAMES,
    TETROMINOES,
    getRandomElement
} from "./utilities.js";

export class Tetris {
    constructor() {
        this.playfield;
        this.tetromino;
        this.init();
    }

    init() {
        this.generatePlayfield();
        this.generateTetromino();
    }

    generatePlayfield() {
        this.playfield = new Array(PLAYFIELD_ROWS).fill()
          .map(() => new Array(PLAYFIELD_COLUMNS).fill(0)); // 0?
    }

    generateTetromino() {
        const name = getRandomElement(TETROMINO_NAMES); /// fuck GitHub
        const matrix = TETROMINOES[name];
    }
}