class BinarySearchTree<T> {
    root : BSTNode<T> | null 
    rule : (a : T, b : T) => number

    constructor(rule : (a : T, b : T) => number) {
        this.root = null
        this.rule = rule
    }
    push(value : T) {
        if(this.root == null) {
            this.root = new BSTNode(value)
        } else {
            this.#insert(value, this.root)
        }
    }
    #insert(value : T, node : BSTNode<T>) {
        if(this.rule(value, node.value) == -1) {
            if(node.left) {
                this.#insert(value, node.left)
            } else {
                node.left = new BSTNode<T>(value)
            }
        }
        if(this.rule(value, node.value) == 1) {
            if(node.right) {
                this.#insert(value, node.right)
            } else {
                node.right = new BSTNode<T>(value)
            }
        }
    }
    find(value: T) : BSTNode<T> | null {
        if(this.root) {
            return this.#find(value, this.root)
        } else {
            return null
        }
    }
    #find(value : T, node : BSTNode<T>) : BSTNode<T> | null {
        if(this.rule(value, node.value) == 0) {
            return node
        }
    
        if(this.rule(value, node.value) == -1) {
            if(node.left) {
                return this.#find(value, node.left)
            }
        }
    
        if(this.rule(value, node.value) == 1) {
            if(node.right) {
                return this.#find(value, node.right)
            }
        }

        return null
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