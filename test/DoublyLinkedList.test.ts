import DoublyLinkedList from '../lists/DoublyLinkedList';
test('Newly created list should be empty', () => {
    let dll = new DoublyLinkedList();

    expect(dll.length()).toBe(0);
});
test('Head should be undefined in an empty list', () => {
    let dll = new DoublyLinkedList();

    expect(dll.head()).toBe(undefined);
});
test('First push should update head and tail', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Heads and tails');

    expect(dll.head()).toBe('Heads and tails');
    expect(dll.tail()).toBe('Heads and tails');
});
test('Each push should increase length by 1', () => {
    let dll = new DoublyLinkedList<string>();

    dll.push('Head');
    expect(dll.length()).toBe(1);

    dll.push('Middle');
    expect(dll.length()).toBe(2);

    dll.push('Tail');
    expect(dll.length()).toBe(3);
});
test('Head should be the same after pushes', () => {
    let dll = new DoublyLinkedList<string>();

    dll.push('Head');
    expect(dll.head()).toBe('Head');

    dll.push('Middle');
    expect(dll.head()).toBe('Head');

    dll.push('Tail');
    expect(dll.head()).toBe('Head');
});
test('Tail should be updated after each push', () => {
    let dll = new DoublyLinkedList<string>();

    dll.push('Head');
    expect(dll.tail()).toBe('Head');

    dll.push('Middle');
    expect(dll.tail()).toBe('Middle');

    dll.push('Tail');
    expect(dll.tail()).toBe('Tail');
});
test('Popping an empty list should return undefined', () => {
    let dll = new DoublyLinkedList<string>();
    expect(dll.pop()).toBe(undefined);
});
test('Popping an empty list should not decrease length', () => {
    let dll = new DoublyLinkedList<string>();

    dll.pop();
    expect(dll.length()).toBe(0);
});
test('Each pop should return the last element inserted', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    expect(dll.pop()).toBe('Tail');
    expect(dll.pop()).toBe('Middle');
    expect(dll.pop()).toBe('Head');
});
test('Popping an one element list should update head to undefined', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.pop();

    expect(dll.head()).toBe(undefined);
});
test('Popping elements should update tail', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    expect(dll.tail()).toBe('Tail');

    dll.pop();
    expect(dll.tail()).toBe('Middle');

    dll.pop();
    expect(dll.tail()).toBe('Head');
});
test('Each pop should decrease length by 1', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    dll.pop();
    expect(dll.length()).toBe(2);

    dll.pop();
    expect(dll.length()).toBe(1);

    dll.pop();
    expect(dll.length()).toBe(0);
});

test('Shifting an empty list should return undefined', () => {
    let dll = new DoublyLinkedList<string>();
    expect(dll.shift()).toBe(undefined);
});
test('Shifting an empty list should not decrease length', () => {
    let dll = new DoublyLinkedList<string>();

    dll.shift();
    expect(dll.length()).toBe(0);
});
test('Each shift should return the first element in the list', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    expect(dll.shift()).toBe('Head');
    expect(dll.shift()).toBe('Middle');
    expect(dll.shift()).toBe('Tail');
});
test('Shifting an one element list should update head to undefined', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.shift();

    expect(dll.head()).toBe(undefined);
});
test('Shifting elements should update head', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    expect(dll.head()).toBe('Head');

    dll.shift();
    expect(dll.head()).toBe('Middle');

    dll.shift();
    expect(dll.head()).toBe('Tail');
});
test('Each shift should decrease length by 1', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    dll.shift();
    expect(dll.length()).toBe(2);

    dll.shift();
    expect(dll.length()).toBe(1);

    dll.shift();
    expect(dll.length()).toBe(0);
});

test('First unshift should update head and tail', () => {
    let dll = new DoublyLinkedList<string>();
    dll.unshift('Head and tail');

    expect(dll.head()).toBe('Head and tail');
    expect(dll.tail()).toBe('Head and tail');
});
test('Each unshift should increase length by 1', () => {
    let dll = new DoublyLinkedList<string>();

    dll.push('Tail');
    expect(dll.length()).toBe(1);

    dll.push('Middle');
    expect(dll.length()).toBe(2);

    dll.push('Head');
    expect(dll.length()).toBe(3);
});
test('Tail should be the same after unshifts', () => {
    let dll = new DoublyLinkedList<string>();

    dll.unshift('Tail');
    expect(dll.tail()).toBe('Tail');

    dll.unshift('Middle');
    expect(dll.tail()).toBe('Tail');

    dll.unshift('Head');
    expect(dll.tail()).toBe('Tail');
});
test('Head should be updated after each unshift', () => {
    let dll = new DoublyLinkedList<string>();

    dll.unshift('Tail');
    expect(dll.head()).toBe('Tail');

    dll.unshift('Middle');
    expect(dll.head()).toBe('Middle');

    dll.unshift('Head');
    expect(dll.head()).toBe('Head');
});
test('Reverse should reverse list elements order', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');
    dll.reverse();

    expect(dll.shift()).toBe('Tail');
    expect(dll.shift()).toBe('Middle');
    expect(dll.shift()).toBe('Head');
});
test('Reverse should not change length', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');
    dll.reverse();

    expect(dll.length()).toBe(3);
});
test('Reverse shouldnt do anything on a list with less than two elements', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.reverse();

    expect(dll.shift()).toBe('Head');
    expect(dll.shift()).toBe(undefined);
});
test('Reverse should interchange head and tail', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');
    dll.reverse();

    expect(dll.head()).toBe('Tail');
    expect(dll.tail()).toBe('Head');
});
test('Get should return element at position', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    expect(dll.get(0)).toBe('Head');
    expect(dll.get(1)).toBe('Middle');
    expect(dll.get(2)).toBe('Tail');
});
test('Get should return undefined when index is invalid', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    expect(dll.get(-1)).toBe(undefined);
    expect(dll.get(3)).toBe(undefined);
});
test('Set should update element at position', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    dll.set(0, 'New Head');
    expect(dll.get(0)).toBe('New Head');

    dll.set(1, 'New Middle');
    expect(dll.get(1)).toBe('New Middle');

    dll.set(2, 'New Tail');
    expect(dll.get(2)).toBe('New Tail');
});
test('Set shouldnt do anything when index is invalid', () => {
    let dll = new DoublyLinkedList<string>();
    dll.push('Head');
    dll.push('Middle');
    dll.push('Tail');

    dll.set(-1, 'New Head');
    dll.set(3, 'New Tail');

    expect(dll.get(0)).toBe('Head');
    expect(dll.get(1)).toBe('Middle');
    expect(dll.get(2)).toBe('Tail');
});
