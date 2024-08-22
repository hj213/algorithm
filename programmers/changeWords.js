function solution(begin, target, words) {
    var answer = 0;
    //최단 거리 구하는 거니까 bfs로 풀기
    //한번에 한 알파벳만 바꿀 수 있으니까, 서로 다른 글자가 하나인지 확인하는 과정 거치고 -> 맞으면 q에 넣기. 
    
    let q = [[begin, 0]];
    
    while(q.length > 0){
        let [begin, count] = q.shift();
        
        if(begin === target){
            return count;
        }
        
        for(let i = 0; i < words.length; i++){
            if(words[i] !== 0 && diffCheck(begin, words[i]) === 1){
                q.push([words[i], count+=1]);
                words[i] = 0
            }
        }
    }
    
    return 0;
}

function diffCheck(begin, word){
    let count = 0;
    word.split('').forEach((e,i)=> {
        if(e !== begin[i]){
            count++;
        }
    })
    
    return count;
}