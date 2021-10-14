class BinarySearchTree<T> {
    root : BSTNode<T> | null 
    rule : (a : T, b : T) => T

    constructor(rule : (a : T, b : T) => T) {
        this.root = null
        this.rule = rule
    }
    push(value : T) {
        if(this.root == null) {
            this.root = new BSTNode(value)
        } else {
            this.#insert(this.root, value)
        }
    }
    #insert(node : BSTNode<T>, value : T) {
        if(this.rule(node.value, value) == node.value) {
            if(node.right) {
                this.#insert(node.right, value)
            } else {
                node.right = new BSTNode<T>(value)
            }
        } else {
            if(node.left) {
                this.#insert(node.left, value)
            } else {
                node.left = new BSTNode<T>(value)
            }       
        }
    }
    find() {
        
    }
}
class BSTNode<T> {
    value : T
    left : BSTNode<T> | null
    right : BSTNode<T> | null

    constructor(value : T) {
        this.value = value
        this.left = null
        this.right = null
    }
}
export {BSTNode, BinarySearchTree}