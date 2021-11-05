const MaxHeapTree = require('../heaps/MaxHeapTree.js').MaxHeapTree

test('Heap tree inserts should respect order', () => {
    const tree = new MaxHeapTree()
    tree.insert(5)
    tree.insert(10)
    tree.insert(15)
    tree.insert(20)
    tree.insert(25)

    expect(tree.values[0]).toBe(25)
    expect(tree.values[0] > tree.values[1]).toBe(true)
})
test('Heap tree removes should return max child always', () => {
    const tree = new MaxHeapTree()
    tree.insert(5)
    tree.insert(20)
    tree.insert(25)
    tree.insert(15)
    tree.insert(10)
    
    expect(tree.remove()).toBe(25)
    expect(tree.remove()).toBe(20)
    expect(tree.remove()).toBe(15)
    expect(tree.remove()).toBe(10)
    expect(tree.remove()).toBe(5)
    expect(tree.remove()).toBe(null)
})