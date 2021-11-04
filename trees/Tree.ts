import Queue from "../queues-and-stacks/Queue"

export class Tree<T extends TreeNode<T>> {
    root : T | null

    constructor(root : T | null) {
        if(root) {
            this.root = root
        } else {
            this.root = null
        }
    }

    bfs = () => {
        const cache = new Queue<T>();
        const array = new Array<T>();

        if(this.root) {
            cache.enqueue(this.root)
            array.push(this.root)
        }

    }
}


export class TreeNode<T extends TreeNode<T>> {
    children : T[]

    constructor() {
        this.children = new Array<T>();
    }

    addChild = (child : T) => {
        this.children.push(child)
    }

}
