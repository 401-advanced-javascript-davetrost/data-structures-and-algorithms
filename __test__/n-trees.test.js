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
const valueJ = 'J';

describe('N-Ary Tree', () => {

  it('Can successfully instantiate an empty tree with N=3', () => {
    nTree = new NTree(3);
    expect(nTree.head).toBe(null);
  });

  it('Can properly add into a tree with N=3', () => {
    nTree.add(valueA);
    expect(nTree.head.value).toBe(valueA);
  });
  
  it('Can return a pre-order string of a tree with N=3', () => {
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

  it('Can return a post-order string of a tree with N=3', () => {
    expect(nTree.postOrder()).toBe(`${valueE} ${valueF} ${valueG} ${valueB} ${valueH} ${valueI} ${valueC} ${valueD} ${valueA} `);
  });

  it('Can return an in-order string of a tree with N=3', () => {
    expect(nTree.inOrder()).toBe(`${valueE} ${valueF} ${valueB} ${valueG} ${valueH} ${valueI} ${valueC} ${valueA} ${valueD} `);
  });

  it('Can return an breadth-first string from a tree with N=3', () => {
    expect(nTree.breadthFirst()).toBe(`${valueA} ${valueB} ${valueC} ${valueD} ${valueE} ${valueF} ${valueG} ${valueH} ${valueI} `);
  });

  it('Can return a pre-order string of a tree with N=4', () => {
    nTree = new NTree(4);
    nTree.add(valueA);
    nTree.add(valueB);
    nTree.add(valueC);
    nTree.add(valueD);
    nTree.add(valueE);
    nTree.add(valueF);
    nTree.add(valueG);
    nTree.add(valueH);
    nTree.add(valueI);
    nTree.add(valueJ);
    expect(nTree.preOrder()).toBe(`${valueA} ${valueB} ${valueF} ${valueG} ${valueH} ${valueI} ${valueC} ${valueJ} ${valueD} ${valueE} `);
  });

  it('Can return a post-order string of a tree with N=4', () => {
    expect(nTree.postOrder()).toBe(`${valueF} ${valueG} ${valueH} ${valueI} ${valueB} ${valueJ} ${valueC} ${valueD} ${valueE} ${valueA} `);
  });

  it('Can return an in-order string of a tree with N=4', () => {
    expect(nTree.inOrder()).toBe(`${valueF} ${valueG} ${valueB} ${valueH} ${valueI} ${valueJ} ${valueC} ${valueA} ${valueD} ${valueE} `);
  });

  it('Can return an breadth-first string from a tree with N=4', () => {
    expect(nTree.breadthFirst()).toBe(`${valueA} ${valueB} ${valueC} ${valueD} ${valueE} ${valueF} ${valueG} ${valueH} ${valueI} ${valueJ} `);
  });

});
