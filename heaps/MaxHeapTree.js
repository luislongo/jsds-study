"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MaxHeapTree_instances, _MaxHeapTree_bubbleUp, _MaxHeapTree_bubbleDown, _MaxHeapTree_swap, _MaxHeapTree_parentOf, _MaxHeapTree_leftChildOf, _MaxHeapTree_rightChildOf;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxHeapTree = void 0;
class MaxHeapTree {
    constructor() {
        _MaxHeapTree_instances.add(this);
        this.insert = (value) => {
            this.values.push(value);
            const valueId = this.values.length - 1;
            __classPrivateFieldGet(this, _MaxHeapTree_bubbleUp, "f").call(this, valueId);
        };
        _MaxHeapTree_bubbleUp.set(this, (id) => {
            if (id != 0) {
                const parentId = __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_parentOf).call(this, id);
                if (this.values[id] > this.values[parentId]) {
                    __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_swap).call(this, id, parentId);
                    __classPrivateFieldGet(this, _MaxHeapTree_bubbleUp, "f").call(this, parentId);
                }
            }
        });
        this.remove = () => {
            if (this.values.length > 0) {
                const value = this.values[0];
                const last = this.values.pop();
                if (this.values.length > 0) {
                    this.values[0] = last;
                    __classPrivateFieldGet(this, _MaxHeapTree_bubbleDown, "f").call(this, 0);
                }
                return value;
            }
            else {
                return null;
            }
        };
        _MaxHeapTree_bubbleDown.set(this, (id) => {
            const leftChildId = __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_leftChildOf).call(this, id);
            const rightChildId = __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_rightChildOf).call(this, id);
            if (rightChildId >= this.values.length) {
                // Only left child available
                if ((leftChildId < this.values.length) &&
                    (this.values[id] < this.values[leftChildId])) {
                    __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_swap).call(this, id, leftChildId);
                    __classPrivateFieldGet(this, _MaxHeapTree_bubbleDown, "f").call(this, leftChildId);
                }
            }
            else {
                // Both children are available
                if (this.values[id] < this.values[leftChildId]) {
                    if (this.values[id] < this.values[rightChildId]) {
                        if (this.values[leftChildId] > this.values[rightChildId]) {
                            __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_swap).call(this, id, leftChildId);
                            __classPrivateFieldGet(this, _MaxHeapTree_bubbleDown, "f").call(this, leftChildId);
                        }
                        else {
                            __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_swap).call(this, id, rightChildId);
                            __classPrivateFieldGet(this, _MaxHeapTree_bubbleDown, "f").call(this, rightChildId);
                        }
                    }
                    else {
                        __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_swap).call(this, id, leftChildId);
                        __classPrivateFieldGet(this, _MaxHeapTree_bubbleDown, "f").call(this, leftChildId);
                    }
                }
                else {
                    if (this.values[id] < this.values[rightChildId]) {
                        __classPrivateFieldGet(this, _MaxHeapTree_instances, "m", _MaxHeapTree_swap).call(this, id, rightChildId);
                        __classPrivateFieldGet(this, _MaxHeapTree_bubbleDown, "f").call(this, rightChildId);
                    }
                }
            }
        });
        this.values = new Array();
    }
}
exports.MaxHeapTree = MaxHeapTree;
_MaxHeapTree_bubbleUp = new WeakMap(), _MaxHeapTree_bubbleDown = new WeakMap(), _MaxHeapTree_instances = new WeakSet(), _MaxHeapTree_swap = function _MaxHeapTree_swap(aId, bId) {
    const tempAId = this.values[aId];
    this.values[aId] = this.values[bId];
    this.values[bId] = tempAId;
}, _MaxHeapTree_parentOf = function _MaxHeapTree_parentOf(id) {
    return Math.floor(id - 1 / 2);
}, _MaxHeapTree_leftChildOf = function _MaxHeapTree_leftChildOf(id) {
    return (2 * id + 1);
}, _MaxHeapTree_rightChildOf = function _MaxHeapTree_rightChildOf(id) {
    return (2 * id + 2);
};
