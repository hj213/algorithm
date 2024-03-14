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
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(14);
tree.insert(11);
tree.insert(9);


//     10
//   5    14 
// 3  9  11