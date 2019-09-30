'use strict';

let { PseudoQueue } = require('../challenges/queueWithStacks/queue-with-stacks');
let queue;

const value1 = 'one';
const value2 = 'two';
const value3 = 'three';

describe('Pseudo-Queue Data Structure', () => {

  // it('Can successfully instantiate an empty queue', () => {
  //   queue = new PseudoQueue();
  //   expect(queue.front).toBe(null);
  //   expect(queue.length).toBe(0);
  // });
  
  // it('Can successfully enqueue onto a queue', () => {
  //   queue.enqueue(value1);
  //   expect(queue.front.value).toBe(value1);
  //   expect(queue.length).toBe(1);
  // });
  
  // it('Can successfully enqueue multiple values onto a queue', () => {
  //   queue.enqueue(value2);
  //   queue.enqueue(value3);
  //   expect(queue.front.value).toBe(value1);
  //   expect(queue.toString()).toBe(`${value1}, ${value2}, ${value3}`);
  //   expect(queue.length).toBe(3);
  // });
  
  // it('Can successfully dequeue from the queue', () => {
  //   expect(queue.dequeue()).toBe(value1);
  //   expect(queue.toString()).toBe(`${value2}, ${value3}`);
  //   expect(queue.length).toBe(2);
  // });
  
  // it('Can successfully empty a queue after multiple dequeues', () => {
  //   expect(queue.dequeue()).toBe(value2);
  //   expect(queue.toString()).toBe(`${value3}`);
  //   expect(queue.length).toBe(1);
  //   expect(queue.dequeue()).toBe(value3);
  //   expect(queue.front).toBe(null);
  //   expect(queue.length).toBe(0);
  // });
  
});
