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

    const val = this.top.value;
    this.top = this.top.next;
    this.head = this.top;
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

module.exports = { Stack };