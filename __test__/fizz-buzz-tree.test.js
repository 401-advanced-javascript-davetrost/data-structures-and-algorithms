
'use strict';

const { Tree } = require('../challenges/tree/tree');
const { fizzBuzzTree } = require('../challenges/fizzBuzzTree/fizz-buzz-tree');
let binaryTree;

const valueA = '1';
const valueB = '3';
const valueC = '6';
const valueD = '9';
const valueE = '12';
const valueF = '15';
const valueG = '20';
const valueH = '22';
const valueI = '25';

describe('Fizz Buzz Tree Function', () => {

  it('Can fizzbuzz an empty tree', () => {
    binaryTree = new Tree();
    fizzBuzzTree(binaryTree);
    expect(binaryTree.inOrder()).toBe('');
  });
  
  it('Can fizzbuzz a tree with one node', () => {
    binaryTree.add(valueF);

    fizzBuzzTree(binaryTree);
    console.log(binaryTree.inOrder());
    expect(binaryTree.inOrder()).toBe('FizzBuzz ');
  });

  it('Can fizzbuzz a tree with a non-numeric node', () => {
    binaryTree.add('valueF');

    fizzBuzzTree(binaryTree);
    console.log(binaryTree.inOrder());
    expect(binaryTree.inOrder()).toBe('FizzBuzz ');
  });

});