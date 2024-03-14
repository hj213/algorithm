//BST 기준으로 작성.

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        
        let current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val < current.val){
                if(!current.left){
                    current.left = newNode;
                    return this;
                } 
                current = current.left;
                    
            } else {
                if(!current.right){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
                    
            }
        }
        
    }
    find(val){
        if(!this.root) return false;

        let current = this.root;
        let found = false;

        while(current && !found){
            if(val < current.val){
                current = current.left
            } else if(val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    DFSPreOrder(){
        let data = [];
        function traverse(node) {
            data.push(node.val);
            if(node.left) traverse(node.left); 
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left); 
            if(node.right) traverse(node.right);
            data.push(node.val);
            
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left); 
            data.push(node.val);
            if(node.right) traverse(node.right);
            
        }
        traverse(this.root);
        return data;
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(14);
tree.insert(11);
tree.insert(9);
tree.insert(1);
tree.insert(4);



//     10
//   5    14 
// 3  9  11
//1 4

//bfs -> [10,5,14,3,9,11,1,4]
//DFSPreOrder -> [10,5,3,1,4,9,14,11]
//DFSPostOrder -> [1,4,3,9,5,11,14,10]
//DFSInOrder -> [1,3,4,5,9,10,11,14]

