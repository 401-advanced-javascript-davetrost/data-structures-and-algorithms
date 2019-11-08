class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  getValue() {
    return this.value;
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
    if(this.adjacencyListObj[value]) return;

    this.adjacencyListObj[value] = new GraphNode(value);
  }

  addEdge(node1, node2, weight = 0) {
    if(node1 === node2) return;

    node1.addNeighbor(node2, weight);
    node2.addNeighbor(node1, weight);
  }

  getNode(value) {
    return this.adjacencyListObj[value] || null;
  }

  getNeighbors(node) {
    return node.getNeighbors();
  }

  getNodes() {
    return Object.values(this.adjacencyListObj);
  }

  toString() {
    return Object.values(this.adjacencyListObj)
      .reduce((str, node) => `${str}\n${node.toString()}`, '');
  }

} 

module.exports = { Graph };
