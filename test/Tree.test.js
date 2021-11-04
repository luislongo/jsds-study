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