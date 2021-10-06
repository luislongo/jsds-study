const SinglyLinkedList = require("../lists/SinglyLinkedList").default;

test('Head and tail should be null before pushes', () => {
    let list = new SinglyLinkedList;

    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)
})
test('Head and tail should be the same after first push', () => {
    let list = new SinglyLinkedList();
    list.push('Node A')

    expect(list.head.value).toBe('Node A')
    expect(list.tail.value).toBe('Node A')
})
test('Pushes should be inserted at the end of the list', () => {
    let list = new SinglyLinkedList();
    list.push('Node A')
    list.push('Node B')

    expect(list.head.value).toBe('Node A')
    expect(list.tail.value).toBe('Node B')
})
test('Head next value should be tail after two pushes', () => {
    let list = new SinglyLinkedList();
    list.push('Node A')
    list.push('Node B')

    expect(list.head.next.value).toBe('Node B')
})
test('Next values should maintain the sequence', () => {
    let list = new SinglyLinkedList();
    list.push('Node A')
    list.push('Node B')
    list.push('Node C')

    expect(list.head.next.value).toBe('Node B')
    expect(list.head.next.next.value).toBe('Node C')
})
