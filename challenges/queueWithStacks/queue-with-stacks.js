let { Stack } = require('../stacksAndQueues/stacks-and-queues');

/**
 * Pseudo-Queue Data Structure Class implementation
 */
class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }
  
  /**
   * append an element into the queue
   * @param {*} val
   * @returns {*}
   * @function enqueue
   */
  enqueue(val) {
    const node = this.inStack.push(val);
    return node.value;
  }
  
  /**
   * remove an element from the queue and return its value
   * @returns {*}
   * @function dequeue
   */
  dequeue() {
    if(!this.outStack.top) {
      if(!this.inStack.top) throw 'Exception: empty queue has no values to dequeue';

      // pop all inStack items, pushing each one - except the last one - to the outStack
      let val = this.inStack.pop();
      while(this.inStack.top) {
        this.outStack.push(val);
        val = this.inStack.pop();
      }
      return val;
    }

    return this.outStack.pop();
  }

  /**
   * return a string representing all the values in the Linked List
   * @returns {string}
   * @function toString
   */
  toString() {
    let allValues = '';

    let current = this.outStack.head;
    while(current) {
      allValues += ', ' + current.value;
      current = current.next;
    }

    const recurseBackwards = (current) => {
      if(current) {
        return recurseBackwards(current.next) + ', ' + current.value;
      }
      else {
        return '';
      }
    };
    
    allValues += recurseBackwards(this.inStack.head);
    return allValues.slice(2);
  }

}

module.exports = { PseudoQueue };