class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdges(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        
    }
    removeEdges(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);

    }
    removeVertex(vertex){ //간선도 같이 삭제해줘야한다
        while(this.adjacencyList[vertex].length){
            const adjacencyList = this.adjacencyList[vertex].pop();
            this.removeEdges(adjacencyList, vertex);
        }
        delete this.adjacencyList[vertex];
    }
}


let g = new Graph();

g.addVertex("jeju");
g.addVertex("seoul");
g.addVertex("busan");
