"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SingleLinkedList_1 = __importDefault(require("../lists/SingleLinkedList"));
class Stack {
    constructor() {
        this.nodes = new SingleLinkedList_1.default();
    }
    push(value) {
        this.nodes.unshift(value);
    }
    pop() {
        return this.nodes.shift();
    }
    head() {
        return this.nodes.head;
    }
}
exports.default = Stack;
