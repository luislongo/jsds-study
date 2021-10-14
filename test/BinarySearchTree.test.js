const {BinarySearchTree} = require("../trees/BinarySearchTree");

test('Root should be null at startup', () => {
    var bst = new BinarySearchTree((a, b) => a);
    expect(bst.root).toBe(null);
});
test('First push should always be inserted at root', () => {
    var bst = new BinarySearchTree((a, b) => a);
    bst.push('Root');
    expect(bst.root.value).toBe('Root');
});
test('Left and right pushes should respect the rule', () => {
    var bst = new BinarySearchTree((a, b) => {
        return a >= b ? a : b;
    });
    bst.push(0);
    bst.push(-1);
    bst.push(1);
    expect(bst.root.value).toBe(0);
    expect(bst.root.left.value).toBe(-1);
    expect(bst.root.right.value).toBe(1);
});
test('Push should abide to the tree structure', () => {
    var bst = new BinarySearchTree((a, b) => {
        return a >= b ? a : b;
    });
    bst.push(0)
    bst.push(-2)
    bst.push(2)
    bst.push(1)
    bst.push(-1)
    bst.push(-3)
    bst.push(3)

    expect(bst.root.value).toBe(0)

    expect(bst.root.left.value).toBe(-2)
    expect(bst.root.left.left.value).toBe(-3)
    expect(bst.root.left.right.value).toBe(-1)

    expect(bst.root.right.value).toBe(2)
    expect(bst.root.right.left.value).toBe(1)
    expect(bst.root.right.right.value).toBe(3)
})
test('Push should abide to the tree structure', () => {
    var bst = new BinarySearchTree((a, b) => {
        return a <= b ? a : b;
    });
    bst.push(0)
    bst.push(-2)
    bst.push(2)
    bst.push(1)
    bst.push(-1)
    bst.push(-3)
    bst.push(3)

    expect(bst.root.value).toBe(0)

    expect(bst.root.left.value).toBe(2)
    expect(bst.root.left.left.value).toBe(3)
    expect(bst.root.left.right.value).toBe(1)
    expect(bst.root.right.value).toBe(-2)
    expect(bst.root.right.left.value).toBe(-1)
    expect(bst.root.right.right.value).toBe(-3)
})
test('Push should abide to the tree structure',() => {
    var bst = new BinarySearchTree((a, b) => {
        return a >= b ? a : b;
    });

    bst.push(10)    
    bst.push(5)    
    bst.push(13)    
    bst.push(11)    
    bst.push(2)    
    bst.push(15)    
    bst.push(7)
    
    expect(bst.root.value).toBe(10)

    expect(bst.root.left.value).toBe(5)
    expect(bst.root.left.left.value).toBe(2)
    expect(bst.root.left.right.value).toBe(7)

    expect(bst.root.right.value).toBe(13)
    expect(bst.root.right.left.value).toBe(11)
    expect(bst.root.right.right.value).toBe(15)
})