class SinglyLinkedList<T> {
    head : SLLNode<T> | null
    tail : SLLNode<T> | null

    constructor() {
        this.head = null!;
        this.tail = null!;        
    }

    push(value : T) : void {
        const newNode = new SLLNode(value)

        if(this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else if (this.tail != null){
            this.tail.next = newNode
            this.tail = newNode
        }
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

export default SinglyLinkedList