//체육복 빌려주기
function solution(n, lost, reserve) {
    var answer = 0;
    //1. 전체 학생의 길이만큼 배열 생성한다.
    //2. lost, reverse를 반영해준다.
    //3. 앞에서 혹은 뒤에서 빌릴 수 있는지 점검.
    
    let students = new Array(n).fill(1);
    
    lost.forEach((e) => students[e-1]--);
    reserve.forEach((e) => students[e-1]++);
    
    for(let i = 0 ; i < n; i++){
        if(students[i] === 0 ){
            if(i > 0 && students[i-1] === 2){
                students[i]++;
                students[i-1]--;
            } else if(students[i+1] === 2) {
                students[i]++;
                students[i+1]--;
            }
        }
    }


    
    
    return students.filter((e)=> e>0).length;
}

//구명보트를 최대한 적게 사용해서 인원을 모두 태우기
function solution(people, limit) {
    //1. 무게가 작은 사람과 큰 사람을 함께 담는다. 
    //2. 가득 차면 구명보트 개수를 -- 해준다. 포인터를 옮겨준다.  
    //3. 위의 과정을 반복하고 구명보트 개수를 리턴한다.
    
    let temp = 0; 
    let boat = people.length;
    
    let light = 0, heavy = people.length-1;
    
    people.sort((a,b)=> a-b);
    
    while(light < heavy){
        
        if(people[light] + people[heavy] <= limit){
            light++;
            boat--;
            
        }
        heavy--;
    }
    
    
    return boat;
}