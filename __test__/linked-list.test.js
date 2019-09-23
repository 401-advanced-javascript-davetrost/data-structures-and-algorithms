'use strict';

let { LinkedList } = require('../challenges/linkedList/linked-list');
let linkedList;

const value0 = 'zero';
const value1 = 'one';
const value1p5 = 'one-point-five';
const value2 = 'two';
const value2p5 = 'two-point-five';
const value3 = 'three';
const value4 = 'four';
const value5 = 'five';

describe('Linked List', () => {

  it('Can successfully instantiate an empty linked list', () => {
    linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
  });
  
  it('Can properly insert into the linked list', () => {
    linkedList.insert(value1);
    expect(linkedList.head.value).toBe(value1);
  });
  
  it('The head property will properly point to the first node in the linked list', () => {
    linkedList.insert(value2);
    expect(linkedList.head.value).toBe(value2);
  });
  
  it('Can properly insert multiple nodes into the linked list', () => {
    linkedList.insert(value3);
    expect(linkedList.head.value).toBe(value3);
    expect(linkedList.head.next.value).toBe(value2);
    expect(linkedList.head.next.next.value).toBe(value1);
  });    
  
  it('Will return true when finding a value within the linked list that exists', () => {
    expect(linkedList.includes(value1)).toBe(true);
    expect(linkedList.includes(value2)).toBe(true);
    expect(linkedList.includes(value3)).toBe(true);
  });
      
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(linkedList.includes('non-existent-value')).toBe(false);
  });
      
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(linkedList.toString()).toBe([value3, value2, value1].join(', '));
  });

  it('Can be reset by replacing the reference with a new call to the constructor function', () => {
    linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
  });
    
  it('Can append to an empty list', () => {
    linkedList.insert(value1);
    expect(linkedList.head.value).toBe(value1);
  });

  it('Can append to the end of the linked list', () => {
    linkedList.append(value2);
    expect(linkedList.head.next.value).toBe(value2);
  });

  it('Can append multiple values to the end of the linked list', () => {
    linkedList.append(value3);
    linkedList.append(value4);
    expect(linkedList.head.next.next.value).toBe(value3);
    expect(linkedList.head.next.next.next.value).toBe(value4);
  });
  
  it('Can insert a node before a node located in the middle of the list', () => {
    expect(linkedList.head.next.value).toBe(value2);
    linkedList.insertBefore(value2, value1p5);
    expect(linkedList.head.next.value).toBe(value1p5);
    expect(linkedList.head.next.next.value).toBe(value2);
  });
  
  it('Can insert a node before the first node of the list', () => {
    expect(linkedList.head.value).toBe(value1);
    linkedList.insertBefore(value1, value0);
    expect(linkedList.head.value).toBe(value0);
    expect(linkedList.head.next.value).toBe(value1);
  });

  
  it('Can insert a node after a node located in the middle of the list', () => {
    expect(linkedList.head.next.next.next.next.value).toBe(value3);
    linkedList.insertAfter(value2, value2p5);
    expect(linkedList.head.next.next.next.next.value).toBe(value2p5);
  });

  it('Can insert a node after the last node', () => {
    linkedList.insertAfter(value4, value5);
    expect(linkedList.head.next.next.next.next.next.next.next.value).toBe(value5);
  });
  
  it('Can delete a node with the given value', () => {
    expect(linkedList.head.next.next.next.next.next.value).toBe(value3);
    expect(linkedList.head.next.next.next.next.next.next.value).toBe(value4);
    expect(linkedList.head.next.next.next.next.next.next.next.value).toBe(value5);
    linkedList.delete(value4);
    expect(linkedList.head.next.next.next.next.next.value).toBe(value3);
    expect(linkedList.head.next.next.next.next.next.next.value).toBe(value5);
  });
  
  it('Can delete the last node', () => {
    expect(linkedList.head.next.next.next.next.next.next.value).toBe(value5);
    linkedList.delete(value5);
    expect(linkedList.head.next.next.next.next.next.next).toBe(null);
  });
  
  it('Can delete all the nodes', () => {
    expect(linkedList.head.value).toBe(value0);
    linkedList.delete(value0);
    expect(linkedList.head.value).toBe(value1);
    linkedList.delete(value1);
    expect(linkedList.head.value).toBe(value1p5);
    linkedList.delete(value1p5);
    expect(linkedList.head.value).toBe(value2);
    linkedList.delete(value2);
    expect(linkedList.head.value).toBe(value2p5);
    linkedList.delete(value2p5);
    expect(linkedList.head.value).toBe(value3);
    linkedList.delete(value3);
    expect(linkedList.head).toBe(null);
  });
  
});
