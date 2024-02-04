function power(x, n){

    if(n == 0) return 1
    return x * power(x, n-1);
}

function factorial(n){
    if(n == 0 ) return 1
    return n * factorial(n-1)
}

function productOfArray(arr){
    if(arr.length == 0) return 1
    
    return arr[0] * productOfArray(arr.slice(1))
}

function recursiveRange(n){
    if(n == 0) return 0
   return n + recursiveRange(n-1);
}

function fib(n){
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
}

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str){
    if(str.length == 1) return true;
    if(str.length == 2) return str[0] == str[1];
    if(str[0] == str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}