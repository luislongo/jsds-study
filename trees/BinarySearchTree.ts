export class BinarySearchTree<T, U extends BSTNode<U, T>> {
    root : U | null
    rule : (a : T, b : T) => RuleResult

    constructor(rule : (a : T, b : T) => RuleResult, root : U) {
        this.rule = rule

        if(root) {
            this.root = root
        } else {
            this.root = null
        }
    }

    insert = (node : U) : void => {
        if(!this.root) {
            this.root = node
        } else {
            this.#insert(node, this.root)
        }
    }
    #insert = (node : U, parent : U) : void => {
        //Checks if inserted value goes left
        if(this.rule(node.key, parent.key) == RuleResult.LEFT) {
            if(parent.left) {
                this.#insert(node, parent.left)
            } else {
                parent.left = node
            }
            return;
        }
        
        //Checks if inserted value goes right
        if(this.rule(node.key, parent.key) == RuleResult.RIGHT) {
            if(parent.right) {
                this.#insert(node, parent.right)
            } else {
                parent.right = node
            }
            return;
        }

        //If value is the same, does nothing
    } 
    find = (key : T) : U | null => {
        if(this.root) {
            return this.#find(key, this.root)
        } else {
            return null
        }
    }
    #find = (key : T, node : U) : U | null => {
        if(this.rule(key, node.key) == RuleResult.LEFT) {
            if(node.left) {
                return this.#find(key, node.left)
            }
        }

        if(this.rule(key, node.key) == RuleResult.RIGHT) {
            if(node.right) {
                return this.#find(key, node.right)
            }
        }
        
        if(this.rule(key, node.key) == RuleResult.EQUAL) {
            return node
        }

        return null
    }

}

export enum RuleResult {
    LEFT, RIGHT, EQUAL
}

export class BSTNode<U extends BSTNode<U, T>, T> {
    key : T
    left : U | null
    right : U | null

    constructor(key : T) {
        this.key = key
        this.left = null
        this.right = null
    }
}