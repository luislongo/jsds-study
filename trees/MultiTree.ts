import Queue from "../queues-and-stacks/Queue"
import {Tree, TreeNode} from './Tree'

export class MultiTree<T extends MultiTreeNode<T>> extends Tree<T> {
    constructor(root : T | null) {
        super(root)   
    }

    bfs = () : T[] => {
        const cache = new Queue<T>();
        const array = new Array<T>();

        if(this.root) {
            cache.enqueue(this.root)
        }

        while(cache.length() > 0) {
            const parent = cache.dequeue()!;
            array.push(parent)

            parent.children().forEach((child) => {
                cache.enqueue(child)
            })
        }

        return array
    }

    dfs_pre = () : T[] => {
        const array = new Array<T>();

        if(this.root) {
            this.#dfs_pre(array, this.root)
        }

        return array
    }
    #dfs_pre = (array : T[], node : T) => {
        array.push(node)
        if(node.children().length > 0) {
            node.children().forEach((child) => {
                this.#dfs_pre(array, child)
            })
        }
    }   
    dfs_post = () : T[] => {
        const array = new Array<T>();

        if(this.root) {
            this.#dfs_post(array, this.root)
        }

        return array
    }
    #dfs_post = (array : T[], node : T) => {
        if(node.children().length > 0) {
            node.children().forEach((child) => {
                this.#dfs_post(array, child)
            })
        }
        array.push(node)
    }   
}

export class MultiTreeNode<T extends MultiTreeNode<T>> extends TreeNode<T> {
    constructor() {super()}

    children = () : T[] => {
        return this.childNodes
    }

    addChild = (child : T) => {
        this.childNodes.push(child)
    }

    addChildren = (children : T[]) => {
        children.forEach((child : T) => {
            this.addChild(child)
        })
    }

}