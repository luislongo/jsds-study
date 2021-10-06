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

        return this
    }

    pop() : SingleLinkedList<T> {
        if(this.length == 1) {
            this.head = null
            this.tail = null

            this.length--
        }
        if(this.length > 1) {
            var newTail = this.head
            
            for(var i = 1; i < this.length-1; i++) {
                newTail = newTail!.next
            }
        
            newTail!.next = null
            this.tail = newTail

            this.length--
        }
        return this
    }
    toString() : String {
        var string = ''
        var node = this.head

        string += node!.value
        while(node!.next != null) {
            node = node!.next
            string += ' -> '  + node!.value
        }

        return string
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