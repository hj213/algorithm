 var combine = function(n, k) {
    let answ = [];
    let comb = [];

    function backtrack(start){
        if(comb.length === k){
            answ.push([...comb]);
            return;
        }

        for(let i = start; i <= n ; i++){
            comb.push(i);
            backtrack(i+1);
            comb.pop();
        }
    }

    backtrack(1);
    return answ;
};

//backtracking