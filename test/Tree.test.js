const {Tree, TreeNode} = require('../trees/Tree.js')

test('Empty tree should have null root', () => {
    const tree = new Tree();
    expect(tree.root).toBe(null)
})
test('Root should be able to access all children', () => {
    const root = new TreeNode();
    const childA = new TreeNode();
    const childB = new TreeNode();
    const childC = new TreeNode();

    root.addChild(childA);
    root.addChild(childB);
    root.addChild(childC);

    const tree = new Tree(root);
    expect(tree.root).toBe(root)
    expect(tree.root.children[0]).toBe(childA)
    expect(tree.root.children[1]).toBe(childB)
    expect(tree.root.children[2]).toBe(childC)
})
test('Tree should allow children of children', () => {
    const root = new TreeNode();

    const childA = new TreeNode();
    const childAA = new TreeNode();
    const childAB = new TreeNode();

    const childB = new TreeNode();
    const childBA = new TreeNode();

    const childC = new TreeNode();

    root.addChild(childA);
    root.addChild(childB);
    root.addChild(childC);

    childA.addChild(childAA);
    childA.addChild(childAB);

    childB.addChild(childBA);

    const tree = new Tree(root);
    expect(tree.root).toBe(root)
    expect(tree.root.children[0]).toBe(childA)
    expect(tree.root.children[0].children[0]).toBe(childAA)
    expect(tree.root.children[0].children[1]).toBe(childAB)
    expect(tree.root.children[1]).toBe(childB)
    expect(tree.root.children[1].children[0]).toBe(childBA)
    expect(tree.root.children[2]).toBe(childC)
    expect(tree.root.children[2].children[0]).toBe(undefined)
})
test('Tree should work with extended node classes', () => {
    class ExtNode extends TreeNode {
        name

        constructor(name) {
            super()
            this.name = name
        }
    }

    const root = new ExtNode('Root');

    const childA = new ExtNode('Child A');
    const childAA = new ExtNode('Child AA');
    const childAB = new ExtNode('Child AB');

    const childB = new ExtNode('Child B');
    const childBA = new ExtNode('Child BA');

    const childC = new ExtNode('Child C');

    root.addChild(childA);
    root.addChild(childB);
    root.addChild(childC);

    childA.addChild(childAA);
    childA.addChild(childAB);

    childB.addChild(childBA);

    const tree = new Tree(root);
    expect(tree.root.name).toBe('Root')
    expect(tree.root.children[0].name).toBe('Child A')
    expect(tree.root.children[0].children[0].name).toBe('Child AA')
    expect(tree.root.children[0].children[1].name).toBe('Child AB')
    expect(tree.root.children[1].name).toBe('Child B')
    expect(tree.root.children[1].children[0].name).toBe('Child BA')
    expect(tree.root.children[2].name).toBe('Child C')
})
test('Breadth first search should list elements in the correct order', () => {
    const root = new TreeNode();
    const childA = new TreeNode();
    const childAA = new TreeNode();
    const childAB = new TreeNode();
    const childB = new TreeNode();
    const childBA = new TreeNode();
    const childC = new TreeNode();
    root.addChild(childA);
    root.addChild(childB);
    root.addChild(childC);
    childA.addChild(childAA);
    childA.addChild(childAB);
    childB.addChild(childBA);

    const tree = new Tree(root);
    const bfsResult = tree.bfs();

    expect(bfsResult[0]).toBe(root)
    expect(bfsResult[1]).toBe(childA)
    expect(bfsResult[2]).toBe(childB)
    expect(bfsResult[3]).toBe(childC)
    expect(bfsResult[4]).toBe(childAA)
    expect(bfsResult[5]).toBe(childAB)
    expect(bfsResult[6]).toBe(childBA)
})
test('Depth first pre search should list elements in the correct order', () => {
    const root = new TreeNode();
    const childA = new TreeNode();
    const childAA = new TreeNode();
    const childAB = new TreeNode();
    const childB = new TreeNode();
    const childBA = new TreeNode();
    const childC = new TreeNode();
    root.addChild(childA);
    root.addChild(childB);
    root.addChild(childC);
    childA.addChild(childAA);
    childA.addChild(childAB);
    childB.addChild(childBA);

    const tree = new Tree(root);
    const dfsResult = tree.dfs_pre();

    expect(dfsResult[0]).toBe(root)
    expect(dfsResult[1]).toBe(childA)
    expect(dfsResult[2]).toBe(childAA)
    expect(dfsResult[3]).toBe(childAB)
    expect(dfsResult[4]).toBe(childB)
    expect(dfsResult[5]).toBe(childBA)
    expect(dfsResult[6]).toBe(childC)
})
test('Depth first post search should list elements in the correct order', () => {
    const root = new TreeNode();
    const childA = new TreeNode();
    const childAA = new TreeNode();
    const childAB = new TreeNode();
    const childB = new TreeNode();
    const childBA = new TreeNode();
    const childC = new TreeNode();
    root.addChild(childA);
    root.addChild(childB);
    root.addChild(childC);
    childA.addChild(childAA);
    childA.addChild(childAB);
    childB.addChild(childBA);

    const tree = new Tree(root);
    const dfsResult = tree.dfs_post();

    expect(dfsResult[0]).toBe(childAA)
    expect(dfsResult[1]).toBe(childAB)
    expect(dfsResult[2]).toBe(childA)
    expect(dfsResult[3]).toBe(childBA)
    expect(dfsResult[4]).toBe(childB)
    expect(dfsResult[5]).toBe(childC)
    expect(dfsResult[6]).toBe(root)
})