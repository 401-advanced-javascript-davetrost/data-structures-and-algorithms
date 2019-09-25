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

describe.skip('Linked List', () => {

  it('Can successfully instantiate an empty linked list', () => {
    linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
    expect(linkedList.length).toBe(0);
  });
  
  it('Can properly insert into the linked list', () => {
    linkedList.insert(value1);
    expect(linkedList.head.value).toBe(value1);
    expect(linkedList.toString()).toBe(`${value1}`);
    expect(linkedList.tail.value).toBe(value1);
    expect(linkedList.length).toBe(1);
  });
  
  it('The head property will properly point to the first node in the linked list', () => {
    linkedList.insert(value2);
    expect(linkedList.head.value).toBe(value2);
    expect(linkedList.toString()).toBe(`${value2}, ${value1}`);
    expect(linkedList.tail.value).toBe(value1);
    expect(linkedList.length).toBe(2);
  });
  
  it('Can properly insert multiple nodes into the linked list', () => {
    linkedList.insert(value3);
    expect(linkedList.head.value).toBe(value3);
    expect(linkedList.toString()).toBe(`${value3}, ${value2}, ${value1}`);
    expect(linkedList.tail.value).toBe(value1);
    expect(linkedList.length).toBe(3);
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
    expect(linkedList.toString()).toBe(`${value3}, ${value2}, ${value1}`);
  });

  it('Can be reset by replacing the reference with a new call to the constructor function', () => {
    linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
    expect(linkedList.length).toBe(0);
  });
    
  it('Can append to an empty list', () => {
    linkedList.insert(value1);
    expect(linkedList.head.value).toBe(value1);
    expect(linkedList.toString()).toBe(`${value1}`);
    expect(linkedList.tail.value).toBe(value1);
    expect(linkedList.length).toBe(1);
  });

  it('Can append to the end of the linked list', () => {
    linkedList.append(value2);
    expect(linkedList.head.value).toBe(value1);
    expect(linkedList.toString()).toBe(`${value1}, ${value2}`);
    expect(linkedList.tail.value).toBe(value2);
    expect(linkedList.length).toBe(2);
  });

  it('Can append multiple values to the end of the linked list', () => {
    linkedList.append(value3);
    linkedList.append(value4);
    expect(linkedList.head.value).toBe(value1);
    expect(linkedList.toString()).toBe(`${value1}, ${value2}, ${value3}, ${value4}`);
    expect(linkedList.tail.value).toBe(value4);
    expect(linkedList.length).toBe(4);
  });
  
  it('Can insert a node before a node located in the middle of the list', () => {
    linkedList.insertBefore(value2, value1p5);
    expect(linkedList.head.value).toBe(value1);
    expect(linkedList.toString()).toBe(`${value1}, ${value1p5}, ${value2}, ${value3}, ${value4}`);
    expect(linkedList.tail.value).toBe(value4);
    expect(linkedList.length).toBe(5);
  });
  
  it('Can insert a node before the first node of the list', () => {
    linkedList.insertBefore(value1, value0);
    expect(linkedList.head.value).toBe(value0);
    expect(linkedList.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value3}, ${value4}`);
    expect(linkedList.tail.value).toBe(value4);
    expect(linkedList.length).toBe(6);
  });

  
  it('Can insert a node after a node located in the middle of the list', () => {
    linkedList.insertAfter(value2, value2p5);
    expect(linkedList.head.value).toBe(value0);
    expect(linkedList.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}, ${value4}`);
    expect(linkedList.tail.value).toBe(value4);
    expect(linkedList.length).toBe(7);
  });

  it('Can insert a node after the last node', () => {
    linkedList.insertAfter(value4, value5);
    expect(linkedList.head.value).toBe(value0);
    expect(linkedList.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}, ${value4}, ${value5}`);
    expect(linkedList.tail.value).toBe(value5);
    expect(linkedList.length).toBe(8);
  });
  
  it('Can delete a node with the given value', () => {
    linkedList.delete(value4);
    expect(linkedList.head.value).toBe(value0);
    expect(linkedList.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}, ${value5}`);
    expect(linkedList.tail.value).toBe(value5);
    expect(linkedList.length).toBe(7);
  });
  
  it('Can delete the last node', () => {
    linkedList.delete(value5);
    expect(linkedList.head.value).toBe(value0);
    expect(linkedList.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}`);
    expect(linkedList.tail.value).toBe(value3);
    expect(linkedList.length).toBe(6);
  });
  
  it('Can delete all the nodes', () => {
    linkedList.delete(value0);
    expect(linkedList.toString()).toBe(`${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}`);
    expect(linkedList.length).toBe(5);
    linkedList.delete(value1);
    expect(linkedList.toString()).toBe(`${value1p5}, ${value2}, ${value2p5}, ${value3}`);
    expect(linkedList.length).toBe(4);
    linkedList.delete(value1p5);
    expect(linkedList.toString()).toBe(`${value2}, ${value2p5}, ${value3}`);
    expect(linkedList.length).toBe(3);
    linkedList.delete(value2);
    expect(linkedList.toString()).toBe(`${value2p5}, ${value3}`);
    expect(linkedList.length).toBe(2);
    linkedList.delete(value2p5);
    expect(linkedList.toString()).toBe(`${value3}`);
    expect(linkedList.length).toBe(1);
    linkedList.delete(value3);
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
    expect(linkedList.length).toBe(0);
  });

  describe('kthFromEnd', () => {
    it('can find a value in the middle of a one-element list', () => {
      linkedList.append(value1);
      expect(linkedList.kthFromEnd(0)).toBe(value1);
    });
    it('can find an value in the middle of the list', () => {
      linkedList.append(value2);
      linkedList.append(value3);
      linkedList.append(value4);
      expect(linkedList.kthFromEnd(0)).toBe(value4);
      expect(linkedList.kthFromEnd(2)).toBe(value2);
    });
    it('can deal with a k-value greater than the length of the list', () => {
      expect(() => linkedList.kthFromEnd(4)).toThrow('Exception');
    });
    it('can deal with a k-value equal to the length of the list', () => {
      expect(linkedList.kthFromEnd(3)).toBe(value1);
    });
    it('can deal with a negative value for k', () => {
      expect(() => linkedList.kthFromEnd(-1)).toThrow('Exception');
    });
  });
  
  describe('getMiddle', () => {
    it('can deal with an empty list', () => {
      linkedList = new LinkedList();
      expect(() => linkedList.getMiddle()).toThrow('Exception');
    });
    it('can find a value in the middle of a one-element list', () => {
      linkedList.append(value1);
      expect(linkedList.getMiddle()).toBe(value1);
    });
    it('can find an value in the middle of the list', () => {
      linkedList.append(value2);
      linkedList.append(value3);
      linkedList.append(value4);
      expect(linkedList.getMiddle()).toBe(value3);
      linkedList.append(value5);
      expect(linkedList.getMiddle()).toBe(value3);
    });
  });
  
});
