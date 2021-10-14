"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BinarySearchTree_instances, _BinarySearchTree_insert, _BinarySearchTree_find;
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
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insert).call(this, value, this.root);
        }
    }
    find(value) {
        if (this.root) {
            return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_find).call(this, value, this.root);
        }
        else {
            return null;
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
_BinarySearchTree_instances = new WeakSet(), _BinarySearchTree_insert = function _BinarySearchTree_insert(value, node) {
    if (this.rule(value, node.value) == -1) {
        if (node.left) {
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insert).call(this, value, node.left);
        }
        else {
            node.left = new BSTNode(value);
        }
    }
    if (this.rule(value, node.value) == 1) {
        if (node.right) {
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insert).call(this, value, node.right);
        }
        else {
            node.right = new BSTNode(value);
        }
    }
}, _BinarySearchTree_find = function _BinarySearchTree_find(value, node) {
    if (this.rule(value, node.value) == 0) {
        return node;
    }
    if (this.rule(value, node.value) == -1) {
        if (node.left) {
            return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_find).call(this, value, node.left);
        }
    }
    if (this.rule(value, node.value) == 1) {
        if (node.right) {
            return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_find).call(this, value, node.right);
        }
    }
    return null;
};
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.BSTNode = BSTNode;
