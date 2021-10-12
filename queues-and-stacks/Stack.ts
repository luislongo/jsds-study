import SingleLinkedList from "../lists/SingleLinkedList";

class Stack<T> {
    nodes : SingleLinkedList<T> 

    constructor() {
        this.nodes = new SingleLinkedList<T>()
    }

    push(value : T) {
        this.nodes.unshift(value)
    }

    pop() : T | null {
        return this.nodes.shift()
    }
}

export default Stack