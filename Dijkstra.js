// class PriorityQueue{ -> 오래 걸리니까 밑에 작성한 이진힙을 이용하는 게 훨씬 빠르다.
//     constructor(){
//         this.value = [];
//     }
//     enqueue(val, priority){
//         this.value.push({val, priority});
//         this.sort();
//     }
//     dequeue(){
//         return this.value.shift();
//     }
//     sort(){
//         this.value.sort((a,b)=> a.priority - b.priority);
//     }
// }

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdges(v1, v2, weight){
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
        
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {}; //시작점에서부터 각 노드까지 얼마나 걸리는가!
        const previous = {};
        let path = [];
        let smallest;

        //초기화
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0; //시작점만 0
                nodes.enqueue(vertex, 0);

            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }

        //방문할 게 있음 계속
        while(nodes.value.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){ //마지막!
                while(previous[smallest]){ //역순으로 추가해줌.
                    path.push(smallest);
                    smallest = previous[smallest]; //하나씩 거꾸로 타고 가는 중
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let n in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][n];
        
                    //이웃간의 새로운 최소값 계산
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]){
                        distances[nextNode.node] = candidate;
                        previous[nextNode.node] = smallest; //거쳐온 곳
                        nodes.enqueue(nextNode.node, candidate); //안에서 가중치 값으로 정렬됨
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
        
    }
}

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

let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdges("A", "B", 4);
g.addEdges("A", "C", 2);
g.addEdges("B", "E", 3);
g.addEdges("C", "D", 2);
g.addEdges("C", "F", 4);
g.addEdges("D", "E", 3);
g.addEdges("D", "F", 1);
g.addEdges("E", "F", 1);


g.Dijkstra("A","F");