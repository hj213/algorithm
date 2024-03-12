//클래스로 구현

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
        this.length ++;
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
        this.length --;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        
        return current;
    }
}

let list = new SinglyLinkedList();

list.push('hello');
list.push('goodbye');
list.push('ok');

console.log(list.pop())