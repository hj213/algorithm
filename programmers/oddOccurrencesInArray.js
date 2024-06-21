function solution(A) {
    // Implement your solution here
    let result = 0;
    let count = {};

    for(value of A){
        count[value] = count[value] ? count[value] + 1 : 1;
    }

    for(key in count){
        if(count[key] === 1 || (count[key] % 2 === 1))  result = parseInt(key);
    }


    //더 나은 코드 O(n)
    function solution(A) {  
        const totalCounter = A.reduce((counter, num) => {      
            counter[num] = counter[num] ? counter[num] + 1 : 1;      
            return counter;  
        }, {});
              
        for (key in totalCounter) {      
            if (totalCounter[key] % 2 === 1) {          
                return Number(key);      
            }  
    }}


    return result;
}