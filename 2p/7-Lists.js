class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class List{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    Head(node){
        if(this.head != null){
            node.next = this.head
            this.head = node;
        }
        else{
            this.head = node;
            if(this.tail == null) this.tail = node;
        } 
        this.size ++;
    }

    Tail(node){
        if(this.tail != null){
            (this.tail).next = node;
            this.tail = node;
        }
        else{
            this.tail = node;
            if(this.head == null) this.tail = node;
        } 
        this.size ++;
    }

    delHead(){
        let temp = this.head.next;
        this.head.next = null
        this.head = temp;
        this.size --;
    }

    delTail(){
        let temp = this.head;
        for(let c = this.size ; c > 2 ;c--){
            temp = (temp).next;
            
        }
        this.tail = temp;
        this.size --;
    }

    size(){
        return this.size;
    }

    Strin(x){
        if(x.next != null) return (x.data + ", " + this.Strin(x.next));
        else return x.data
        
    }

    toString(){
        return (this.head.data + ", " + this.Strin(this.head.next));
    }
}

(function uselist(){
    let node1 = new node("node1");
    let node2 = new node("node2");
    let node3 = new node("node3");
    let node4 = new node("node4");
    let node5 = new node("node5");
    let node6 = new node("node6");
    let lisME = new List;

    lisME.Head(node5)
    lisME.Head(node4)
    lisME.Head(node3)
    lisME.Head(node2)
    lisME.Head(node1)
    lisME.Tail(node6)   
})()
