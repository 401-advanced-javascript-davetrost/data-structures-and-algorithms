const { LinkedList } = require('../linkedList/linked-list');

/**
 * Stack Data Structure Class implementation
 */
class Stack extends LinkedList {
  constructor() {
    super();
    this.top = this.head;
  }

  /**
   * insert an element into the stack at the top position
   * @param {*} val
   * @returns {ListNode}
   * @function push
   */
  push(val) {
    const node = this.insert(val);
    this.top = this.head;
    return node;
  }

  /**
   * remove an element from the top position of the stack and return its value
   * @returns {*}
   * @function pop
   */
  pop() {
    if(!this.top) throw 'Exception: empty stack has no values to pop';
    
    const val = this.head.value;
    this.head = this.head.next;
    this.top = this.head;
    this.length--;
    return val;
  }

  /**
   * return the value of the element at the top position of the stack
   * @returns {*}
   * @function peek
   */
  peek() {
    if(!this.top) throw 'Exception: empty stack has no values to peek';

    return this.top.value;
  }

}

/**
 * Queue Data Structure Class implementation
 */
class Queue extends LinkedList {
  constructor() {
    super();
    this.front = this.head;
    this.back = this.tail;
  }
  
  /**
   * append an element into the queue at the back position
   * @param {*} val
   * @returns {ListNode}
   * @function enqueue
   */
  enqueue(val) {
    const node = this.append(val);

    this.front = this.head;
    this.back = this.tail;
    return node;
  }
  
  /**
   * remove an element from the front position of the stack and return its value
   * @returns {*}
   * @function dequeue
   */
  dequeue() {
    if(!this.front) throw 'Exception: empty queue has no values to dequeue';

    const val = this.head.value;
    this.head = this.head.next;
    this.length--;

    this.front = this.head;
    this.back = this.tail;
    return val;
  }

  /**
   * return the value of the element at the front position of the queue
   * @returns {*}
   * @function peek
   */
  peek() {
    if(!this.front) throw 'Exception: empty stack has no values to peek';

    return this.front.value;
  }

}

module.exports = { Stack, Queue };