class SingleLinkedList<T> {
    head : SLLNode<T> | null
    tail : SLLNode<T> | null
    length : number = 0;

    constructor() {
        this.head = null!;
        this.tail = null!;        
    }

    push(value : T) : SingleLinkedList<T> {
        const newNode = new SLLNode(value)
        
        if(this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else if (this.tail != null){
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++

        return this;
    }
}

class SLLNode<T> {
    value : T
    next : SLLNode<T> | null

    constructor(value : T) {
        this.value = value
        this.next = null
    }
}

export default SingleLinkedList