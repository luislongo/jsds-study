import Stack from '../lists/Stack';

test('Last in, first out', () => {
    let stack = new Stack<string>();
    stack.push('Head');
    stack.push('Middle');
    stack.push('Tail');

    expect(stack.pop()).toBe('Tail');
    expect(stack.pop()).toBe('Middle');
    expect(stack.pop()).toBe('Head');
});
test('Pop should be undefined when Stack is empty', () => {
    let stack = new Stack<string>();
    expect(stack.pop()).toBe(undefined);
});
