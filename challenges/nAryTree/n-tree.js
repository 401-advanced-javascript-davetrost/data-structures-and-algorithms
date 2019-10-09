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
    return this.addHelper(queue, newNode);    
  }

  addHelper(queue, node) {
    if(!queue.front) return false;

    const current = queue.dequeue();
    if(current.children.length >= this.n) {
      current.children.forEach(child => queue.enqueue(child));
      return this.addHelper(queue, node);
    }
    
    current.children.push(node);
    return true;
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

}

function preOrderHelper(current, str) {
  if(!current) return '';
  if(current) str += current.value + ' ';
  current.children.every(child => str = preOrderHelper(child, str));
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

function breadthFirstHelper(queue, str) {
  if(!queue.front) return str;
  
  const current = queue.dequeue();
  if(current.left) queue.enqueue(current.left);
  if(current.right) queue.enqueue(current.right);
  
  str += current.value + ' ';
  return breadthFirstHelper(queue, str);
}

module.exports = { NTree };
