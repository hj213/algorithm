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
    depthFirstRecursive(start){
        let result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(n => {
                if(!visited[n]) return dfs(n);
            });
        })(start);

        return result;
        
    }
    
    depthFirstIterative(start){
        let stack = [start];
        let result = [];
        let visited = {};
        
        visited[start] = true;
        while(stack.length){
            let currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(n => {
                if(!visited[n]){
                    visited[n] = true;
                    stack.push(n);
                }
            })
        }
        
        return result;
    }
    breadthFirst(start){
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;

        while(queue.length){
            let currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(n => {
                if(!visited[n]){
                    visited[n] = true;
                    queue.push(n);
                } 
            })
        }
        return result;
    }
}


let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdges("A","B");
g.addEdges("A","C");
g.addEdges("B","D");
g.addEdges("C","E");
g.addEdges("D","E");
g.addEdges("D","F");
g.addEdges("E","F");

