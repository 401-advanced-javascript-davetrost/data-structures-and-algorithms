
'use strict';

const { Tree } = require('../challenges/tree/tree');
const { fizzBuzzTree } = require('../challenges/fizzBuzzTree/fizz-buzz-tree');
let binaryTree;

const value1 = '1';
const value3 = '3';
const value8 = '8';
const value9 = '9';
const value11 = '11';
const value15 = '15';
const value20 = '20';
const value22 = '22';
const value25 = '25';

describe('Fizz Buzz Tree Function', () => {

  it('Can fizzbuzz an empty tree', () => {
    binaryTree = new Tree();
    fizzBuzzTree(binaryTree);
    expect(binaryTree.inOrder()).toBe('');
  });
  
  it('Can fizzbuzz a tree with one node', () => {
    binaryTree.add(value15);
    fizzBuzzTree(binaryTree);
    expect(binaryTree.inOrder()).toBe('FizzBuzz ');
  });

  it('Can fizzbuzz a tree with a non-numeric node', () => {
    binaryTree.add('valueF');
    fizzBuzzTree(binaryTree);
    expect(binaryTree.inOrder()).toBe('FizzBuzz valueF ');
  });

  it('Can fizzbuzz a tree with many nodes divisible by 3, 5, both or neither', () => {
    binaryTree = new Tree();
    binaryTree.add(value11);
    binaryTree.add(value9);
    binaryTree.add(value15);
    binaryTree.add(value20);
    binaryTree.add(value3);
    binaryTree.add(value1);
    binaryTree.add(value8);
    binaryTree.add(value25);
    binaryTree.add(value22);
    fizzBuzzTree(binaryTree);
    expect(binaryTree.inOrder()).toBe(`${value1} Fizz ${value8} Fizz ${value11} FizzBuzz Buzz ${value22} Buzz `);
  });

});
