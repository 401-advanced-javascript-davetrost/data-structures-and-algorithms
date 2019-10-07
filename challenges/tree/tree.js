const TreeNode = require('./tree-node');

/**
 * Tree Class implementation
 */
class Tree {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new TreeNode(value);

    if(this.head === null) this.head = newNode;
    else addHelper(this.head, newNode);
  }

  preOrder() {
    return preOrderHelper(this.head, '');
  }

  inOrder() {
    return inOrderHelper(this.head, '');
  }

  postOrder() {
    return postOrderHelper(this.head, '');
  }

}

function addHelper(current, node) {
  if(node.value === current.value) throw 'Exception: this value already exists in the tree';
  
  const side = (node.value < current.value) ? 'left' : 'right';
  current[side] ? addHelper(current[side], node) : current[side] = node;
}

function preOrderHelper(current, str) {
  if(current) str += current.value + ' ';
  if(current.left) str = preOrderHelper(current.left, str);
  if(current.right) str = preOrderHelper(current.right, str);
  return str;
}

function inOrderHelper(current, str) {
  if(current.left) str = preOrderHelper(current.left, str);
  if(current) str += current.value + ' ';
  if(current.right) str = preOrderHelper(current.right, str);
  return str;
}

function postOrderHelper(current, str) {
  if(current.left) str = preOrderHelper(current.left, str);
  if(current.right) str = preOrderHelper(current.right, str);
  if(current) str += current.value + ' ';
  return str;
}

module.exports = { Tree };
