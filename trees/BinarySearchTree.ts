import {Tree, TreeNode} from  './Tree'

export class BinarySearchTree<T extends BSTNode<T, U>, U> extends Tree<T> {
    rule : (a : U, b : U) => RuleResult

    constructor(rule : (a : U, b : U) => RuleResult, root : T) {
        super(root)
        this.rule = rule
    }

    insert = (node : T) : void => {
        if(this.root == null) {
            this.root = node
        } else {
            this.#insert(node, this.root)
        }
    }
    #insert = (node : T, parent : T) : void => {
        //Checks if inserted value goes left
        if(this.rule(node.key, parent.key) == RuleResult.LEFT) {
            if(parent.left()) {
                this.#insert(node, parent.left())
            } else {
                parent.setLeft(node)
            }
            return;
        }
        
        //Checks if inserted Svalue goes right
        if(this.rule(node.key, parent.key) == RuleResult.RIGHT) {
            if(parent.right()) {
                this.#insert(node, parent.right())
            } else {
                parent.setRight(node)
            }
            return;
        }

        //If value is the same, does nothing
    } 
    find = (key : U) : T | undefined => {
        if(this.root) {
            return this.#find(key, this.root)
        }
    }
    #find = (key : U, node : T) : T | undefined => {
        if(this.rule(key, node.key) == RuleResult.LEFT) {
            if(node.left()) {
                return this.#find(key, node.left())
            }
        }

        if(this.rule(key, node.key) == RuleResult.RIGHT) {
            if(node.right()) {
                return this.#find(key, node.right())
            }
        }
        
        if(this.rule(key, node.key) == RuleResult.EQUAL) {
            return node
        }
    }
}

export enum RuleResult {
    LEFT, RIGHT, EQUAL
}

export class BSTNode<T extends TreeNode<T>, U> extends TreeNode<T> {
    key : U

    constructor(key : U) {
        super()
        this.key = key
    }

    left = () : T => {return this.childNodes[0]}
    right = () : T => {return this.childNodes[1]}
    setLeft = (child : T) : void => {this.childNodes[0] = child}
    setRight = (child : T) : void => {this.childNodes[1] = child}
}
