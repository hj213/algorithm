//배열 두개를 비교하되, 배열 2는 배열 1의 제곱 값이어야 한다.

function same(first, second) {
    if(first.length !== second.length){
        return false;
    }
    let fc1 = {};
    let fc2 = {};

    for(const i of first){ //배열
        fc1[i] = (fc1[i] || 0) +1
    };
    for(const i of second){
        fc2[i] = (fc2[i] || 0) +1
    };

    for(const key in fc1){ //객체
        if(!(key**2 in fc2)){ //-> 있는지 비교
            return false;
        }
        if(fc2[key**2] !== fc1[key]){ //-> 개수 비교
            return false; 
        }
    }
    return true;
}

same([1,2,5,9],[1,81,25,4])