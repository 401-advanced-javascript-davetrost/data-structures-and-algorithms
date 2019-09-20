'use strict';

let { LinkedList } = require('../challenges/linkedList/linked-list');
let linkedList;

const value1 = 'one';
const value2 = 'two';
const value3 = 'three';

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

});
