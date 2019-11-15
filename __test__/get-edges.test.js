const { Graph } = require('../challenges/graph/graph');
const { getEdges } = require('../challenges/getEdges/get-edges');

describe('Get Edges function', () => {
  const valueA = 'Arendelle';
  const valueP = 'Pandora';
  const valueMe = 'Metroville';
  const valueMo = 'Monstropolis';
  const valueNa = 'Narnia';
  const valueNb = 'Naboo';
  
  let graph = new Graph();
  const nodeA = graph.addNode(valueA);
  const nodeP = graph.addNode(valueP);
  const nodeMe = graph.addNode(valueMe);
  const nodeMo = graph.addNode(valueMo);
  const nodeNa = graph.addNode(valueNa);
  const nodeNb = graph.addNode(valueNb);
  graph.addEdge(nodeA, nodeP, 150);
  graph.addEdge(nodeA, nodeMe, 99);
  graph.addEdge(nodeA, nodeMo, 42);
  
  graph.addEdge(nodeMe, nodeP, 82);
  graph.addEdge(nodeMe, nodeMo, 105);
  graph.addEdge(nodeMe, nodeNa, 37);
  graph.addEdge(nodeMe, nodeNb, 26);
  
  graph.addEdge(nodeNb, nodeNa, 250);
  graph.addEdge(nodeNb, nodeMo, 73);
  
  it('Finds a one-edge pathway in a graph', () => {
    expect(getEdges(graph, ['Metroville', 'Pandora'])).toEqual([true, '$82']);
  });

  it('Finds a two-edge pathway in a graph', () => {
    expect(getEdges(graph, ['Arendelle', 'Monstropolis', 'Naboo'])).toEqual([true, '$115']);
  });

  it('Knows when a pathway between 2 cities does not exist in the graph', () => {
    expect(getEdges(graph, ['Naboo', 'Pandora'])).toEqual([false, '$0']);
  });

  it('Knows when a pathway between 3 cities does not exist in the graph', () => {
    expect(getEdges(graph, ['Narnia', 'Naboo', 'Arendelle'])).toEqual([false, '$0']);
  });

});
