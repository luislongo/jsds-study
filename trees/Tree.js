"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = exports.Tree = void 0;
const Queue_1 = __importDefault(require("../queues-and-stacks/Queue"));
class Tree {
    constructor(root) {
        this.bfs = () => {
            const cache = new Queue_1.default();
            const array = new Array();
            if (this.root) {
                cache.enqueue(this.root);
                array.push(this.root);
            }
        };
        if (root) {
            this.root = root;
        }
        else {
            this.root = null;
        }
    }
}
exports.Tree = Tree;
class TreeNode {
    constructor() {
        this.addChild = (child) => {
            this.children.push(child);
        };
        this.children = new Array();
    }
}
exports.TreeNode = TreeNode;
