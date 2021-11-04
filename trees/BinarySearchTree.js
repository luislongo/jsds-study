"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BinarySearchTree_insert, _BinarySearchTree_find;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BSTNode = exports.RuleResult = exports.BinarySearchTree = void 0;
class BinarySearchTree {
    constructor(rule, root) {
        this.insert = (node) => {
            if (!this.root) {
                this.root = node;
            }
            else {
                __classPrivateFieldGet(this, _BinarySearchTree_insert, "f").call(this, node, this.root);
            }
        };
        _BinarySearchTree_insert.set(this, (node, parent) => {
            //Checks if inserted value goes left
            if (this.rule(node.key, parent.key) == RuleResult.LEFT) {
                if (parent.left) {
                    __classPrivateFieldGet(this, _BinarySearchTree_insert, "f").call(this, node, parent.left);
                }
                else {
                    parent.left = node;
                }
                return;
            }
            //Checks if inserted value goes right
            if (this.rule(node.key, parent.key) == RuleResult.RIGHT) {
                if (parent.right) {
                    __classPrivateFieldGet(this, _BinarySearchTree_insert, "f").call(this, node, parent.right);
                }
                else {
                    parent.right = node;
                }
                return;
            }
            //If value is the same, does nothing
        });
        this.find = (key) => {
            if (this.root) {
                return __classPrivateFieldGet(this, _BinarySearchTree_find, "f").call(this, key, this.root);
            }
            else {
                return null;
            }
        };
        _BinarySearchTree_find.set(this, (key, node) => {
            if (this.rule(key, node.key) == RuleResult.LEFT) {
                if (node.left) {
                    return __classPrivateFieldGet(this, _BinarySearchTree_find, "f").call(this, key, node.left);
                }
            }
            if (this.rule(key, node.key) == RuleResult.RIGHT) {
                if (node.right) {
                    return __classPrivateFieldGet(this, _BinarySearchTree_find, "f").call(this, key, node.right);
                }
            }
            if (this.rule(key, node.key) == RuleResult.EQUAL) {
                return node;
            }
            return null;
        });
        this.rule = rule;
        if (root) {
            this.root = root;
        }
        else {
            this.root = null;
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
_BinarySearchTree_insert = new WeakMap(), _BinarySearchTree_find = new WeakMap();
var RuleResult;
(function (RuleResult) {
    RuleResult[RuleResult["LEFT"] = 0] = "LEFT";
    RuleResult[RuleResult["RIGHT"] = 1] = "RIGHT";
    RuleResult[RuleResult["EQUAL"] = 2] = "EQUAL";
})(RuleResult = exports.RuleResult || (exports.RuleResult = {}));
class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
exports.BSTNode = BSTNode;
