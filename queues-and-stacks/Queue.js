"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SingleLinkedList_1 = __importDefault(require("../lists/SingleLinkedList"));
class Queue {
    constructor() {
        this.nodes = new SingleLinkedList_1.default();
    }
    enqueue(value) {
        this.nodes.push(value);
    }
    dequeue() {
        return this.nodes.shift();
    }
    length() {
        return this.nodes.length;
    }
}
exports.default = Queue;
