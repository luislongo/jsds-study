"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BinarySearchTree_instances, _BinarySearchTree_insert;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.BSTNode = void 0;
class BinarySearchTree {
    constructor(rule) {
        _BinarySearchTree_instances.add(this);
        this.root = null;
        this.rule = rule;
    }
    push(value) {
        if (this.root == null) {
            this.root = new BSTNode(value);
        }
        else {
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insert).call(this, this.root, value);
        }
    }
    find() {
    }
}
exports.BinarySearchTree = BinarySearchTree;
_BinarySearchTree_instances = new WeakSet(), _BinarySearchTree_insert = function _BinarySearchTree_insert(node, value) {
    if (this.rule(node.value, value) == value) {
        if (node.right) {
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insert).call(this, node.right, value);
        }
        else {
            node.right = new BSTNode(value);
        }
    }
    else {
        if (node.left) {
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insert).call(this, node.left, value);
        }
        else {
            node.left = new BSTNode(value);
        }
    }
};
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.BSTNode = BSTNode;
