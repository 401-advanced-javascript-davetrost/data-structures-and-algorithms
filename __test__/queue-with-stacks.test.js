'use strict';

let { PseudoQueue } = require('../challenges/queueWithStacks/queue-with-stacks');
let queue;

const value1 = 'one';
const value2 = 'two';
const value3 = 'three';

describe('Pseudo-Queue Data Structure', () => {

  it('Can successfully instantiate an empty queue', () => {
    queue = new PseudoQueue();
    expect(queue.inStack.top).toBe(null);
    expect(queue.outStack.top).toBe(null);
  });
  
  it('Can successfully enqueue onto a queue', () => {
    queue.enqueue(value1);
    expect(queue.inStack.top.value).toBe(value1);
  });
  
  it('Can successfully enqueue multiple values onto a queue', () => {
    queue.enqueue(value2);
    expect(queue.inStack.top.value).toBe(value2);
    queue.enqueue(value3);
    expect(queue.inStack.top.value).toBe(value3);
    expect(queue.toString()).toBe(`${value1}, ${value2}, ${value3}`);
  });
  
  it('Can successfully dequeue from the queue', () => {
    expect(queue.dequeue()).toBe(value1);
    expect(queue.toString()).toBe(`${value2}, ${value3}`);
  });
  
  it('Can successfully empty a queue after multiple dequeues', () => {
    expect(queue.dequeue()).toBe(value2);
    expect(queue.toString()).toBe(`${value3}`);
    expect(queue.dequeue()).toBe(value3);
    expect(queue.toString()).toBe(``);
    expect(queue.inStack.top).toBe(null);
    expect(queue.outStack.top).toBe(null);
  });
  
});
