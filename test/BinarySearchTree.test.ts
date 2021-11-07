import {BinarySearchTree, BSTNode, RuleResult} from "../trees/BinarySearchTree"

class MockNode extends BSTNode<MockNode, number> {
    name : String 

    constructor(key : number, name : String) {
        super(key)
        this.name = name
    }
}

class MockBST extends BinarySearchTree<MockNode, number> {
    constructor(rule : (a : number, b : number) => RuleResult, root : MockNode) {
        super(rule, root)
    }
}

const decrescent = (a : number, b : number) : RuleResult => {
    if(a  > b) return RuleResult.LEFT
    if(a == b) return RuleResult.EQUAL
    if(a  < b) return RuleResult.RIGHT
}

const crescent = (a : number, b : number) : RuleResult => {
    if(a  < b) return RuleResult.LEFT
    if(a == b) return RuleResult.EQUAL
    if(a  > b) return RuleResult.RIGHT
}

test('Root should be null for empty tree', () => {
    const tree = new BinarySearchTree(crescent, null)
    expect(tree.root).toBe(null)
})
test('Root should be value for initialised tree', () => {
    const root = new MockNode(10, 'Root')

    const tree = new BinarySearchTree(crescent, root)
    expect(tree.root.key).toBe(10)
    expect(tree.root.name).toBe('Root')
})
test('Insert should add children obeying the rule', () => {
    const tree = new MockBST(crescent, new MockNode(10, 'Root'))
    tree.insert(new MockNode(8, 'L'))
    tree.insert(new MockNode(9, 'LR'))
    tree.insert(new MockNode(7, 'LL'))
    tree.insert(new MockNode(12, 'R'))
    tree.insert(new MockNode(11, 'RL'))
    tree.insert(new MockNode(13, 'RR'))

    expect(tree.root.name).toBe('Root')
    expect(tree.root.left().name).toBe('L')
    expect(tree.root.left().left().name).toBe('LL')
    expect(tree.root.left().right().name).toBe('LR')
    expect(tree.root.right().name).toBe('R')
    expect(tree.root.right().left().name).toBe('RL')
    expect(tree.root.right().right().name).toBe('RR')
})
test('Insert should add children obeying the rule', () => {
    const tree = new MockBST(decrescent, new MockNode(10, 'Root'))
    tree.insert(new MockNode(8,  'R' ))
    tree.insert(new MockNode(9,  'RL'))
    tree.insert(new MockNode(7,  'RR'))
    tree.insert(new MockNode(12, 'L' ))
    tree.insert(new MockNode(11, 'LR'))
    tree.insert(new MockNode(13, 'LL'))

    expect(tree.root.name).toBe('Root')
    expect(tree.root.left().name).toBe('L')
    expect(tree.root.left().left().name).toBe('LL')
    expect(tree.root.left().right().name).toBe('LR')
    expect(tree.root.right().name).toBe('R')
    expect(tree.root.right().left().name).toBe('RL')
    expect(tree.root.right().right().name).toBe('RR')
})
test('Test find node', () => {
    const tree = new MockBST(crescent, new MockNode(10, 'Root'))
    tree.insert(new MockNode(8, 'L'))
    tree.insert(new MockNode(9, 'LR'))
    tree.insert(new MockNode(7, 'LL'))
    tree.insert(new MockNode(12, 'R'))
    tree.insert(new MockNode(11, 'RL'))
    tree.insert(new MockNode(13, 'RR'))

    expect(tree.find(0)).toBe(undefined)
    expect(tree.find(10).name).toBe('Root')
    expect(tree.find(8).name).toBe('L')
    expect(tree.find(9).name).toBe('LR')
    expect(tree.find(7).name).toBe('LL')
    expect(tree.find(12).name).toBe('R')
    expect(tree.find(11).name).toBe('RL')
    expect(tree.find(13).name).toBe('RR')
})
