export class Tree<T extends TreeNode<T>> {
    root : T | null

    constructor(root : T | null) {
        if(root) {
            this.root = root
        } else {
            this.root = null
        }
    }
}

export class TreeNode<T extends TreeNode<T>> {
    protected childNodes : T[]

    constructor() {
        this.childNodes = new Array<T>();
    }
}