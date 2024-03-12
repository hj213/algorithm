//정렬된 두개의 배열을 병합
function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++;
        } else{
            result.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
     while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergePractice(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++
        } else {
            result.push(arr2[j]);
            j++
        }
    } 
    while(i<arr1.length){
        result.push(arr1[i]);
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++
    }
    return result;
}

function mergeSortPractice(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSortPractice(arr.slice(0,mid));
    let right = mergeSortPractice(arr.slice(mid));

    mergePractice(left,right)
}

merge([1,3,5,7],[2,4,6,8])

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);
}

mergeSort([5,63,12,2,14,64])

//O(nlogn)
//분할 -> log n
//비교 후 병합 -> n

//기본 정렬보다 훨씬 빠르다.