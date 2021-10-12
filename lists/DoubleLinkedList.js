"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        var newNode = new DLLNode(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
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
        else if (this.length > 1) {
            this.tail = this.tail.prev;
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
            return node.value;
        }
        else {
            return null;
        }
    }
    unshift(value) {
        var newNode = new DLLNode(value);
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
        if (pos >= 0 && pos < this.length) {
            var node = this.getNode(pos);
            if (node) {
                return node.value;
            }
        }
        return null;
    }
    set(pos, value) {
        if (pos >= 0 && pos < this.length) {
            var node = this.getNode(pos);
            node.value = value;
        }
    }
    insert(pos, value) {
        if (pos == 0) {
            this.unshift(value);
        }
        else if (pos == this.length) {
            this.push(value);
        }
        else {
            var newNode = new DLLNode(value);
            var node = this.getNode(pos);
            var prev = node.prev;
            prev.next = newNode;
            node.prev = newNode;
            newNode.prev = prev;
            newNode.next = node;
            this.length++;
        }
    }
    remove(pos) {
        if (pos == 0) {
            return this.shift();
        }
        else if (pos == this.length - 1) {
            return this.pop();
        }
        else if (pos > 0 && pos < this.length - 1) {
            var node = this.getNode(pos);
            var prev = node.prev;
            var next = node.next;
            prev.next = next;
            next.prev = prev;
            return node.value;
        }
    }
    reverse() {
        var node = this.head;
        var revList = new DoubleLinkedList();
        for (var i = 0; i < this.length; i++) {
            revList.unshift(node.value);
            node = node.next;
        }
        return revList;
    }
    getNode(pos) {
        var node = this.head;
        for (var i = 0; i < pos; i++) {
            node = node.next;
        }
        return node;
    }
    toString() {
        var string = '';
        var node = this.head;
        string += node.value;
        while (node.next != null) {
            node = node.next;
            string += ' <-> ' + node.value;
        }
        return string;
    }
}
class DLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
exports.default = DoubleLinkedList;
