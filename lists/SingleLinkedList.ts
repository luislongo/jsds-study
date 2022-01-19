export interface ISingleLinkedList<T> {
    length(): number; // O(1)
    head(): T | undefined; // O(1)
    tail(): T | undefined; // O(n)
    push(value: T): void; // O(n)
    pop(): T | undefined; // O(n)
    shift(): T | undefined; // O(1)
    unshift(value: T): void; // O(1)
    reverse(): void; // O(n)
}

export default class SingleLinkedList<T> implements ISingleLinkedList<T> {
    #head: Node<T> | undefined;
    #length: number;

    constructor() {
        this.#head = undefined;
        this.#length = 0;
    }

    length(): number {
        return this.#length;
    }

    head(): T | undefined {
        return this.#head ? this.#head.value : undefined;
    }

    tail(): T | undefined {
        // Empty list
        if (this.#length == 0) return undefined;

        // General case
        let pivot = this.#head!;
        while (pivot?.hasNext()) {
            pivot = pivot.next()!;
        }

        return pivot.value;
    }

    push(value: T): void {
        const node = new Node(value);

        // Empty list
        if (this.#length == 0) {
            this.#length += 1;
            this.#head = node;
            return;
        }

        // General case
        let pivot = this.#head!;
        while (pivot.hasNext()) {
            pivot = pivot.next()!;
        }
        this.#length += 1;
        pivot.setNext(node);
    }

    pop(): T | undefined {
        // Empty list
        if (this.#length == 0) {
            return undefined;
        }

        this.#length -= 1;
        // Single node list
        let pivot = this.#head!;
        if (!pivot.hasNext()) {
            this.#head = undefined;
            return pivot.value;
        }

        // General case
        while (pivot.next()!.hasNext()) {
            pivot = pivot.next()!;
        }
        const node = pivot.next()!;
        pivot.setNext(undefined);
        return node.value;
    }

    shift(): T | undefined {
        // Empty list
        if (this.#length == 0) {
            return undefined;
        }

        // General case
        this.#length -= 1;
        let pivot = this.#head!;
        this.#head = pivot.next();
        return pivot.value;
    }

    unshift(value: T): void {
        const node = new Node(value);

        // Empty list
        if (this.#length == 0) {
            this.#length += 1;
            this.#head = node;
            return;
        }

        // General case
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
        let before = undefined;
        while (pivot) {
            const next = pivot.next();

            pivot.setNext(before);
            before = pivot;
            pivot = next;
        }
        this.#head = before;
    }
}

class Node<T> {
    #next: Node<T> | undefined;
    value: T;

    constructor(value: T) {
        this.#next = undefined;
        this.value = value;
    }
    next(): Node<T> | undefined {
        return this.#next;
    }
    setNext(next: Node<T> | undefined): void {
        this.#next = next;
    }
    hasNext(): boolean {
        return this.#next != undefined;
    }
}
