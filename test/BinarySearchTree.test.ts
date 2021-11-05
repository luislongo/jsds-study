import {BinarySearchTree, BSTNode, RuleResult} from "../trees/BinarySearchTree"

test('Root should be null for empty tree', () => {
    const rule = (a : number, b : number) : RuleResult => {
        if(a  < b) return RuleResult.LEFT
        if(a == b) return RuleResult.EQUAL
        if(a  > b) return RuleResult.RIGHT
    }

    const tree = new BinarySearchTree(rule, null)
    expect(tree.root).toBe(null)
})
test('Root should be value for initialised tree', () => {
    const rule = (a, b) => {
        if(a  < b) return RuleResult.LEFT
        if(a == b) return RuleResult.EQUAL
        if(a  > b) return RuleResult.RIGHT
    }

    const root = new BSTNode(10);

    const tree = new BinarySearchTree(rule, root)
    expect(tree.root.key).toBe(10)
})
test('Insert should add children obeying the rule', () => {
    const rule = (a, b) => {
        if(a  < b) return RuleResult.LEFT
        if(a == b) return RuleResult.EQUAL
        if(a  > b) return RuleResult.RIGHT
    }

    const tree = new BinarySearchTree(rule, new BSTNode(10))
    tree.insert(new BSTNode(8))
    tree.insert(new BSTNode(9))
    tree.insert(new BSTNode(7))
    tree.insert(new BSTNode(12))
    tree.insert(new BSTNode(11))
    tree.insert(new BSTNode(13))

    expect(tree.root.key).toBe(10)
    expect(tree.root.left.key).toBe(8)
    expect(tree.root.left.left.key).toBe(7)
    expect(tree.root.left.right.key).toBe(9)
    expect(tree.root.right.key).toBe(12)
    expect(tree.root.right.left.key).toBe(11)
    expect(tree.root.right.right.key).toBe(13)
})
test('Insert should add children obeying the rule', () => {
    const rule = (a, b) => {
        if(a  > b) return RuleResult.LEFT
        if(a == b) return RuleResult.EQUAL
        if(a  < b) return RuleResult.RIGHT
    }

    const tree = new BinarySearchTree(rule, new BSTNode(10))
    tree.insert(new BSTNode(8))
    tree.insert(new BSTNode(9))
    tree.insert(new BSTNode(7))
    tree.insert(new BSTNode(12))
    tree.insert(new BSTNode(11))
    tree.insert(new BSTNode(13))

    expect(tree.root.key).toBe(10)
    expect(tree.root.left.key).toBe(12)
    expect(tree.root.left.left.key).toBe(13)
    expect(tree.root.left.right.key).toBe(11)
    expect(tree.root.right.key).toBe(8)
    expect(tree.root.right.left.key).toBe(9)
    expect(tree.root.right.right.key).toBe(7)
})
test('BST should work with extended node classes',() => {
    class ExtNode extends BSTNode {
        name

        constructor(key, name) {
            super(key);
            this.name = name
        }
    }

    const rule = (a, b) => {
        if(a  < b) return RuleResult.LEFT
        if(a == b) return RuleResult.EQUAL
        if(a  > b) return RuleResult.RIGHT
    }

    const tree = new BinarySearchTree(rule, new ExtNode(10, "Root"))
    tree.insert(new ExtNode(8, "Root - Left"))
    tree.insert(new ExtNode(9, "Root - Left - Right"))
    tree.insert(new ExtNode(7, "Root - Left - Left"))
    tree.insert(new ExtNode(12, "Root - Right"))
    tree.insert(new ExtNode(11, "Root - Right - Left"))
    tree.insert(new ExtNode(13, "Root - Right - Right" ))

    expect(tree.root.name).toBe("Root")
    expect(tree.root.left.name).toBe("Root - Left")
    expect(tree.root.left.right.name).toBe("Root - Left - Right")
    expect(tree.root.left.left.name).toBe("Root - Left - Left")
    expect(tree.root.right.name).toBe("Root - Right")
    expect(tree.root.right.left.name).toBe("Root - Right - Left")
    expect(tree.root.right.right.name).toBe("Root - Right - Right")
})
test('Test find node', () => {
    class ExtNode extends BSTNode {
        name

        constructor(key, name) {
            super(key);
            this.name = name
        }
    }

    const rule = (a, b) => {
        if(a  < b) return RuleResult.LEFT
        if(a == b) return RuleResult.EQUAL
        if(a  > b) return RuleResult.RIGHT
    }

    const tree = new BinarySearchTree(rule, new ExtNode(10, "Root"))
    tree.insert(new ExtNode(8, "Root - Left"))
    tree.insert(new ExtNode(9, "Root - Left - Right"))
    tree.insert(new ExtNode(7, "Root - Left - Left"))
    tree.insert(new ExtNode(12, "Root - Right"))
    tree.insert(new ExtNode(11, "Root - Right - Left"))
    tree.insert(new ExtNode(13, "Root - Right - Right" ))

    expect(tree.find(0)).toBe(null)
    expect(tree.find(10).name).toBe("Root")
    expect(tree.find(8).name).toBe("Root - Left")
    expect(tree.find(9).name).toBe("Root - Left - Right")
    expect(tree.find(7).name).toBe("Root - Left - Left")
    expect(tree.find(12).name).toBe("Root - Right")
    expect(tree.find(11).name).toBe("Root - Right - Left")
    expect(tree.find(13).name).toBe("Root - Right - Right")
})
