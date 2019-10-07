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

  contains(value) {
    return containsHelper(this.head, value);
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
  if(current.left) str = inOrderHelper(current.left, str);
  if(current) str += current.value + ' ';
  if(current.right) str = inOrderHelper(current.right, str);
  return str;
}

function postOrderHelper(current, str) {
  if(current.left) str = postOrderHelper(current.left, str);
  if(current.right) str = postOrderHelper(current.right, str);
  if(current) str += current.value + ' ';
  return str;
}

function containsHelper(current, value) {
  if(value === current.value) return true;  
  return (value < current.value) ? containsHelper(current.left, value) : containsHelper(current.right, value);
}

module.exports = { Tree };
