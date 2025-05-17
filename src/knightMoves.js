// knightMoves.js
const BOARD_SIZE = 8;

const KNIGHT_OFFSETS = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1],
];

function isOnBoard(x, y) {
    if(x >= 0 && x < BOARD_SIZE && y < BOARD_SIZE && y >= 0) return true;
    return false;
}

function getLegalMoves(position) {
    let legalMoves = []
    for(const offSet of KNIGHT_OFFSETS) {
        const x = offSet[0] + position[0];
        const y = offSet[1] + position[1];
        if(isOnBoard(x, y)) {
            legalMoves.push([x, y])
        }
    }
    return legalMoves;
}

export function knightMoves(start, end) {
    
}
