const NTreeNode = require('./n-tree-node');
const { Queue } = require('../stacksAndQueues/stacks-and-queues');

/**
 * N-Ary Tree Class implementation
 */
class NTree {
  constructor(n) {
    this.head = null;
    this.n = n;
  }

  add(value) {
    const newNode = new NTreeNode(value);

    if(this.head === null) {
      return this.head = newNode;
    }

    const queue = new Queue();
    queue.enqueue(this.head);
    return addHelper(this.n, queue, newNode);
  }

  preOrder() {
    return preOrderHelper(this.head, '');
  }
  inOrder() {
    return inOrderHelper(this.n, this.head, '');
  }
  postOrder() {
    return postOrderHelper(this.head, '');
  }
  breadthFirst() {
    const queue = new Queue();
    queue.enqueue(this.head);
    return breadthFirstHelper(this.n, queue, '');
  }

  findMaximumValue() {
    return maxValueHelper(this.head);
  }
}

function addHelper(n, queue, node) {
  if(!queue.front) return false;

  const current = queue.dequeue();
  if(current.children.length >= n) {
    current.children.forEach(child => queue.enqueue(child));
    return addHelper(n, queue, node);
  }
  
  current.children.push(node);
  return true;
}

function preOrderHelper(current, str) {
  if(!current) return '';
  if(current) str += current.value + ' ';
  current.children.every(child => str = preOrderHelper(child, str));
  return str;
}

function inOrderHelper(n, current, str) {
  if(!current) return '';
  for(let i = 0; i < n / 2; i++) {
    if(current.children[i]) str = inOrderHelper(n, current.children[i], str);
  }
  str += current.value + ' ';
  for(let i = Math.floor((n + 1) / 2); i < n; i++) {
    if(current.children[i]) str = inOrderHelper(n, current.children[i], str);
  }
  return str;
}

function postOrderHelper(current, str) {
  if(!current) return '';
  current.children.every(child => str = postOrderHelper(child, str));
  if(current) str += current.value + ' ';
  return str;
}

function breadthFirstHelper(n, queue, str) {
  if(!queue.front) return str;
  
  const current = queue.dequeue();
  current.children.forEach(child => queue.enqueue(child));
  
  str += current.value + ' ';
  return breadthFirstHelper(n, queue, str);
}

function maxValueHelper(current) {
  if(!current) return null;
  return current.children.reduce((max, child) => Math.max(max, maxValueHelper(child)), current.value);
}

module.exports = { NTree };
