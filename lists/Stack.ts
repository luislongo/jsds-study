import SingleLinkedList from './SingleLinkedList';

export interface IStack<T> {
    // Last in, first out SLL
    length(): number; // O(1)
    push(value: T): void; // O(1)
    pop(): T | undefined; // O(1)
}

export default class Queue<T> implements IStack<T> {
    #sll: SingleLinkedList<T>;

    constructor() {
        this.#sll = new SingleLinkedList<T>();
    }

    length(): number {
        return this.#sll.length();
    }

    push(value: T): void {
        this.#sll.unshift(value);
    }

    pop(): T | undefined {
        return this.#sll.shift();
    }
}
