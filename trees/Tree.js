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
    constructor() {
        this.childNodes = new Array();
    }
}
exports.TreeNode = TreeNode;
