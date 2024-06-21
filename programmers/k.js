//정렬
//배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
//commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요

//내 답안
function solution(array, commands) {
    var answer = [];
    if(commands.length === 0) return answer;
    var a = array.slice(commands[0][0]-1,commands[0][1]).sort((a, b) => a - b)[commands[0][2]-1]
    answer.push(a);
    answer = answer.concat(solution(array,commands.slice(1)));
    return answer;
}

//더 간단한 답안
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}

//굳이 재귀를 사용하기보단 map을 활용하는 게 더 간단한듯.