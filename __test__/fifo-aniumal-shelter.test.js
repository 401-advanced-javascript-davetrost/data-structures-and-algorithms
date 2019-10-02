'use strict';

let AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');
let queue;

const value1 = {
  name: 'one',
  type: 'dog',
};
const value2 = {
  name: 'two',
  type: 'dog',
};
const value3 = {
  name: 'three',
  type: 'cat',
};
const value4 = {
  name: 'four',
  type: 'cat',
};
const value5 = {
  name: 'five',
  type: 'dog',
};

describe('Animal Shelter Data Structure', () => {

  it('instantiates an empty shelter', () => {
    queue = new AnimalShelter();
    expect(queue.queue.head).toBe(null);
  });
  
  it('enqueues into a shelter', () => {
    queue.enqueue(value1);
    expect(queue.queue.head.value).toEqual(value1);
  });
  
  it('enqueues multiple values into a shelter', () => {
    queue.enqueue(value2);
    queue.enqueue(value3);
    queue.enqueue(value4);
    queue.enqueue(value5);

    expect(queue.queue.head.value).toEqual(value1);
    expect(queue.queue.head.next.value).toEqual(value2);
    expect(queue.queue.head.next.next.value).toEqual(value3);
    expect(queue.queue.head.next.next.next.value).toEqual(value4);
    expect(queue.queue.head.next.next.next.next.value).toEqual(value5);
  });
  
  it('dequeues an animal from the shelter', () => {
    expect(queue.dequeue(/*no pref*/)).toEqual(value1);
  });
  
  it('dequeues an animal from the shelter whether that animal is not at the front of the queue or not', () => {
    expect(queue.dequeue('cat')).toEqual(value3);
    expect(queue.dequeue('dog')).toEqual(value2);
    expect(queue.dequeue('dog')).toEqual(value5);
  });
  
  it('Can successfully empty a queue after multiple dequeues', () => {
    expect(queue.dequeue()).toBe(value4);
    expect(queue.queue.head).toBe(null);
  });
  
});
