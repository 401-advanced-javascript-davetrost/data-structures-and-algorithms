
const findNeighbor = (neighbors, node) => {
  for(let j = 0; j < neighbors.length; j++) {
    if(neighbors[j].node.value === node.value) return neighbors[j];
  }
  return null;
};

function getEdges(graph, cities) {
  if(cities.length <= 0) return [false, '$0'];

  let currentNode = graph.getNode(cities[0]);
  if(!currentNode) return [false, '$0'];
  
  let priceOfTrip = 0;
  for(let i = 1; i < cities.length; i++) {
    const nextNode = graph.getNode(cities[i]);
    if(!nextNode) return [false, '$0'];
    
    const edge = findNeighbor(graph.getNeighbors(currentNode), nextNode);
    if(!edge) return [false, '$0'];

    priceOfTrip += edge.weight;
    currentNode = edge.node;
  }

  return [true, `$${priceOfTrip}`];
}

module.exports = { getEdges };