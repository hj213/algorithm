function solution(n) {
    var answer = 0;
    //비트 연산으로 개수 세기
    //n+1 하면서 개수 비교하기
    
    let nCount = count(n);  
    
    let next = n + 1;
    
    while(true){
        if(nCount === count(next)) return next;
        next++;
    }
    return answer;
}

function count(n){
    let count = 0;
    
    while(n>0){
        n = n &(n-1);
        count++;
    }
    return count;
}
