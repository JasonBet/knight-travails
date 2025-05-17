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

const key = ([x, y]) => `${x},${y}`;
const fromKey = k => k.split(',').map(Number);

export function knightMoves(start, end) {
    if(key(start) === key(end)) return [start];

    const queue = [start];
    const visited = new Set([key(start)]);
    const parent = new Map();

    while(queue.length) {
        const current = queue.shift();

        if(key(current) === key(end)) break;

        for(const neighbor of getLegalMoves(current)) {
            const k = key(neighbor);
            if(!visited.has(k)) {
                visited.add(k);
                parent.set(k, key(current));
                queue.push(neighbor);
            }
        }
    }

    const path = [];
    for(let k = key(end); k !== undefined; k = parent.get(k)) {
        path.push(fromKey(k));
    }
    path.reverse();
    return path;
}
