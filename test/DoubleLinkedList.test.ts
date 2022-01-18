import {DoubleLinkedList, DLLNode} from '../lists/DoubleLinkedList'

class MockNode extends DLLNode<MockNode> {
    name : string

    constructor(name : string) {
        super()
        this.name = name;
    }
}

test('Head and tail should be null before pushes', () => {
    const list = new DoubleLinkedList<MockNode>()

    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)
    expect(list.length).toBe(0)
})
test('Head and tail should be the same after first push', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))

    expect(list.head.name).toBe('Node A')
    expect(list.tail.name).toBe('Node A')
    expect(list.length).toBe(1)
})
test('Pushes should be inserted at the end of the list', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))

    expect(list.head.name).toBe('Node A')
    expect(list.tail.name).toBe('Node B')
    expect(list.length).toBe(2)
})
test('Pushes should be sequential at the end of the list', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))

    expect(list.head.name).toBe('Node A')
    expect(list.head.next.name).toBe('Node B')
    expect(list.tail.prev.name).toBe('Node B')
    expect(list.tail.name).toBe('Node C')
    expect(list.length).toBe(3)
})
test('If length is 1, head and tail should be null after pop', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.pop()
    
    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)
})
test('Pop should update tail', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))
    list.push(new MockNode('Node D'))
    list.push(new MockNode('Node E'))
    
    expect(list.pop().name).toBe('Node E')
    expect(list.tail.name).toBe('Node D')
    expect(list.length).toBe(4)

    expect(list.pop().name).toBe('Node D')
    expect(list.tail.name).toBe('Node C')
    expect(list.length).toBe(3)

    expect(list.pop().name).toBe('Node C')
    expect(list.tail.name).toBe('Node B')
    expect(list.length).toBe(2)

    expect(list.pop().name).toBe('Node B')
    expect(list.tail.name).toBe('Node A')
    expect(list.length).toBe(1)

    expect(list.pop().name).toBe('Node A')
    expect(list.tail).toBe(null)
    expect(list.length).toBe(0)
})
test('Shifting an empty list should return null', () => {
    const list = new DoubleLinkedList<MockNode>()

    expect(list.shift()).toBe(null)
})
test('Shifting an empty list should maintain length = 0', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.shift()

    expect(list.length).toBe(0)
})
test('Shift should update tail', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))
    list.push(new MockNode('Node D'))
    list.push(new MockNode('Node E'))
    
    expect(list.shift().name).toBe('Node A')
    expect(list.head.name).toBe('Node B')
    expect(list.length).toBe(4)

    expect(list.shift().name).toBe('Node B')
    expect(list.head.name).toBe('Node C')
    expect(list.length).toBe(3)

    expect(list.shift().name).toBe('Node C')
    expect(list.head.name).toBe('Node D')
    expect(list.length).toBe(2)

    expect(list.shift().name).toBe('Node D')
    expect(list.head.name).toBe('Node E')
    expect(list.length).toBe(1)

    expect(list.shift().name).toBe('Node E')
    expect(list.tail).toBe(null)
    expect(list.length).toBe(0)
})
test('Unshift should add new nodes to the head of the list', () => {
    const list = new DoubleLinkedList<MockNode>()
    expect(list.length).toBe(0)

    list.unshift(new MockNode('Node A'))
    expect(list.head.name).toBe('Node A')
    expect(list.length).toBe(1)

    list.unshift(new MockNode('Node B'))
    expect(list.head.name).toBe('Node B')
    expect(list.length).toBe(2)

    list.unshift(new MockNode('Node C'))
    expect(list.head.name).toBe('Node C')
    expect(list.length).toBe(3)

    list.unshift(new MockNode('Node D'))
    expect(list.head.name).toBe('Node D')
    expect(list.length).toBe(4)

    console.log(list.toString())
})
test('Get should return the value of the node at position', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))
    list.push(new MockNode('Node D'))
    list.push(new MockNode('Node E'))

    expect(list.get(0).name).toBe('Node A')
    expect(list.get(1).name).toBe('Node B')
    expect(list.get(2).name).toBe('Node C')
    expect(list.get(3).name).toBe('Node D')
    expect(list.get(4).name).toBe('Node E')
})
test('Get should return the value of the corresponding node', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))
    list.push(new MockNode('Node D'))
    list.push(new MockNode('Node E'))

    expect(list.get(0).name).toBe('Node A')
    expect(list.get(1).name).toBe('Node B')
    expect(list.get(2).name).toBe('Node C')
    expect(list.get(3).name).toBe('Node D')
    expect(list.get(4).name).toBe('Node E')
})
test('Set should change the value of the corresponding node', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))
    list.push(new MockNode('Node D'))
    list.push(new MockNode('Node E'))

    list.set(0, new MockNode('Node A - Changed A'))
    expect(list.get(0).name).toBe('Node A - Changed A')
    list.set(1, new MockNode( 'Node B - Changed B'))
    expect(list.get(1).name).toBe('Node B - Changed B')
    list.set(2, new MockNode( 'Node C - Changed C'))
    expect(list.get(2).name).toBe('Node C - Changed C')
    list.set(3, new MockNode('Node D - Changed D'))
    expect(list.get(3).name).toBe('Node D - Changed D')
    list.set(4, new MockNode('Node E - Changed E'))
    expect(list.get(4).name).toBe('Node E - Changed E')
})
test('Insert at first should behave like unshift', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))

    list.insert(0, new MockNode('Inserted node'))
    expect(list.head.name).toBe('Inserted node')
    expect(list.head.next.name).toBe('Node A')
})
test('Insert at last should behave like push', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))

    list.insert(3, new MockNode('Inserted node'))
    expect(list.tail.name).toBe('Inserted node')
    expect(list.tail.prev.name).toBe('Node C')
})
test('Insert at middle should update next and prev pointers', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))

    list.insert(2, new MockNode('Inserted node'))
    expect(list.get(1).name).toBe('Node B')
    expect(list.get(2).name).toBe('Inserted node')
    expect(list.get(3).name).toBe('Node C')
})
test('Remove at first should behave like shift', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))

    expect(list.remove(0).name).toBe('Node A')
    expect(list.head.name).toBe('Node B')
    expect(list.length).toBe(2)
})
test('Remove at last should behave like pop', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))

    expect(list.remove(2).name).toBe('Node C')
    expect(list.tail.name).toBe('Node B')
})
test('Remove at middle should update next pointers', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))

    expect(list.remove(1).name).toBe('Node B')
    expect(list.get(0).name).toBe('Node A')
    expect(list.get(1).name).toBe('Node C')
})
test('Revert empty list shouldnt do anything', () => {
    var list = new DoubleLinkedList()
    var revList = list.reverse()

    expect(revList.head).toBe(null)
    expect(revList.tail).toBe(null)
    expect(revList.length).toBe(0)
})
test('Revert list with length of 1 should keep the same order', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    
    let revList = list.reverse()

    expect(revList.head.name).toBe('Node A')
    expect(revList.tail.name).toBe('Node A')
    expect(revList.length).toBe(1)
})
test('Revert list should invert head and tail', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))

    var revList = list.reverse()

    expect(revList.head.name).toBe('Node B')
    expect(revList.tail.name).toBe('Node A')
    expect(revList.length).toBe(2)
})
test('Revert list should invert order of nodes', () => {
    const list = new DoubleLinkedList<MockNode>()
    list.push(new MockNode('Node A'))
    list.push(new MockNode('Node B'))
    list.push(new MockNode('Node C'))
    list.push(new MockNode('Node D'))

    var revList = list.reverse()

    expect(revList.get(0).name).toBe('Node D')
    expect(revList.get(1).name).toBe('Node C')
    expect(revList.get(2).name).toBe('Node B')
    expect(revList.get(3).name).toBe('Node A')
})