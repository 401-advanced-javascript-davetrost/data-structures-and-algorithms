'use strict';

let { Tree } = require('../challenges/tree/tree');
let binaryTree;

const valueA = 'A';
const valueB = 'B';
const valueC = 'C';
const valueD = 'D';
const valueE = 'E';
const valueF = 'F';
const valueG = 'G';
const valueH = 'H';
const valueI = 'I';

describe('Binary Tree', () => {

  it('Can successfully instantiate an empty tree', () => {
    binaryTree = new Tree();
    expect(binaryTree.head).toBe(null);
  });

  it('Can properly add into the tree', () => {
    binaryTree.add(valueF);
    expect(binaryTree.head.value).toBe(valueF);
  });
  
  it('Can add a left node and a right node into the tree', () => {
    binaryTree.add(valueB);
    binaryTree.add(valueG);
    expect(binaryTree.preOrder()).toBe(`${valueF} ${valueB} ${valueG} `);
    expect(binaryTree.inOrder()).toBe(`${valueB} ${valueF} ${valueG} `);
    expect(binaryTree.postOrder()).toBe(`${valueB} ${valueG} ${valueF} `);
  });
  
  // it('Will return true when finding a value within the tree that exists', () => {
  //   expect(binaryTree.includes(value1)).toBe(true);
  //   expect(binaryTree.includes(value2)).toBe(true);
  //   expect(binaryTree.includes(value3)).toBe(true);
  // });
      
  // it('Will return false when searching for a value in the tree that does not exist', () => {
  //   expect(binaryTree.includes('non-existent-value')).toBe(false);
  // });
      
  // it('Can properly return a collection of all the values that exist in the tree', () => {
  //   expect(binaryTree.toString()).toBe(`${value3}, ${value2}, ${value1}`);
  // });

  // it('Can be reset by replacing the reference with a new call to the constructor function', () => {
  //   binaryTree = new binaryTree();
  //   expect(binaryTree.head).toBe(null);
  //   expect(binaryTree.length).toBe(0);
  // });
    
  // it('Can append to an empty list', () => {
  //   binaryTree.insert(value1);
  //   expect(binaryTree.head.value).toBe(value1);
  //   expect(binaryTree.toString()).toBe(`${value1}`);
  //   expect(binaryTree.tail.value).toBe(value1);
  //   expect(binaryTree.length).toBe(1);
  // });

  // it('Can append to the end of the tree', () => {
  //   binaryTree.append(value2);
  //   expect(binaryTree.head.value).toBe(value1);
  //   expect(binaryTree.toString()).toBe(`${value1}, ${value2}`);
  //   expect(binaryTree.tail.value).toBe(value2);
  //   expect(binaryTree.length).toBe(2);
  // });

  // it('Can append multiple values to the end of the tree', () => {
  //   binaryTree.append(value3);
  //   binaryTree.append(value4);
  //   expect(binaryTree.head.value).toBe(value1);
  //   expect(binaryTree.toString()).toBe(`${value1}, ${value2}, ${value3}, ${value4}`);
  //   expect(binaryTree.tail.value).toBe(value4);
  //   expect(binaryTree.length).toBe(4);
  // });
  
  // it('Can insert a node before a node located in the middle of the list', () => {
  //   binaryTree.insertBefore(value2, value1p5);
  //   expect(binaryTree.head.value).toBe(value1);
  //   expect(binaryTree.toString()).toBe(`${value1}, ${value1p5}, ${value2}, ${value3}, ${value4}`);
  //   expect(binaryTree.tail.value).toBe(value4);
  //   expect(binaryTree.length).toBe(5);
  // });
  
  // it('Can insert a node before the first node of the list', () => {
  //   binaryTree.insertBefore(value1, value0);
  //   expect(binaryTree.head.value).toBe(value0);
  //   expect(binaryTree.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value3}, ${value4}`);
  //   expect(binaryTree.tail.value).toBe(value4);
  //   expect(binaryTree.length).toBe(6);
  // });

  
  // it('Can insert a node after a node located in the middle of the list', () => {
  //   binaryTree.insertAfter(value2, value2p5);
  //   expect(binaryTree.head.value).toBe(value0);
  //   expect(binaryTree.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}, ${value4}`);
  //   expect(binaryTree.tail.value).toBe(value4);
  //   expect(binaryTree.length).toBe(7);
  // });

  // it('Can insert a node after the last node', () => {
  //   binaryTree.insertAfter(value4, value5);
  //   expect(binaryTree.head.value).toBe(value0);
  //   expect(binaryTree.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}, ${value4}, ${value5}`);
  //   expect(binaryTree.tail.value).toBe(value5);
  //   expect(binaryTree.length).toBe(8);
  // });
  
  // it('Can delete a node with the given value', () => {
  //   binaryTree.delete(value4);
  //   expect(binaryTree.head.value).toBe(value0);
  //   expect(binaryTree.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}, ${value5}`);
  //   expect(binaryTree.tail.value).toBe(value5);
  //   expect(binaryTree.length).toBe(7);
  // });
  
  // it('Can delete the last node', () => {
  //   binaryTree.delete(value5);
  //   expect(binaryTree.head.value).toBe(value0);
  //   expect(binaryTree.toString()).toBe(`${value0}, ${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}`);
  //   expect(binaryTree.tail.value).toBe(value3);
  //   expect(binaryTree.length).toBe(6);
  // });
  
  // it('Can delete all the nodes', () => {
  //   binaryTree.delete(value0);
  //   expect(binaryTree.toString()).toBe(`${value1}, ${value1p5}, ${value2}, ${value2p5}, ${value3}`);
  //   expect(binaryTree.length).toBe(5);
  //   binaryTree.delete(value1);
  //   expect(binaryTree.toString()).toBe(`${value1p5}, ${value2}, ${value2p5}, ${value3}`);
  //   expect(binaryTree.length).toBe(4);
  //   binaryTree.delete(value1p5);
  //   expect(binaryTree.toString()).toBe(`${value2}, ${value2p5}, ${value3}`);
  //   expect(binaryTree.length).toBe(3);
  //   binaryTree.delete(value2);
  //   expect(binaryTree.toString()).toBe(`${value2p5}, ${value3}`);
  //   expect(binaryTree.length).toBe(2);
  //   binaryTree.delete(value2p5);
  //   expect(binaryTree.toString()).toBe(`${value3}`);
  //   expect(binaryTree.length).toBe(1);
  //   binaryTree.delete(value3);
  //   expect(binaryTree.head).toBe(null);
  //   expect(binaryTree.tail).toBe(null);
  //   expect(binaryTree.length).toBe(0);
  // });

  // describe('kthFromEnd', () => {
  //   it('can find a value in the middle of a one-element list', () => {
  //     binaryTree.append(value1);
  //     expect(binaryTree.kthFromEnd(0)).toBe(value1);
  //   });
  //   it('can find an value in the middle of the list', () => {
  //     binaryTree.append(value2);
  //     binaryTree.append(value3);
  //     binaryTree.append(value4);
  //     expect(binaryTree.kthFromEnd(0)).toBe(value4);
  //     expect(binaryTree.kthFromEnd(2)).toBe(value2);
  //   });
  //   it('can deal with a k-value greater than the length of the list', () => {
  //     expect(() => binaryTree.kthFromEnd(4)).toThrow('Exception');
  //   });
  //   it('can deal with a k-value equal to the length of the list', () => {
  //     expect(binaryTree.kthFromEnd(3)).toBe(value1);
  //   });
  //   it('can deal with a negative value for k', () => {
  //     expect(() => binaryTree.kthFromEnd(-1)).toThrow('Exception');
  //   });
  // });
  
  // describe('getMiddle', () => {
  //   it('can deal with an empty list', () => {
  //     binaryTree = new binaryTree();
  //     expect(() => binaryTree.getMiddle()).toThrow('Exception');
  //   });
  //   it('can find a value in the middle of a one-element list', () => {
  //     binaryTree.append(value1);
  //     expect(binaryTree.getMiddle()).toBe(value1);
  //   });
  //   it('can find an value in the middle of the list', () => {
  //     binaryTree.append(value2);
  //     binaryTree.append(value3);
  //     binaryTree.append(value4);
  //     expect(binaryTree.getMiddle()).toBe(value3);
  //     binaryTree.append(value5);
  //     expect(binaryTree.getMiddle()).toBe(value3);
  //   });
  // });
  
});
