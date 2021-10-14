const {BinarySearchTree} = require("../trees/BinarySearchTree");

test('Root should be null at startup', () => {
    var bst = new BinarySearchTree((a, b) => -1);
    expect(bst.root).toBe(null);
});
test('First push should always be inserted at root', () => {
    var bst = new BinarySearchTree((a, b) => -1);
    bst.push('Root');
    expect(bst.root.value).toBe('Root');
});
test('Left and right pushes should respect the rule', () => {
    var bst = new BinarySearchTree((a, b) => {
        return a > b ? 1 : -1;
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
        return a > b ? 1 : -1;
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
        return a < b ? 1 : -1;
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
        return a > b ? 1 : -1;
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
test('Find should return null in an empty tree structure',() => {
    var bst = new BinarySearchTree((a, b) => {
        return a > b ? 1 : -1;
    });

    expect(bst.find(3)).toBe(null)
})
test('Find should be able to find every node in the tree',() => {
    var bst = new BinarySearchTree((a, b) => {
        if(a == b) return 0
        return a > b ? 1 : -1;
    });

    bst.push(10)    
    bst.push(5)    
    bst.push(13)    
    bst.push(11)    
    bst.push(2)    
    bst.push(15)    
    bst.push(7)

    expect(bst.find(10).value).toBe(10)
    expect(bst.find(5).value).toBe(5)
    expect(bst.find(13).value).toBe(13)
    expect(bst.find(11).value).toBe(11)
    expect(bst.find(2).value).toBe(2)
    expect(bst.find(15).value).toBe(15)
    expect(bst.find(7).value).toBe(7)
})
test('Find should be able to find every node in the tree',() => {
    var bst = new BinarySearchTree((a, b) => {
        if(a == b) return 0
        return a > b ? 1 : -1;
    });

    bst.push(10)    
    bst.push(5)    
    bst.push(13)    
    bst.push(11)    
    bst.push(2)    
    bst.push(15)    
    bst.push(7)

    expect(bst.find(10).value).toBe(10)
    expect(bst.find(5).value).toBe(5)
    expect(bst.find(13).value).toBe(13)
    expect(bst.find(11).value).toBe(11)
    expect(bst.find(2).value).toBe(2)
    expect(bst.find(15).value).toBe(15)
    expect(bst.find(7).value).toBe(7)
})
test('Find should return null when the value cannot be found',() => {
    var bst = new BinarySearchTree((a, b) => {
        if(a == b) return 0
        return a > b ? 1 : -1;
    });

    bst.push(10)    
    bst.push(5)    
    bst.push(13)    
    bst.push(11)    
    bst.push(2)    
    bst.push(15)    
    bst.push(7)

    expect(bst.find(0)).toBe(null)
    expect(bst.find(1)).toBe(null)
    expect(bst.find(3)).toBe(null)
})
test('Find should return nodes so that left and right can be accessible',() => {
    var bst = new BinarySearchTree((a, b) => {
        if(a == b) return 0
        return a > b ? 1 : -1;
    });

    bst.push(10)    
    bst.push(5)    
    bst.push(13)    
    bst.push(11)    
    bst.push(2)    
    bst.push(15)    
    bst.push(7)

    var node13 = bst.find(13)
    var node5 = bst.find(5)

    expect(node13.left.value).toBe(11)
    expect(node13.right.value).toBe(15)

    expect(node5.left.value).toBe(2)
    expect(node5.right.value).toBe(7)
})
