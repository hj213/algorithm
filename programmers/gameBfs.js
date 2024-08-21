function solution(maps) {
    
    //큐를 이용해 반복문을 돌면서 경로를 탐색하는 과정을 거친다. 
    //1. 큐에서 요소 하나를 뽑는다.
    //2. 뽑은 걸 기준으로 새로운 좌표를 계산해주고 다시 큐에 추가해준다.(for문을 돌면서)
    //3. 만약에 마지막에 도달하면 종료하고 카운트를 반환한다. 
    
    let q = [[0,0,1]];
    const location = [[0,1], [1,0], [-1,0],[0,-1]];
    
    while(q.length > 0){
       
        let [x,y,c] = q.shift();
        
        
        if(x === maps.length-1 && y === maps[0].length-1 ){
            return c;
        }
        
        for(let [newX, newY] of location){
            if(newX+x >= 0 && newX+x < maps.length && newY+y >= 0 
               && newY+y < maps[0].length && maps[newX+x][newY+y] == 1){
                maps[newX+x][newY+y] = 0;
                q.push([newX+x, newY+y, c+1]);
            }
    
        }
        
    }
    
    return -1;
}