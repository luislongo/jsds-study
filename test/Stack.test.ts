const Stack = require('../queues-and-stacks/Stack').default

test('Empty stack should pop null', () => {
    const stack = new Stack()
    expect(stack.pop()).toBe(null)
})
test('Last in first out', () => {
    const stack = new Stack()

    stack.push('Node A')
    stack.push('Node B')
    stack.push('Node C')
    stack.push('Node D')

    expect(stack.pop()).toBe('Node D')
    expect(stack.pop()).toBe('Node C')
    expect(stack.pop()).toBe('Node B')
    expect(stack.pop()).toBe('Node A')
    expect(stack.pop()).toBe(null)
})
