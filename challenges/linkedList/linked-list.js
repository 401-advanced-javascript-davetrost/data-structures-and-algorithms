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
   * @param {*} val
   * @function insert
   */
  insert(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }

  /**
   * append an element at the tail of the list
   * @param {*} val
   * @function append
   */
  append(val) {
    if(this.head === null) return this.insert(val);
    
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    const newNode = new ListNode(val);
    newNode.next = null;
    current.next = newNode;
    return false;
  }

  /**
   * insert an element immediately before the first node with a value matching the parameter 'val'
   * @param {*} val
   * @param {*} newVal
   * @returns {boolean}
   * @function insertBefore
   */
  insertBefore(val, newVal) {
    if(this.head.value === val) return this.insert(newVal);

    let current = this.head;
    while(current.next !== null) {
      if(current.next.value === val) {
        const newNode = new ListNode(newVal);
        newNode.next = current.next;
        current.next = newNode;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * insert an element immediately after the node with a value matching the parameter 'val'
   * @param {*} val
   * @param {*} newVal
   * @returns {boolean}
   * @function insertAfter
   */
  insertAfter(val, newVal) {
    let current = this.head;
    while(current !== null) {
      if(current.value === val) {
        const newNode = new ListNode(newVal);
        newNode.next = current.next;
        current.next = newNode;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * delete an element from the list. The node to be deleted is the first with a value matching the parameter 'val'
   * @param {*} val
   * @returns {boolean}
   * @function delete
   */
  delete(val) {
    if(this.head.value === val) {
      this.head = this.head.next === null ? null : this.head.next;
      return true;
    }

    let current = this.head;
    while(current.next !== null) {
      if(current.next.value === val) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * determine if an element exists in the list (at any position)
   * @param {*} val
   * @returns {boolean}
   * @function includes
   */
  includes(val) {
    let current = this.head;
    while(current !== null) {
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