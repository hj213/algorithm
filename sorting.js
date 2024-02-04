function numberCompare(num1, num2){
    return num2 - num1
}
[5,2,6,1].sort(numberCompare) //[1,2,5,6]

function stringCompare(str1, str2){
    return str2.length - str1.length
}

//버블 정렬
//최적화 위해서 noswap 사용하는 게 포인트!
function bubbleSort(arr){
    const swap = (arr, j1, j2) => {
        [arr[j1], arr[j2]] = [arr[j2], arr[j1]]
    };
    let noSwaps;

    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i-1; j++){
            if(temp > arr[j+1]) {
            // let temp = arr[j]
            //  arr[j] = arr[j+1]
            //  arr[j+1] = temp
                swap(arr, j, j+1);
                noSwaps = false; 
            } 

        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([3, 54, 12, 32, 8, 6, 2, 4, 1])

//선택정렬
//최솟값이 현재 i 인덱스가 아닐 때 swap하는 것이 포인트!
function selectionSort(arr){

    const swap = (arr, one, two) => {
        [arr[one], arr[two]] = [arr[two], arr[one]]
    }
    
    for(let i = 0; i<arr.length; i++){
        let minimum = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minimum]) minimum = j;
        }
        if(minimum !== i) swap(arr,i,minimum);
        
    }
    return arr;
}

selectionSort([3, 54, 12, 32, 8, 6, 2, 4, 1])

//삽입 정렬
//루프 돈 후 j+1로 위치 변경해주는 게 포인트!
function insertionSort(arr){
    for(let i =0; i < arr.length; i++){
        let cur = arr[i];
        let j;
        for(j = i-1; j >= 0 && arr[j] > cur; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = cur;
    }
    return arr;
}

insertionSort([3, 54, 12, 32, 8, 6, 2, 4, 1])