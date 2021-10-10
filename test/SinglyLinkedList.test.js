const SingleLinkedList = require("../lists/SingleLinkedList").default;

test('Head and tail should be null before pushes', () => {
    let list = new SingleLinkedList;

    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)
})
test('Head and tail should be the same after first push', () => {
    let list = new SingleLinkedList()
    list.push('Node A')

    expect(list.head.value).toBe('Node A')
    expect(list.tail.value).toBe('Node A')
})
test('Pushes should be inserted at the end of the list', () => {
    let list = new SingleLinkedList()
    list.push('Node A')
    list.push('Node B')

    expect(list.head.value).toBe('Node A')
    expect(list.tail.value).toBe('Node B')
})
test('Head next value should be tail after two pushes', () => {
    let list = new SingleLinkedList()
    list.push('Node A')
    list.push('Node B')

    expect(list.head.next.value).toBe('Node B')
})
test('Next values should maintain the sequence', () => {
    let list = new SingleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    expect(list.head.next.value).toBe('Node B')
    expect(list.head.next.next.value).toBe('Node C')
})
test('Length should increment by one every push', () => {
    let list = new SingleLinkedList()
    expect(list.length).toBe(0)

    list.push('Node A')
    expect(list.tail.value).toBe('Node A')
    expect(list.length).toBe(1)

    list.push('Node B')
    expect(list.tail.value).toBe('Node B')
    expect(list.length).toBe(2)

    list.push('Node C')
    expect(list.tail.value).toBe('Node C')
    expect(list.length).toBe(3)

    list.push('Node D')
    expect(list.tail.value).toBe('Node D')
    expect(list.length).toBe(4)
})

test('If length is 1, head and tail should be null after pop', () => {
    let list = new SingleLinkedList()
    list.push('Node A')
    list.pop()
    
    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)

})
test('Pop should update tail', () => {
    let list = new SingleLinkedList()
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
test('If length is 1, head and tail should be null after shift', () => {
    let list = new SingleLinkedList()
    list.push('Node A')
    
    expect(list.shift()).toBe('Node A')
    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)
})
test('Shift should update tail', () => {
    let list = new SingleLinkedList()
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
    let list = new SingleLinkedList()
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

    expect(list.tail.value).toBe('Node A')
})
test('Get should return the value of the node at position', () => {
    let list = new SingleLinkedList()
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
    let list = new SingleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')
    list.push('Node E')
    
    expect(list.get(-1)).toBe(null)
    expect(list.get(5)).toBe(null)
})
test('Get should return the value of the corresponding node', () => {
    let list = new SingleLinkedList()
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
    let list = new SingleLinkedList()
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
    let list = new SingleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    list.insert(0, 'Inserted node')
    expect(list.head.value).toBe('Inserted node')
    expect(list.head.next.value).toBe('Node A')
})
test('Insert at last should behave like push', () => {
    let list = new SingleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    list.insert(3, 'Inserted node')

    expect(list.tail.value).toBe('Inserted node')
})
test('Insert at middle should update next pointers', () => {
    let list = new SingleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    list.insert(2, 'Inserted node')
    console.log(list.toString())
    expect(list.get(1)).toBe('Node B')
    expect(list.get(2)).toBe('Inserted node')
    expect(list.get(3)).toBe('Node C')
})
test('To String', () => {
    let list = new SingleLinkedList()
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')
    list.push('Node D')
    list.push('Node E')

    const toString = list.toString()

    expect(toString).toBe(
        'Node A -> Node B -> Node C -> Node D -> Node E'
    )
})