import SingleLinkedList from '../lists/SingleLinkedList';

test('Newly created list should be empty', () => {
    let sll = new SingleLinkedList();

    expect(sll.length()).toBe(0);
});
test('Head should be undefined in an empty list', () => {
    let sll = new SingleLinkedList();

    expect(sll.head()).toBe(undefined);
});
test('First push should update head', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');

    expect(sll.head()).toBe('Head');
});
test('Each push should increase length by 1', () => {
    let sll = new SingleLinkedList<string>();

    sll.push('Head');
    expect(sll.length()).toBe(1);

    sll.push('Middle');
    expect(sll.length()).toBe(2);

    sll.push('Tail');
    expect(sll.length()).toBe(3);
});
test('Head should be the same after pushes', () => {
    let sll = new SingleLinkedList<string>();

    sll.push('Head');
    expect(sll.head()).toBe('Head');

    sll.push('Middle');
    expect(sll.head()).toBe('Head');

    sll.push('Tail');
    expect(sll.head()).toBe('Head');
});
test('Tail should be updated after each push', () => {
    let sll = new SingleLinkedList<string>();

    sll.push('Head');
    expect(sll.tail()).toBe('Head');

    sll.push('Middle');
    expect(sll.tail()).toBe('Middle');

    sll.push('Tail');
    expect(sll.tail()).toBe('Tail');
});
test('Popping an empty list should return undefined', () => {
    let sll = new SingleLinkedList<string>();
    expect(sll.pop()).toBe(undefined);
});
test('Popping an empty list should not decrease length', () => {
    let sll = new SingleLinkedList<string>();

    sll.pop();
    expect(sll.length()).toBe(0);
});
test('Each pop should return the last element inserted', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.push('Middle');
    sll.push('Tail');

    expect(sll.pop()).toBe('Tail');
    expect(sll.pop()).toBe('Middle');
    expect(sll.pop()).toBe('Head');
});
test('Popping an one element list should update head to undefined', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.pop();

    expect(sll.head()).toBe(undefined);
});
test('Popping elements should update tail', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.push('Middle');
    sll.push('Tail');

    expect(sll.tail()).toBe('Tail');

    sll.pop();
    expect(sll.tail()).toBe('Middle');

    sll.pop();
    expect(sll.tail()).toBe('Head');
});
test('Each pop should decrease length by 1', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.push('Middle');
    sll.push('Tail');

    sll.pop();
    expect(sll.length()).toBe(2);

    sll.pop();
    expect(sll.length()).toBe(1);

    sll.pop();
    expect(sll.length()).toBe(0);
});

test('Shifting an empty list should return undefined', () => {
    let sll = new SingleLinkedList<string>();
    expect(sll.shift()).toBe(undefined);
});
test('Shifting an empty list should not decrease length', () => {
    let sll = new SingleLinkedList<string>();

    sll.shift();
    expect(sll.length()).toBe(0);
});
test('Each shift should return the first element in the list', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.push('Middle');
    sll.push('Tail');

    expect(sll.shift()).toBe('Head');
    expect(sll.shift()).toBe('Middle');
    expect(sll.shift()).toBe('Tail');
});
test('Shifting an one element list should update head to undefined', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.shift();

    expect(sll.head()).toBe(undefined);
});
test('Shifting elements should update head', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.push('Middle');
    sll.push('Tail');

    expect(sll.head()).toBe('Head');

    sll.shift();
    expect(sll.head()).toBe('Middle');

    sll.shift();
    expect(sll.head()).toBe('Tail');
});
test('Each shift should decrease length by 1', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.push('Middle');
    sll.push('Tail');

    sll.shift();
    expect(sll.length()).toBe(2);

    sll.shift();
    expect(sll.length()).toBe(1);

    sll.shift();
    expect(sll.length()).toBe(0);
});

test('First unshift should update head', () => {
    let sll = new SingleLinkedList<string>();
    sll.unshift('Head');

    expect(sll.head()).toBe('Head');
});
test('Each unshift should increase length by 1', () => {
    let sll = new SingleLinkedList<string>();

    sll.push('Tail');
    expect(sll.length()).toBe(1);

    sll.push('Middle');
    expect(sll.length()).toBe(2);

    sll.push('Head');
    expect(sll.length()).toBe(3);
});
test('Tail should be the same after unshifts', () => {
    let sll = new SingleLinkedList<string>();

    sll.unshift('Tail');
    expect(sll.tail()).toBe('Tail');

    sll.unshift('Middle');
    expect(sll.tail()).toBe('Tail');

    sll.unshift('Head');
    expect(sll.tail()).toBe('Tail');
});
test('Head should be updated after each unshift', () => {
    let sll = new SingleLinkedList<string>();

    sll.unshift('Tail');
    expect(sll.head()).toBe('Tail');

    sll.unshift('Middle');
    expect(sll.head()).toBe('Middle');

    sll.unshift('Head');
    expect(sll.head()).toBe('Head');
});
test('Reverse should reverse list elements order', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.push('Middle');
    sll.push('Tail');
    sll.reverse();

    expect(sll.shift()).toBe('Tail');
    expect(sll.shift()).toBe('Middle');
    expect(sll.shift()).toBe('Head');
});
test('Reverse should not change length', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.push('Middle');
    sll.push('Tail');
    sll.reverse();

    expect(sll.length()).toBe(3);
});
test('Reverse shouldnt do anything on a list with less than two elements', () => {
    let sll = new SingleLinkedList<string>();
    sll.push('Head');
    sll.reverse();

    expect(sll.shift()).toBe('Head');
    expect(sll.shift()).toBe(undefined);
});
