import {MultiTree, MultiTreeNode} from '../trees/MultiTree.js'

class MockNode extends MultiTreeNode<MockNode> {
    name : String

    constructor(name : String) {
        super()
        this.name = name
    }
}

const makeMockTree = () : MultiTree<MockNode> => {
    const root = new MockNode('Root');
    const childA = new MockNode('Child A');
    const childAA = new MockNode('Child AA');
    const childAB = new MockNode('Child AB');
    const childB = new MockNode('Child B');
    const childBA = new MockNode('Child BA');
    const childC = new MockNode('Child C');
    root.addChild(childA);
    root.addChild(childB);
    root.addChild(childC);
    childA.addChild(childAA);
    childA.addChild(childAB);
    childB.addChild(childBA);

    const mockTree = new MultiTree(root);
    return mockTree
}
test('Tree should maintain correct structure', () => {
    const tree = makeMockTree()

    expect(tree.root.name).toBe('Root')
    expect(tree.root.children()[0].name).toBe('Child A')
    expect(tree.root.children()[0].children()[0].name).toBe('Child AA')
    expect(tree.root.children()[0].children()[1].name).toBe('Child AB')
    expect(tree.root.children()[1].name).toBe('Child B')
    expect(tree.root.children()[1].children()[0].name).toBe('Child BA')
    expect(tree.root.children()[2].name).toBe('Child C')
    expect(tree.root.children()[2].children()[0]).toBe(undefined)
})
test('Breadth first search should list elements in the correct order', () => {
    const tree = makeMockTree();
    const bfsResult = tree.bfs();

    expect(bfsResult[0].name).toBe('Root')
    expect(bfsResult[1].name).toBe('Child A')
    expect(bfsResult[2].name).toBe('Child B')
    expect(bfsResult[3].name).toBe('Child C')
    expect(bfsResult[4].name).toBe('Child AA')
    expect(bfsResult[5].name).toBe('Child AB')
    expect(bfsResult[6].name).toBe('Child BA')
})
test('Depth first pre search should list elements in the correct order', () => {
    const tree = makeMockTree();    
    const dfsResult = tree.dfs_pre();

    expect(dfsResult[0].name).toBe('Root')
    expect(dfsResult[1].name).toBe('Child A')
    expect(dfsResult[2].name).toBe('Child AA')
    expect(dfsResult[3].name).toBe('Child AB')
    expect(dfsResult[4].name).toBe('Child B')
    expect(dfsResult[5].name).toBe('Child BA')
    expect(dfsResult[6].name).toBe('Child C')
})
test('Depth first post search should list elements in the correct order', () => {
    const tree = makeMockTree()
    const dfsResult = tree.dfs_post()

    expect(dfsResult[0].name).toBe('Child AA')
    expect(dfsResult[1].name).toBe('Child AB')
    expect(dfsResult[2].name).toBe('Child A')
    expect(dfsResult[3].name).toBe('Child BA')
    expect(dfsResult[4].name).toBe('Child B')
    expect(dfsResult[5].name).toBe('Child C')
    expect(dfsResult[6].name).toBe('Root')
})