function solution(elements) {

    let set = new Set();

    for(let i = 0; i < elements.length; i++){
        let sum = 0;
        for(let j = 0; j < elements.length ; j++){
            let end = (i + j) % elements.length;
            sum += elements[end];
            set.add(sum);
        }
    }

    return set.size;
}
