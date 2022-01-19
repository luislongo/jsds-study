import Queue from '../lists/Queue';

test('First in, first out', () => {
    let queue = new Queue<string>();
    queue.enqueue('Head');
    queue.enqueue('Middle');
    queue.enqueue('Tail');

    expect(queue.dequeue()).toBe('Head');
    expect(queue.dequeue()).toBe('Middle');
    expect(queue.dequeue()).toBe('Tail');
});
test('Dequeue should be undefined when Queue is empty', () => {
    let queue = new Queue<string>();
    expect(queue.dequeue()).toBe(undefined);
});
