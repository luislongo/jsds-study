class Tree<T> {
    root : TreeNode<T> | null

    constructor(root : TreeNode<T> | null) {
        if(root) {this.root = root} else {
            this.root = null
        }
    }
}
class TreeNode<T> {
    value : T
    children : TreeNode<T>[]

    constructor(value : T) {
        this.value = value
        this.children = []
    }
    addChild(child : TreeNode<T>) {
        this.children.push(child)
    }
    removeChild(child : TreeNode<T>) {
        this.children = this.children.filter((node) => {
            return(child != node)
        })
    }
}

export default Tree
module.exports = {Tree, TreeNode}
