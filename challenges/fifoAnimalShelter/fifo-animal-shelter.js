let { LinkedList } = require('../linkedList/linked-list');

/**
 * AnimalShelter Data Structure Class implementation
 */
module.exports = class AnimalShelter {
  constructor() {
    this.queue = new LinkedList();
  }
  
  /**
   * insert an animal into the queue
   * @param {name, type} val
   * @returns {*}
   * @function enqueue
   */
  enqueue(val) {
    if(val.type !== 'cat' && val.type !== 'dog') throw 'Exception: inserted animal must have type property of "cat" or "dog"';

    const node = this.queue.append(val);
    return node.value;
  }
  
  /**
   * remove an element from the queue and return its value
   * @param {string} preference: should be one of: 'cat' or 'dog'
   * @returns {*}
   * @function dequeue
   */
  dequeue(preference) {
    if(!preference || !(preference === 'cat' || preference === 'dog')) return this.queue.dequeue();

    const returnedNode = this.queue.delete(preference, (ele, target) => ele.type === target);
    return returnedNode ? returnedNode.value : null;
  }

};

