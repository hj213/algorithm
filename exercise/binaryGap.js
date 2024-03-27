
function solution(N) {
    if(N < 0) return undefined;
    const n = N.toString(2);
    let start;
    let end = 0;
    let result = 0;

    for(let i = 0; i < n.length; i++){
        if(n[i] === '1' && start == undefined){ //맨처음 시작만 걸리면 된다.
            start = i;
        } else if(n[i] === '1'){
            end = i;

            let temp = end - start -1;

            result = Math.max(temp, result);

            start = end;
            end = 0;
        } 
    }

    

    return result;

}
    //일단 n을 바이너리로 변환 후
    //포인터 두개를 이용해서 일이 나오면 첫번째 포인터의 위치 = 해당 인덱스 위치,
    //n은 계속 움직여 그런다음 1이 나오면 엔드 포인터 생성해서 해당 위치에서 첫번째 뺴서 길이 계산,
    //그다음에 포인터 엔드로 다시 변경 후 반복.(엔트포인터 초기화)
    //리턴 계산된 길이

    //O(N)