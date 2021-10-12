const Queue = require('../queues-and-stacks/Queue').default

test('Empty queue should pop null', () => {
    const queue = new Queue()
    expect(queue.dequeue()).toBe(null)
})
test('First in first out', () => {
    const queue = new Queue()

    queue.enqueue('Node A')
    queue.enqueue('Node B')
    queue.enqueue('Node C')
    queue.enqueue('Node D')

    expect(queue.dequeue()).toBe('Node A')
    expect(queue.dequeue()).toBe('Node B')
    expect(queue.dequeue()).toBe('Node C')
    expect(queue.dequeue()).toBe('Node D')
    expect(queue.dequeue()).toBe(null)
})
