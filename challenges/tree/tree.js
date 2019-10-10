const TreeNode = require('./tree-node');
const { Queue } = require('../stacksAndQueues/stacks-and-queues');

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
  breadthFirst() {
    const queue = new Queue();
    queue.enqueue(this.head);
    return breadthFirstHelper(queue, '');
  }

  contains(value) {
    return containsHelper(this.head, value);
  }

  findMaximumValue() {
    return maxValueHelper(this.head);
  }

}

function addHelper(current, node) {
  if(node.value === current.value) throw 'Exception: this value already exists in the tree';
  
  const nodeValue = Number.isInteger(Number(node.value)) ? Number(node.value) : node.value;
  const currentValue = Number.isInteger(Number(current.value)) ? Number(current.value) : current.value;

  let side = (nodeValue < currentValue) ? 'left' : 'right';
  current[side] ? addHelper(current[side], node) : current[side] = node;
}

function preOrderHelper(current, str) {
  if(!current) return '';
  if(current) str += current.value + ' ';
  if(current.left) str = preOrderHelper(current.left, str);
  if(current.right) str = preOrderHelper(current.right, str);
  return str;
}

function inOrderHelper(current, str) {
  if(!current) return '';
  if(current.left) str = inOrderHelper(current.left, str);
  if(current) str += current.value + ' ';
  if(current.right) str = inOrderHelper(current.right, str);
  return str;
}

function postOrderHelper(current, str) {
  if(!current) return '';
  if(current.left) str = postOrderHelper(current.left, str);
  if(current.right) str = postOrderHelper(current.right, str);
  if(current) str += current.value + ' ';
  return str;
}

function containsHelper(current, value) {
  if(!current) return false;
  if(value === current.value) return true;  
  return (value < current.value) ? containsHelper(current.left, value) : containsHelper(current.right, value);
}

function maxValueHelper(current) {
  if(!current) return null;
  if(current.right) return maxValueHelper(current.right);
  return current.value;
}

function breadthFirstHelper(queue, str) {
  if(!queue.front) return str;
  
  const current = queue.dequeue();
  if(current.left) queue.enqueue(current.left);
  if(current.right) queue.enqueue(current.right);
  
  str += current.value + ' ';
  return breadthFirstHelper(queue, str);
}

module.exports = { Tree };
