/**
 * @param {number[][]} board
 * @return {number}
 */
 var snakesAndLadders = function(board) {
    let n = board.length;
    let s = new Set();
    let getPos = (pos) => {
        let row = Math.floor((pos-1)/n);
        let col = (pos-1)%n;
        col = row % 2 === 1 ? n-1-col : col;
        row = n-1-row;n
        return [row, col];
    }

    let q = [[1,0]];
    while(q.length > 0){
        [pos,moves] = q.shift();
        for(let i = 1; i < 7; i++){
            let newPos = i+pos;
            let [r,c] = getPos(newPos);

            if(board[r][c] != -1) newPos = board[r][c]
            if(newPos == n*n) return moves+1;
            if(!s.has(newPos)){
                s.add(newPos)
                q.push([newPos, moves+1])
            }
        }
    }
    return -1;
};


//getPos라는 함수를 이용해서 위치를 적절하게 변환해주는 과정이 중요했다. 