//두 정수의 각 자리 숫자가 같은 빈도를 가지는지 확인

function sameFrequency(int1, int2){
    if(int1.length !== int2.length ){
        return false;
    }
    
    let fqct1 = {};
    let fqct2 = {};
    
    for(let i of int1.toString()){
        fqct1[i] ? fqct1[i] += 1: fqct1[i] = 1;
    }
    for(let i of int2.toString()){
        fqct2[i] ? fqct2[i] += 1: fqct2[i] = 1;
    }
    
    for(const key in fqct1){
        if(!(key in fqct2)){
            return false;
        }
        if(fqct2[key] !== fqct1[key]){
            return false;
        }
    }
    return true;
    
  }
  
  sameFrequency(133, 313)