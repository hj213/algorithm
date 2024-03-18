class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue { //최소 힙(minBinaryHeap)
    constructor() {
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1 //새로 추가된 요소의 위치 파악 위해(추가된 후에는 항상 마지막에 위치하니까)
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){ 
        const min = this.values[0];
        const end = this.values.pop(); //마지막 값 추출, 루트가 될 값
        if(this.values.length > 0 ){
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]; 

        while(true){
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){ //범위 안에 있는지 확인
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) 
                    || (swap !== null && rightChild.priority < leftChild.priority)) //현재 엘리먼트보다 자식 노드 두개가 다 큰 경우
                {
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break; //더이상 스왑할 게 없으면 종료! 
            
            this.values[idx] = this.values[swap]; //스왑
            this.values[swap] = element;
            idx = swap;

        }

        
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);

//enqueue 순서와 상관없이 dequeue 하면서 순서 정렬됨.