//슬라이딩 윈도우 패턴
//어레이나 문자열 데이터의 하위집합을 트랙킹 하는 데 유용
//예) 유일한 문자로 구성된 가장 긴 시퀀스 찾기.


//n개만큼의 연속된 값이 가장 큰 경우 찾기.
function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < n; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;

    for(let i = num; i<arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i-n]; //매번 더할 필요없이 첫 값을 빼고 다음 값 더하고 -> 슬라이딩 윈도우 원리
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)