//배열 내의 고유한 값 개수 반환
//다중 포인터

function countUniqueValues(arr){

    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;
}

countUniqueValues([1,1,2,3,3,4,5,6,6,7])