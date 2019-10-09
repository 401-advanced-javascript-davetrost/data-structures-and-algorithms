'use strict';

let { NTree } = require('../challenges/nAryTree/n-tree');
let nTree;

const valueA = 'A';
const valueB = 'B';
const valueC = 'C';
const valueD = 'D';
const valueE = 'E';
const valueF = 'F';
const valueG = 'G';
const valueH = 'H';
const valueI = 'I';

describe('N-Ary Tree', () => {

  it('Can successfully instantiate an empty tree with N=3', () => {
    nTree = new NTree(3);
    expect(nTree.head).toBe(null);
  });

  it('Can properly add into the tree', () => {
    nTree.add(valueA);
    expect(nTree.head.value).toBe(valueA);
  });
  
  it('Can return a pre-order string of the tree', () => {
    nTree.add(valueB);
    nTree.add(valueC);
    nTree.add(valueD);
    nTree.add(valueE);
    nTree.add(valueF);
    nTree.add(valueG);
    nTree.add(valueH);
    nTree.add(valueI);
    expect(nTree.preOrder()).toBe(`${valueA} ${valueB} ${valueE} ${valueF} ${valueG} ${valueC} ${valueH} ${valueI} ${valueD} `);
  });

  it.skip('Can return a post-order string of the tree', () => {
    expect(nTree.postOrder()).toBe(`${valueA} ${valueC} ${valueE} ${valueD} ${valueB} ${valueH} ${valueI} ${valueG} ${valueF} `);
  });

  it.skip('Can return an in-order string of the tree', () => {
    expect(nTree.inOrder()).toBe(`${valueA} ${valueB} ${valueC} ${valueD} ${valueE} ${valueF} ${valueG} ${valueH} ${valueI} `);
  });

  it.skip('Can return an breadth-first string from a collection', () => {
    expect(nTree.breadthFirst()).toBe(`${valueF} ${valueB} ${valueG} ${valueA} ${valueD} ${valueI} ${valueC} ${valueE} ${valueH} `);
  });

});
