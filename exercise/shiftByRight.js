function solution(A, K) {

    if(A.length <= 0) return A;
    
    let pop;

    while(K>0){
        pop = A.pop();
        A.unshift(pop);
        K--;
    }
    return A;
}