//패턴 찾기, 횟수 반환

function naiveSearch(long, patt){
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < patt.length; j++){
            if(patt[j] !== long[i+j]) break;
            if(j === patt.length -1) count++;
        }
    }
    return count
}
naiveSearch("lorie loled", "lo")