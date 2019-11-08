const { Graph } = require('../challenges/graph/graph');

const valueA = 'A';
const valueB = 'B';
const valueC = 'C';
const valueD = 'D';
const valueE = 'E';
const valueF = 'F';

describe('Graph data structure', () => {
  let graph = new Graph();

  it('Can add nodes to the graph', () => {
    graph.addNode(valueA);
    expect(graph.toString()).toMatchInlineSnapshot(`
      "
      value: ${valueA} neighbors: "
    `);
    graph.addNode(valueB);
    graph.addNode(valueC);
    expect(graph.toString()).toMatchInlineSnapshot(`
      "
      value: ${valueA} neighbors: 
      value: ${valueB} neighbors: 
      value: ${valueC} neighbors: "
    `);
  });

  it('Can add edges to the graph', () => {
    const nodeA = graph.getNode(valueA);
    const nodeB = graph.getNode(valueB);

    graph.addEdge(nodeA, nodeB);
    expect(graph.toString()).toMatchInlineSnapshot(`
      "
      value: ${valueA} neighbors: ${valueB} (weight = 0) 
      value: ${valueB} neighbors: ${valueA} (weight = 0) 
      value: ${valueC} neighbors: "
    `);
  });

  it('Can add weighted edges to the graph', () => {
    graph.addNode(valueD);
    graph.addNode(valueE);
    graph.addNode(valueF);
    const nodeA = graph.getNode(valueA);
    const nodeC = graph.getNode(valueC);
    const nodeD = graph.getNode(valueD);
    const nodeF = graph.getNode(valueF);
    graph.addEdge(nodeA, nodeD, 1);
    graph.addEdge(nodeC, nodeF, 10);

    expect(graph.toString()).toMatchInlineSnapshot(`
      "
      value: ${valueA} neighbors: ${valueB} (weight = 0) ${valueD} (weight = 1) 
      value: ${valueB} neighbors: ${valueA} (weight = 0) 
      value: ${valueC} neighbors: ${valueF} (weight = 10) 
      value: ${valueD} neighbors: ${valueA} (weight = 1) 
      value: ${valueE} neighbors: 
      value: ${valueF} neighbors: ${valueC} (weight = 10) "
    `);
  });

});
