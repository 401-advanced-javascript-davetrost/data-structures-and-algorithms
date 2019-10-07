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

  
});
