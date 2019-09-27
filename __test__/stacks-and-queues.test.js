'use strict';

let { Stack } = require('../challenges/stacksAndQueues/stacks-and-queues');
let stack;

const value0 = 'zero';
const value1 = 'one';
const value1p5 = 'one-point-five';
const value2 = 'two';
const value2p5 = 'two-point-five';
const value3 = 'three';
const value4 = 'four';
const value5 = 'five';

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
    stack.pop();
    expect(stack.toString()).toBe(`${value1}`);
    expect(stack.length).toBe(1);
    stack.pop();
    expect(stack.top).toBe(null);
    expect(stack.length).toBe(0);
  });
  
});

// describe('Queue Data Structure', () => {

//   Can successfully instantiate an empty queue
//   Can successfully enqueue into a queue
//   Can successfully enqueue multiple values into a queue
//   Can successfully dequeue out of a queue the expected value
//   Can successfully peek into a queue, seeing the expected value
//   Can successfully empty a queue after multiple dequeues

// });
