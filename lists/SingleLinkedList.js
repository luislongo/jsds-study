"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        const newNode = new SLLNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else if (this.tail != null) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}
class SLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.default = SinglyLinkedList;
