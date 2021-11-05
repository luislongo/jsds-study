"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _MultiTree_dfs_pre, _MultiTree_dfs_post;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTreeNode = exports.MultiTree = void 0;
const Queue_1 = __importDefault(require("../queues-and-stacks/Queue"));
const Tree_1 = require("./Tree");
class MultiTree extends Tree_1.Tree {
    constructor(root) {
        super(root);
        this.bfs = () => {
            const cache = new Queue_1.default();
            const array = new Array();
            if (this.root) {
                cache.enqueue(this.root);
            }
            while (cache.length() > 0) {
                const parent = cache.dequeue();
                array.push(parent);
                parent.children().forEach((child) => {
                    cache.enqueue(child);
                });
            }
            return array;
        };
        this.dfs_pre = () => {
            const array = new Array();
            if (this.root) {
                __classPrivateFieldGet(this, _MultiTree_dfs_pre, "f").call(this, array, this.root);
            }
            return array;
        };
        _MultiTree_dfs_pre.set(this, (array, node) => {
            array.push(node);
            if (node.children().length > 0) {
                node.children().forEach((child) => {
                    __classPrivateFieldGet(this, _MultiTree_dfs_pre, "f").call(this, array, child);
                });
            }
        });
        this.dfs_post = () => {
            const array = new Array();
            if (this.root) {
                __classPrivateFieldGet(this, _MultiTree_dfs_post, "f").call(this, array, this.root);
            }
            return array;
        };
        _MultiTree_dfs_post.set(this, (array, node) => {
            if (node.children().length > 0) {
                node.children().forEach((child) => {
                    __classPrivateFieldGet(this, _MultiTree_dfs_post, "f").call(this, array, child);
                });
            }
            array.push(node);
        });
    }
}
exports.MultiTree = MultiTree;
_MultiTree_dfs_pre = new WeakMap(), _MultiTree_dfs_post = new WeakMap();
class MultiTreeNode extends Tree_1.TreeNode {
    constructor() {
        super();
        this.children = () => {
            return this.childNodes;
        };
        this.addChild = (child) => {
            this.childNodes.push(child);
        };
        this.addChildren = (children) => {
            children.forEach((child) => {
                this.addChild(child);
            });
        };
    }
}
exports.MultiTreeNode = MultiTreeNode;
