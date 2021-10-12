class DoubleLinkedList<T> {
    head : DLLNode<T> | null
    tail : DLLNode<T> | null
    length : number

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value : T) : DoubleLinkedList<T> {
        var newNode = new DLLNode(value) 
        
        if(this.length == 0) {
            this.head = newNode
            this.tail = newNode 
        } else {
            this.tail!.next = newNode
            newNode.prev = this.tail!

            this.tail = newNode
        }

        this.length++
        return this
    }
    pop() : T | null {
        var node : DLLNode<T> | null = this.tail
        
        if(this.length == 1) {
            this.head = null
            this.tail = null

            this.length--
        } else if(this.length > 1) {
            this.tail = this.tail!.prev       
            this.length--
        }

        if(node) {
            return node.value
        } else {
            return null
        }
    }
    shift() : T | null {
        var node : DLLNode<T> | null = this.head
        
        if(this.length == 1) {
            this.head = null
            this.tail = null

            this.length--
        } else if(this.length > 1) {
            this.head = this.head!.next       
            this.length--
        }

        if(node) {
            return node.value
        } else {
            return null
        }
    }
    unshift(value : T) : DoubleLinkedList<T> {
        var newNode = new DLLNode(value) 
        
        if(this.length == 0) {
            this.head = newNode
            this.tail = newNode 
        } else {
            this.head!.prev = newNode
            newNode.next = this.head!

            this.head = newNode
        }

        this.length++
        return this
    }
    get(pos : number) : T | null {
        if(pos >= 0 && pos <this.length) {
            var node = this.getNode(pos)
            if(node) {return node!.value}
        }
        return null
    }
    set(pos : number, value : T) {
        if(pos >= 0 && pos <this.length) {
            var node = this.getNode(pos)
            node!.value = value
        }
    }
    insert(pos : number, value : T) {
        if(pos == 0) 
            {this.unshift(value)} else
        if(pos == this.length) 
            {this.push(value)} else 
        {
            var newNode = new DLLNode(value)

            var node = this.getNode(pos)
            var prev = node!.prev

            prev!.next = newNode
            node!.prev = newNode
            newNode.prev = prev
            newNode.next = node

            this.length++
        }       
    }
    remove(pos : number) {
        if(pos == 0) 
            {return this.shift()} else
        if(pos == this.length - 1) 
            {return this.pop()} else 
        if(pos > 0 && pos < this.length - 1) {
            var node = this.getNode(pos)
            var prev = node!.prev
            var next = node!.next

            prev!.next = next
            next!.prev = prev    
            
            return node!.value
        }
    }
    reverse() : DoubleLinkedList<T> {
        var node = this.head
        var revList = new DoubleLinkedList<T>()

        for(var i = 0; i < this.length; i++) {
            revList.unshift(node!.value)
            node = node!.next
        }

        return revList
    }
    getNode(pos : number) : DLLNode<T> | null {
        var node : DLLNode<T> | null = this.head;
        for(var i = 0; i < pos; i++) {
            node = node!.next
        }
        return node   
    }
    toString() : String {
        var string = ''
        var node = this.head

        string += node!.value
        while(node!.next != null) {
            node = node!.next
            string += ' <-> '  + node!.value
        }

        return string
    } 
}
class DLLNode<T> {
    value : T
    next : DLLNode<T> | null
    prev : DLLNode<T> | null

    constructor(value : T) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
export default DoubleLinkedList