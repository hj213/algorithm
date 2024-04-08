//n이 커질수록 시간 오래 걸린다. O(2^n)
function fib(n) {
    if(n < 2) return 1;
    
    return fib(n-1) + fin(n-2)
}


//memoization = O(n)
function fib(n, memo=[]) {
    if(memo[n] != undefined) return memo[n]; //배열에서 값을 찾는 건 상수 시간 소요니까!
    
    if(n <= 2) return 1;

    let res = fib(n-1, memo) + fin(n-2, memo);
    memo[n] = res;
    
    return res;
}

//tabulation = O(n) 시간 복잡도는 메모이제이션과 동일하지만 공간 복잡도 측면에서 낫다! 재귀는 콜스택 초과 에러 발생할 수도 있음
function fib(n) {
    if(n <= 2) return 1;

    let fibNums = [0,1,1];
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    
    return fibNums[n];
}