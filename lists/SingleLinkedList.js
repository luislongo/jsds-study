"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SingleLinkedList {
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
        else {
            this.tail.next = newNode;
            this.tail = newNode;
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
        if (this.length > 1) {
            var newTail = this.head;
            while (newTail.next != this.tail) {
                newTail = newTail.next;
            }
            newTail.next = null;
            this.tail = newTail;
            this.length--;
        }
        if (node) {
            return node.value;
        }
        else {
            return null;
        }
    }
    shift() {
        const node = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }
        if (this.length > 1) {
            var oldHead = this.head;
            this.head = oldHead.next;
            oldHead.next = null;
            this.length--;
        }
        if (node) {
            return node.value;
        }
        else {
            return null;
        }
    }
    unshift(value) {
        const newNode = new SLLNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(pos) {
        if (pos >= 0 && pos < this.length) {
            var node = this.head;
            for (var i = 0; i < pos; i++) {
                node = node.next;
            }
            return node.value;
        }
        else {
            return null;
        }
    }
    set(pos, value) {
        if (pos >= 0 && pos < this.length) {
            var node = this.head;
            for (var i = 0; i < pos; i++) {
                node = node.next;
            }
            node.value = value;
        }
        else {
            return null;
        }
    }
    insert(pos, value) {
        if (pos == 0) {
            this.unshift(value);
        }
        else if (pos == this.length) {
            this.push(value);
        }
        else if ((pos < this.length) && (pos > 0)) {
            const newNode = new SLLNode(value);
            var pre = this.head;
            for (var i = 0; i < pos - 1; i++) {
                pre = pre.next;
            }
            var post = pre.next;
            pre.next = newNode;
            newNode.next = post;
            this.length++;
        }
    }
    toString() {
        var string = '';
        var node = this.head;
        string += node.value;
        while (node.next != null) {
            node = node.next;
            string += ' -> ' + node.value;
        }
        return string;
    }
}
class SLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.default = SingleLinkedList;
