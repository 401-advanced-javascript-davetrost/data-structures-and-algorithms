const ListNode = require('./list-node');

/**
 * Linked List Class implementation
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  
  /**
   * insert an element into the list at the head position
   * @param {*} ele
   * @function insert
   */
  insert(ele) {
    const newHead = new ListNode(ele);
    newHead.next = this.head;
    this.head = newHead;
    return newHead;
  }

  /**
   * append an element at the tail of the list
   * @param {*} ele
   * @function append
   */
  append(ele) {
    if(this.head === null) return this.insert(ele);
    
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    const newTail = new ListNode(ele);
    newTail.next = null;
    current.next = newTail;
    return false;
  }

  /**
   * insert an element immediately before the first node with a value matching the parameter 'val'
   * @param {*} ele
   * @param {*} val
   * @returns {boolean}
   * @function insertAfter
   */
  insertAfter(ele, val) {
    let current = this.head;
    while(current !== null) {
      if(current.value === ele) {

        return true;
      }
      current = current.next;
    }
    const newHead = new ListNode(ele);
    newHead.next = this.head;
    this.head = newHead;
    return false;
  }

  /**
   * determine if an element exists in the list (at any position)
   * @param {*} ele
   * @returns {boolean}
   * @function includes
   */
  includes(ele) {
    let current = this.head;
    while(current !== null) {
      if(current.value === ele) return true;
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
    if(this.head === null) return '';
    let allValues = this.head.value;
    let current = this.head.next;
    while(current !== null) {
      allValues += ', ' + current.value;
      current = current.next;
    }
    return allValues;
  }

}

module.exports = { LinkedList };