const { Graph } = require('./challenges/graph/graph');
const { getEdges } = require('./challenges/getEdges/get-edges');

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

console.log(graph.toString());

console.log( getEdges(graph, ['Metroville', 'Pandora']) );
console.log( getEdges(graph, ['Arendelle', 'Monstropolis', 'Naboo']) );
console.log( getEdges(graph, ['Naboo', 'Pandora']) );
console.log( getEdges(graph, ['Narnia', 'Naboo', 'Arendelle']) );
