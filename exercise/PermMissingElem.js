function solution(A) {
    if(!A.length) return 1;
    
    let n = A.length+1;

    return ((n*(n+1))/2) - A.reduce((acc,cur)=> acc+cur)
}