//분할 정복 패턴
//정렬된 배열! 큰 데이터에서 시간 복잡도 줄여준다.

//정렬된 주어진 배열에서 n을 찾아 인덱스를 반환하되, 없으면 -1을 반환

//선형 탐색 O(n)
function search(arr, n){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === n){
            return i;
        } 
    }
    return -1;
}

//분할 바이너리 서치
function search2(arr,n){
    let min = 0;
    let max = arr.length -1;

    while(min <= max){
        let middle = Math.floor((min+max)/2)
        let currentElement = arr[middle];

        if(arr[middle] < n){
            min = middle + 1;
        } else if(arr[middle] > n){
            max = middle - 1;
        } else{
            return middle;
        }
    }

    return -1;
}

search2([1,2,3,4,5,6], 4)
search2([1,2,3,4,5,6], 11)