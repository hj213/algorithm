//pivot을 어디로 설정하느냐에 따라 시간이 달라질 수 있다.
//데이터 집합의 중간값이 되도록 설정
//best case, O(nlogn)
//worst case, pivot=arr[0], O(n^2)

function pivot(arr, start=0, end=arr.length-1){
    const swap = (arr,idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]];
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx ++;
            swap(arr,swapIdx,i);
        }
    }
    //위 과정이 끝나면 가운데 값을 기준으로 크고 작은 값으로 정렬이 된다.(순서는 상관 없음)
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
    let pivotIndex = pivot(arr,left,right);
    if(left < right){
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}