class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; //현재 tail의 next를 새로운 노드로 변경해주고 -> 바뀐 이후의 노드가 다음 노드를 가리키는 셈. 
            this.tail = newNode; //tail 자체를 새로운 노드의 값으로 바꿔주고.
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead  = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
        
        return currentHead;
    }
    unShift(val){ //새로운 노드를 맨 앞에 추가하기.
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){ //index 위치에 val 값 수정
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === this.length) return !!this.push(val); //return true
        if(index === 0) return !!unShift(val);
        
        let newNode = new node(val);
        let pre = this.get(index-1);
        let temp = pre.next;

        pre.next = newNode;
        newNode.next = temp;
        
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();

        let prev = this.get(index-1);
        let removed = prev.next;
        
        prev.next = removed.next;

        this.length--;
        return removed;
        
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            
        }
        return this;
        
    }
}

let list = new SinglyLinkedList();

list.push('hello');
list.push('goodbye');
list.push('ok');
