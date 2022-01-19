export interface IDoublyLinkedList<T> {
    length(): number; // O(1)
    head(): T | undefined; // O(1)
    tail(): T | undefined; // O(1)
    push(value: T): void; // O(1)
    pop(): T | undefined; // O(1)
    unshift(value: T): void; // O(1)
    shift(): T | undefined; // O(1)
    reverse(): void; // O(n)
    get(pos: number): T | undefined; // O(n/2) -> O(n)
    set(pos: number, value: T): void; // O(n)
}

export default class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
    #head: Node<T> | undefined;
    #tail: Node<T> | undefined;
    #length: number;

    constructor() {
        this.#head = undefined;
        this.#tail = undefined;
        this.#length = 0;
    }

    length(): number {
        return this.#length;
    }

    head(): T | undefined {
        return this.#head ? this.#head.value : undefined;
    }

    tail(): T | undefined {
        return this.#tail ? this.#tail.value : undefined;
    }

    push(value: T): void {
        const node = new Node<T>(value);

        // Empty list
        if (this.#length == 0) {
            this.#head = node;
            this.#tail = node;
            this.#length += 1;
            return;
        }

        // General case
        this.#tail?.setNext(node);
        node.setPrev(this.#tail);
        this.#tail = node;
        this.#length += 1;
    }

    pop(): T | undefined {
        // Empty list
        if (this.#length == 0) {
            return undefined;
        }

        // One element list
        if (this.#length == 1) {
            const popped = this.#tail!;
            this.#head = undefined;
            this.#tail = undefined;
            this.#length -= 1;
            return popped.value;
        }

        //General case
        const popped = this.#tail!;
        const newTail = popped.prev()!;
        newTail.setNext(undefined);
        this.#tail = newTail;
        this.#length -= 1;
        return popped.value;
    }

    shift(): T | undefined {
        // Empty list
        if (this.#length == 0) {
            return undefined;
        }

        // One element list
        if (this.#length == 1) {
            const popped = this.#head!;
            this.#head = undefined;
            this.#tail = undefined;
            this.#length -= 1;
            return popped.value;
        }

        //General case
        const popped = this.#head!;
        const newHead = popped.next()!;
        newHead.setPrev(undefined);
        this.#head = newHead;
        this.#length -= 1;
        return popped.value;
    }

    unshift(value: T): void {
        const node = new Node<T>(value);

        // Empty list
        if (this.#length == 0) {
            this.#head = node;
            this.#tail = node;
            this.#length += 1;
            return;
        }

        // General case
        this.#head!.setPrev(node);
        node.setNext(this.#head);
        this.#head = node;
        this.#length += 1;
    }

    reverse(): void {
        // Empty and one element list
        if (this.#length <= 1) {
            return;
        }

        // General case
        let pivot = this.#head;
        while (pivot) {
            const next = pivot.next();
            const prev = pivot.prev();

            pivot.setPrev(next);
            pivot.setNext(prev);

            pivot = next;
        }

        const tempTail = this.#tail;
        this.#tail = this.#head;
        this.#head = tempTail;
    }

    public get(pos: number): T | undefined {
        const node = this.getNode(pos);
        return node ? node.value : undefined;
    }
    private getNode(pos: number): Node<T> | undefined {
        // Invalid index
        if (pos < 0 || pos >= this.#length) {
            return undefined;
        }

        // General case
        let pivot = this.#head!;
        while (pos) {
            pivot = pivot.next()!;
            pos--;
        }

        return pivot;
    }
    public set(pos: number, value: T): void {
        const node = this.getNode(pos);
        node && (node.value = value);
    }
}

class Node<T> {
    #next: Node<T> | undefined;
    #prev: Node<T> | undefined;
    value: T;

    constructor(value: T) {
        this.#next = undefined;
        this.#prev = undefined;
        this.value = value;
    }
    next(): Node<T> | undefined {
        return this.#next;
    }
    prev(): Node<T> | undefined {
        return this.#prev;
    }
    setNext(next: Node<T> | undefined): void {
        this.#next = next;
    }
    setPrev(prev: Node<T> | undefined): void {
        this.#prev = prev;
    }
    hasNext(): boolean {
        return this.#next != undefined;
    }
    hasPrev(): boolean {
        return this.#prev != undefined;
    }
}
