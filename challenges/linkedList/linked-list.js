const ListNode = require('./list-node');

/**
 * Linked List Class implementation
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  
  /**
   * insert an element into the list at the head position
   * @param {*} val
   * @returns {ListNode}
   * @function insert
   */
  insert(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    if(!this.tail) this.tail = newNode;

    this.length++;
    return newNode;
  }

  /**
   * append an element at the tail of the list
   * @param {*} val
   * @returns {ListNode}
   * @function append
   */
  append(val) {
    if(!this.head) return this.insert(val);
    
    const newNode = new ListNode(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  /**
   * remove an element from the head of the list and return its value
   * @returns {*}
   * @function dequeue
   */
  dequeue() {
    if(!this.head) throw 'Exception: empty queue has no values to dequeue';

    const val = this.head.value;
    this.head = this.head.next;
    this.length--;

    return val;
  }

  /**
   * insert an element immediately before the first node with a value matching the parameter 'val'
   * @param {*} val
   * @param {*} newVal
   * @returns {ListNode}
   * @function insertBefore
   */
  insertBefore(val, newVal) {
    if(this.head.value === val) return this.insert(newVal);

    let current = this.head;
    while(current.next) {
      if(current.next.value === val) {
        const newNode = new ListNode(newVal);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return newNode;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * insert an element immediately after the node with a value matching the parameter 'val'
   * @param {*} val
   * @param {*} newVal
   * @returns {ListNode}
   * @function insertAfter
   */
  insertAfter(val, newVal) {
    let current = this.head;
    while(current) {
      if(current.value === val) {
        const newNode = new ListNode(newVal);
        newNode.next = current.next;
        current.next = newNode;
        if(this.tail === current) this.tail = newNode;
        this.length++;
        return newNode;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * delete an element from the list. The node to be deleted is the first with a value matching the parameter 'val'
   * @param {*} val
   * @returns {ListNode}
   * @function delete
   */
  delete(val, matcher) {
    if(!matcher) matcher = (val, target) => val === target;
    if(matcher(this.head.value, val)) {
      const deletedNode = this.head;
      this.head = this.head.next ? this.head.next : null;
      this.tail = this.head ? this.tail : null;
      this.length--;
      return deletedNode;
    }

    let current = this.head;
    while(current.next) {
      if(matcher(current.next.value, val)) {
        const deletedNode = current.next;
        current.next = current.next.next;
        if(deletedNode === this.tail) this.tail = current;
        this.length--;
        return deletedNode;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * determine if an element exists in the list (at any position)
   * @param {*} val
   * @returns {boolean}
   * @function includes
   */
  includes(val) {
    let current = this.head;
    while(current) {
      if(current.value === val) return true;
      current = current.next;
    }
    return false;
  }

  
  /**
   * return a string representing all the values in the Linked List
   * @returns {string}
   * @function toString
   */
  toString() {
    if(!this.head) return '';
    let allValues = this.head.value;
    let current = this.head.next;
    while(current) {
      allValues += ', ' + current.value;
      current = current.next;
    }
    return allValues;
  }

  
  /**
   * return the value of the element that is 'k' nodes from the end of the List
   * @param {Integer} k
   * @returns {*}
   * @function kthFromEnd
   */
  kthFromEnd(k) {
    if(k < 0 || k >= this.length) throw 'Exception';

    let current = this.head;
    for(let i = 0; i < this.length - 1 - k; i++) {
      current = current.next;
    }
    return current.value;
  }

  /**
   * return the value of the element that is in the middle of the List
   * @returns {*}
   * @function getMiddle
   */
  getMiddle() {
    if(this.length <= 0) throw 'Exception';

    let current = this.head;
    for(let i = 0; i < Math.floor(this.length / 2); i++) {
      current = current.next;
    }
    return current.value;
  }

}

module.exports = { LinkedList };