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
const value1 = '1';
const value3 = '3';
const value8 = '8';
const value9 = '9';
const value11 = '11';
const value15 = '15';
const value20 = '20';
const value22 = '22';
const value25 = '25';

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
  });

  it('Can tell when a value exists in a collection (or not)', () => {
    expect(binaryTree.contains(valueB)).toBeTruthy();
    expect(binaryTree.contains(valueG)).toBeTruthy();
    expect(binaryTree.contains(valueA)).toBeFalsy();
  });
  
  it('Can return a pre-order string of a collection', () => {
    binaryTree.add(valueA);
    binaryTree.add(valueD);
    binaryTree.add(valueC);
    binaryTree.add(valueE);
    binaryTree.add(valueI);
    binaryTree.add(valueH);
    expect(binaryTree.preOrder()).toBe(`${valueF} ${valueB} ${valueA} ${valueD} ${valueC} ${valueE} ${valueG} ${valueI} ${valueH} `);
  });

  it('Can return a post-order string of a collection', () => {
    expect(binaryTree.postOrder()).toBe(`${valueA} ${valueC} ${valueE} ${valueD} ${valueB} ${valueH} ${valueI} ${valueG} ${valueF} `);
  });

  it('Can return an in-order string of a collection', () => {
    expect(binaryTree.inOrder()).toBe(`${valueA} ${valueB} ${valueC} ${valueD} ${valueE} ${valueF} ${valueG} ${valueH} ${valueI} `);
  });

  it('Can return an breadth-first string from a collection', () => {
    expect(binaryTree.breadthFirst()).toBe(`${valueF} ${valueB} ${valueG} ${valueA} ${valueD} ${valueI} ${valueC} ${valueE} ${valueH} `);
  });

  it('Can find the maximum value in the tree regardless of depth', () => {
    binaryTree = new Tree();
    binaryTree.add(value11);
    expect(binaryTree.findMaximumValue()).toBe(value11);
    binaryTree.add(value9);
    expect(binaryTree.findMaximumValue()).toBe(value11);
    binaryTree.add(value15);
    expect(binaryTree.findMaximumValue()).toBe(value15);
    binaryTree.add(value20);
    expect(binaryTree.findMaximumValue()).toBe(value20);
    binaryTree.add(value3);
    expect(binaryTree.findMaximumValue()).toBe(value20);
    binaryTree.add(value1);
    expect(binaryTree.findMaximumValue()).toBe(value20);
    binaryTree.add(value8);
    expect(binaryTree.findMaximumValue()).toBe(value20);
    binaryTree.add(value25);
    expect(binaryTree.findMaximumValue()).toBe(value25);
    binaryTree.add(value22);
    expect(binaryTree.findMaximumValue()).toBe(value25);
  });

  it('Can find the maximum value in the tree regardless of tree balancing', () => {
    binaryTree = new Tree();
    binaryTree.add(value25);
    expect(binaryTree.findMaximumValue()).toBe(value25);
    binaryTree.add(value9);
    binaryTree.add(value15);
    binaryTree.add(value20);
    binaryTree.add(value3);
    binaryTree.add(value1);
    binaryTree.add(value8);
    binaryTree.add(value22);
    expect(binaryTree.findMaximumValue()).toBe(value25);
  });

});
