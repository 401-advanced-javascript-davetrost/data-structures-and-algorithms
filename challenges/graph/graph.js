const { Queue } = require('../stacksAndQueues/stacks-and-queues');
const { HashTable } = require('../hashtable/HashTable');

class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  toString() {
    const valueString = `${this.value}`;
    let neighborsString = '';
    for(let i = 0; i < this.neighbors.length; i++) {
      neighborsString += `${this.neighbors[i].node.value} (weight = ${this.neighbors[i].weight}) `;
    }
    return `value: ${valueString} neighbors: ${neighborsString}`;
  }

  getNeighbors() {
    return this.neighbors;
  }

  addNeighbor(neighbor, weight) {
    if(this.neighbors.find(node => node.value === neighbor.value)) return;

    this.neighbors.push({ node: neighbor, weight });
  }
}

class Graph {
  constructor() {
    this.size = 0;
    this.adjacencyListObj = {};
  }

  addNode(value) {
    if(this.adjacencyListObj[value]) return null;

    this.size++;
    this.adjacencyListObj[value] = new GraphNode(value);
    return this.adjacencyListObj[value];
  }

  addEdge(node1, node2, weight = 0) {
    if(node1 === node2) return;

    node1.addNeighbor(node2, weight);
    node2.addNeighbor(node1, weight);
  }

  getNode(value) {
    return this.adjacencyListObj[value] || null;
  }

  getSize() {
    return this.size;
  }

  getNeighbors(node) {
    return node.getNeighbors();
  }

  getNodes() {
    if(this.size === 0) return null;

    return Object.values(this.adjacencyListObj);
  }

  toString() {
    return Object.values(this.adjacencyListObj)
      .reduce((str, node) => `${str}\n${node.toString()}`, '');
  }

  breadthFirst(node) {
    const nodesToVisit = new Queue();
    const visitedNodes = new HashTable();
    nodesToVisit.enqueue(node.value);
    return this.breadthFirstHelper(nodesToVisit, visitedNodes, '');
  }
  breadthFirstHelper(nodesToVisit, visitedNodes, breadthFirstValuesStr) {
    while(nodesToVisit.front) {
      const currentVal = nodesToVisit.dequeue();
      
      if(!visitedNodes.includes(currentVal)) {
        this.getNeighbors(this.getNode(currentVal)).forEach(neighbor => {
          if(!visitedNodes.includes(neighbor.node.value)) {
            nodesToVisit.enqueue(neighbor.node.value);
          }
        });

        breadthFirstValuesStr += ' ' + currentVal;
        visitedNodes.set(currentVal, true);
        return this.breadthFirstHelper(nodesToVisit, visitedNodes, breadthFirstValuesStr);
      }
    }
    return breadthFirstValuesStr;
  }

  depthFirst(node) {
    const visitedNodes = new HashTable();
    return this.depthFirstHelper(node, visitedNodes, '');
  }
  depthFirstHelper(currentNode, visitedNodes, depthFirstValuesStr) {
    const currentVal = currentNode.value;
    if(!visitedNodes.includes(currentVal)) {

      depthFirstValuesStr += ' ' + currentVal;
      visitedNodes.set(currentVal, true);
      
      this.getNeighbors(currentNode).forEach(({ node }) => {
        depthFirstValuesStr = this.depthFirstHelper(node, visitedNodes, depthFirstValuesStr);
      });
    }
    return depthFirstValuesStr;
  }

} 



module.exports = { Graph };
