"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Tree;
module.exports = { Tree, TreeNode };
