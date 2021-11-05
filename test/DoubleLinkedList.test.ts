const DoubleLinkedList = require("../lists/DoubleLinkedList.js").default

test('Head and tail should be null before pushes', () => {
    var list = new DoubleLinkedList()

    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)
    expect(list.length).toBe(0)
})
test('Head and tail should be the same after first push', () => {
    var list = new DoubleLinkedList()
    list.push('Node A')

    expect(list.head.value).toBe('Node A')
    expect(list.tail.value).toBe('Node A')
    expect(list.length).toBe(1)
})
test('Pushes should be inserted at the end of the list', () => {
    var list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')

    expect(list.head.value).toBe('Node A')
    expect(list.tail.value).toBe('Node B')
    expect(list.length).toBe(2)
})
test('Pushes should be sequential at the end of the list', () => {
    var list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    expect(list.head.value).toBe('Node A')
    expect(list.head.next.value).toBe('Node B')
    expect(list.tail.prev.value).toBe('Node B')
    expect(list.tail.value).toBe('Node C')
    expect(list.length).toBe(3)
})
test('If length is 1, head and tail should be null after pop', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.pop()
    
    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)
})
test('Pop should update tail', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')
    list.push('Node E')
    
    expect(list.pop()).toBe('Node E')
    expect(list.tail.value).toBe('Node D')
    expect(list.length).toBe(4)

    expect(list.pop()).toBe('Node D')
    expect(list.tail.value).toBe('Node C')
    expect(list.length).toBe(3)

    expect(list.pop()).toBe('Node C')
    expect(list.tail.value).toBe('Node B')
    expect(list.length).toBe(2)

    expect(list.pop()).toBe('Node B')
    expect(list.tail.value).toBe('Node A')
    expect(list.length).toBe(1)

    expect(list.pop()).toBe('Node A')
    expect(list.tail).toBe(null)
    expect(list.length).toBe(0)

    expect(list.pop()).toBe(null)
    expect(list.length).toBe(0)
})
test('Shift should update tail', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')
    list.push('Node E')
    
    expect(list.shift()).toBe('Node A')
    expect(list.head.value).toBe('Node B')
    expect(list.length).toBe(4)

    expect(list.shift()).toBe('Node B')
    expect(list.head.value).toBe('Node C')
    expect(list.length).toBe(3)

    expect(list.shift()).toBe('Node C')
    expect(list.head.value).toBe('Node D')
    expect(list.length).toBe(2)

    expect(list.shift()).toBe('Node D')
    expect(list.head.value).toBe('Node E')
    expect(list.length).toBe(1)

    expect(list.shift()).toBe('Node E')
    expect(list.tail).toBe(null)
    expect(list.length).toBe(0)

    expect(list.shift()).toBe(null)
    expect(list.length).toBe(0)
})
test('Unshift should add new nodes to the head of the list', () => {
    let list = new DoubleLinkedList()
    expect(list.length).toBe(0)

    list.unshift('Node A')
    expect(list.head.value).toBe('Node A')
    expect(list.length).toBe(1)

    list.unshift('Node B')
    expect(list.head.value).toBe('Node B')
    expect(list.length).toBe(2)

    list.unshift('Node C')
    expect(list.head.value).toBe('Node C')
    expect(list.length).toBe(3)

    list.unshift('Node D')
    expect(list.head.value).toBe('Node D')
    expect(list.length).toBe(4)

    console.log(list.toString())
})
test('Get should return the value of the node at position', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')
    list.push('Node E')

    expect(list.get(0)).toBe('Node A')
    expect(list.get(1)).toBe('Node B')
    expect(list.get(2)).toBe('Node C')
    expect(list.get(3)).toBe('Node D')
    expect(list.get(4)).toBe('Node E')
})
test('Get should return null if position is invalid', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')
    list.push('Node E')
    
    expect(list.get(-1)).toBe(null)
    expect(list.get(5)).toBe(null)
})
test('Get should return the value of the corresponding node', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')
    list.push('Node E')

    expect(list.get(0)).toBe('Node A')
    expect(list.get(1)).toBe('Node B')
    expect(list.get(2)).toBe('Node C')
    expect(list.get(3)).toBe('Node D')
    expect(list.get(4)).toBe('Node E')
})
test('Set should change the value of the corresponding node', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')
    list.push('Node E')

    list.set(0, 'Node A - Changed A')
    expect(list.get(0)).toBe('Node A - Changed A')
    list.set(1, 'Node B - Changed B')
    expect(list.get(1)).toBe('Node B - Changed B')
    list.set(2, 'Node C - Changed C')
    expect(list.get(2)).toBe('Node C - Changed C')
    list.set(3, 'Node D - Changed D')
    expect(list.get(3)).toBe('Node D - Changed D')
    list.set(4, 'Node E - Changed E')
    expect(list.get(4)).toBe('Node E - Changed E')
})
test('Insert at first should behave like unshift', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    list.insert(0, 'Inserted node')
    expect(list.head.value).toBe('Inserted node')
    expect(list.head.next.value).toBe('Node A')
})
test('Insert at last should behave like push', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    list.insert(3, 'Inserted node')

    expect(list.tail.value).toBe('Inserted node')
})
test('Insert at middle should update next and prev pointers', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    list.insert(2, 'Inserted node')

    expect(list.get(1)).toBe('Node B')
    expect(list.get(2)).toBe('Inserted node')
    expect(list.get(3)).toBe('Node C')
})

test('Remove at first should behave like shift', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    expect(list.remove(0)).toBe('Node A')
    expect(list.head.value).toBe('Node B')
    expect(list.length).toBe(2)
})
test('Remove at last should behave like pop', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    expect(list.remove(2)).toBe('Node C')
    expect(list.tail.value).toBe('Node B')
})
test('Remove at middle should update next pointers', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    expect(list.remove(1)).toBe('Node B')
    expect(list.get(0)).toBe('Node A')
    expect(list.get(1)).toBe('Node C')
})

test('Revert empty list shouldnt do anything', () => {
    var list = new DoubleLinkedList()
    var revList = list.reverse()

    expect(revList.head).toBe(null)
    expect(revList.tail).toBe(null)
    expect(revList.length).toBe(0)
})
test('Revert list with length less than 2 would keep the same order', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    
    let revList = list.reverse()

    expect(revList.head.value).toBe('Node A')
    expect(revList.tail.value).toBe('Node A')
    expect(revList.length).toBe(1)
})
test('Revert list should invert head and tail', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')

    var revList = list.reverse()

    expect(revList.head.value).toBe('Node B')
    expect(revList.tail.value).toBe('Node A')
    expect(revList.length).toBe(2)
})
test('Revert list should invert order of nodes', () => {
    let list = new DoubleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')

    var revList = list.reverse()

    expect(revList.get(0)).toBe('Node D')
    expect(revList.get(1)).toBe('Node C')
    expect(revList.get(2)).toBe('Node B')
    expect(revList.get(3)).toBe('Node A')
})