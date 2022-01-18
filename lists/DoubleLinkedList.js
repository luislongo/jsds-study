"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DLLNode = exports.DoubleLinkedList = void 0;
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(node) {
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        var node = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }
        else if (this.length > 1) {
            this.tail = this.tail.prev;
            this.length--;
        }
        if (node) {
            return node;
        }
        else {
            return null;
        }
    }
    shift() {
        var node = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }
        else if (this.length > 1) {
            this.head = this.head.next;
            this.length--;
        }
        if (node) {
            return node;
        }
        else {
            return null;
        }
    }
    unshift(newNode) {
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(pos) {
        if (pos < 0 || pos >= this.length) {
            throw new Error(`Invalid index ${pos}. Index should be in range [0, ${this.length - 1}]`);
        }
        var node = this.head;
        for (var i = 0; i < pos; i++) {
            node = node.next;
        }
        return node;
    }
    set(pos, node) {
        if (pos < 0 || pos >= this.length) {
            throw new Error(`Invalid index ${pos}. Index should be in range [0, ${this.length - 1}]`);
        }
        // Copy current node links
        let curNode = this.get(pos);
        node.prev = curNode.prev;
        node.next = curNode.next;
        // Update list references
        (node.prev) && (node.prev.next = node);
        (node.next) && (node.next.prev = node);
        (pos == 0) && (this.head = node);
        (pos == this.length - 1) && (this.tail = node);
        // Clean old node
        curNode.prev = null;
        curNode.next = null;
    }
    insert(pos, node) {
        if (pos == 0) {
            this.unshift(node);
            return;
        }
        if (pos == this.length) {
            this.push(node);
            return;
        }
        let nodeBefore = this.get(pos - 1);
        let nodeAfter = nodeBefore.next;
        node.prev = nodeBefore;
        node.next = nodeAfter;
        nodeBefore.next = node;
        nodeAfter.prev = node;
        this.length++;
    }
    remove(pos) {
        if (pos == 0)
            return this.shift();
        if (pos == this.length - 1)
            return this.pop();
        var node = this.get(pos);
        var prev = node.prev;
        var next = node.next;
        prev.next = next;
        next.prev = prev;
        return node;
    }
    reverse() {
        if (this.length == 0)
            return new DoubleLinkedList();
        let pivot = this.head;
        for (let i = 0; i < this.length; i++) {
            const oldPrev = pivot.prev;
            const oldNext = pivot.next;
            pivot.next = oldPrev;
            pivot.prev = oldNext;
            pivot = oldNext;
        }
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;
    }
}
exports.DoubleLinkedList = DoubleLinkedList;
class DLLNode {
    constructor() {
        this.next = null;
        this.prev = null;
    }
}
exports.DLLNode = DLLNode;
