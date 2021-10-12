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
        } else {
            this.tail!.next = newNode
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop() : T | null {
        var node : SLLNode<T> | null = this.tail
        
        if(this.length == 1) {
            this.head = null
            this.tail = null

            this.length--
        }

        if(this.length > 1) {
            var newTail = this.head
            
            while (newTail!.next != this.tail) {
                newTail = newTail!.next
            }
        
            newTail!.next = null
            this.tail = newTail

            this.length--
        }

        if(node) {
            return node.value
        } else {
            return null
        }
    }
    shift() : T | null {
        const node : SLLNode<T> | null = this.head

        if(this.length == 1) {
            this.head = null
            this.tail = null
            this.length--
        }
        if(this.length > 1) {
            var oldHead : SLLNode<T> = this.head!
            this.head = oldHead.next
            oldHead.next = null

            this.length--
        }

        if(node) {
            return node.value
        } else {
            return null
        }
    }
    unshift(value : T) : SingleLinkedList<T> {
        const newNode = new SLLNode<T>(value)

        if(this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
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
    set(pos: number, value : T) {
        if(pos >= 0 && pos <this.length) {
            var node = this.getNode(pos)
            node!.value = value
        } else {
            return null
        }
    }
    insert(pos : number, value : T) {
        if(pos == 0) {this.unshift(value)} else 
        if(pos == this.length) {this.push(value)} else 
        if((pos < this.length) && (pos > 0)) {
            const newNode = new SLLNode(value)

            var pre = this.getNode(pos - 1)
            var post = pre!.next

            pre!.next = newNode
            newNode.next = post

            this.length++
        }
    }
    remove(pos : number) : T | null {
        if(pos == 0) {return this.shift()} else 
        if(pos == this.length - 1) {return this.pop()} else 
        if((pos < this.length - 1) && (pos > 0)) {

            var pre = this.getNode(pos-1)
            var node = pre!.next
            var post = node!.next

            pre!.next = post
            this.length--

            return node!.value
        } else {
            return null
        }
    } 
    reverse() : SingleLinkedList<T> {
        var reverse = new SingleLinkedList<T>()
        if(this.length >= 1) {
            var node = this.head
            for (var i = 0; i < this.length; i++) {
                reverse.unshift(node!.value)
                node = node!.next
            }
        }
        return reverse
    }
    getNode(pos : number) : SLLNode<T> | null {
        if(pos >= 0 && pos <this.length) {
            var node : SLLNode<T> | null = this.head;
            for(var i = 0; i < pos; i++) {
                node = node!.next
            }
            return node
        } 
        return null
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