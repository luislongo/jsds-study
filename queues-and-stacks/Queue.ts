import SingleLinkedList from "../lists/SingleLinkedList";

class Queue<T> {
    nodes : SingleLinkedList<T>
    
    constructor() {
        this.nodes = new SingleLinkedList<T>()
    }

    enqueue(value : T) {
        this.nodes.push(value)
    }

    dequeue() : T | null {
        return this.nodes.shift()
    }

    length() : number {
        return this.nodes.length
    }
}

export default Queue