import DoublyLinkedList from '../lists/DoublyLinkedList';

export default class Queue<T> implements IQueue<T> {
    dll: DoublyLinkedList<T>;

    constructor() {
        this.dll = new DoublyLinkedList<T>();
    }

    length(): number {
        return this.dll.length();
    }

    enqueue(value: T): void {
        this.dll.push(value);
    }

    dequeue(): T | undefined {
        return this.dll.shift();
    }
}

export interface IQueue<T> {
    length(): number; // O(1)
    enqueue(value: T): void; // O(1)
    dequeue(): T | undefined; // O(1)
}
