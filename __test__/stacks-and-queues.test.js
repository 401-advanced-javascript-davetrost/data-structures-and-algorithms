'use strict';

let { Stack, Queue } = require('../challenges/stacksAndQueues/stacks-and-queues');
let stack, queue;

const value1 = 'one';
const value2 = 'two';
const value3 = 'three';

describe('Stack Data Structure', () => {

  it('Can successfully instantiate an empty stack', () => {
    stack = new Stack();
    expect(stack.top).toBe(null);
    expect(stack.length).toBe(0);
  });
  
  it('Can successfully push onto a stack', () => {
    stack.push(value1);
    expect(stack.top.value).toBe(value1);
    expect(stack.length).toBe(1);
  });
  
  it('Can successfully push multiple values onto a stack', () => {
    stack.push(value2);
    stack.push(value3);
    expect(stack.top.value).toBe(value3);
    expect(stack.toString()).toBe(`${value3}, ${value2}, ${value1}`);
    expect(stack.length).toBe(3);
  });
  
  it('Can successfully pop off the stack', () => {
    expect(stack.pop()).toBe(value3);
    expect(stack.toString()).toBe(`${value2}, ${value1}`);
    expect(stack.length).toBe(2);
  });
  
  it('Can successfully peek the next item on the stack', () => {
    expect(stack.peek()).toBe(value2);
  });
      
  it('Can successfully empty a stack after multiple pops', () => {
    expect(stack.pop()).toBe(value2);
    expect(stack.toString()).toBe(`${value1}`);
    expect(stack.length).toBe(1);
    expect(stack.pop()).toBe(value1);
    expect(stack.top).toBe(null);
    expect(stack.length).toBe(0);
  });
  
});


describe('Queue Data Structure', () => {

  it('Can successfully instantiate an empty queue', () => {
    queue = new Queue();
    expect(queue.front).toBe(null);
    expect(queue.length).toBe(0);
  });
  
  it('Can successfully enqueue onto a queue', () => {
    queue.enqueue(value1);
    expect(queue.front.value).toBe(value1);
    expect(queue.length).toBe(1);
  });
  
  it('Can successfully enqueue multiple values onto a queue', () => {
    queue.enqueue(value2);
    queue.enqueue(value3);
    expect(queue.front.value).toBe(value1);
    expect(queue.toString()).toBe(`${value1}, ${value2}, ${value3}`);
    expect(queue.length).toBe(3);
  });
  
  it('Can successfully dequeue from the queue', () => {
    expect(queue.dequeue()).toBe(value1);
    expect(queue.toString()).toBe(`${value2}, ${value3}`);
    expect(queue.length).toBe(2);
  });
  
  it('Can successfully peek the front item on the queue', () => {
    expect(queue.peek()).toBe(value2);
  });
      
  it('Can successfully empty a queue after multiple dequeues', () => {
    expect(queue.dequeue()).toBe(value2);
    expect(queue.toString()).toBe(`${value3}`);
    expect(queue.length).toBe(1);
    expect(queue.dequeue()).toBe(value3);
    expect(queue.front).toBe(null);
    expect(queue.length).toBe(0);
  });
  
});
