"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = exports.Tree = void 0;
class Tree {
    constructor(root) {
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
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    removeChild(child) {
        this.children = this.children.filter((node) => {
            return (child != node);
        });
    }
}
exports.TreeNode = TreeNode;
