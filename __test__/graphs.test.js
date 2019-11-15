const { Graph } = require('../challenges/graph/graph');

describe('Graph data structure', () => {
  const valueA = 'A';
  const valueB = 'B';
  const valueC = 'C';
  const valueD = 'D';
  const valueE = 'E';
  const valueF = 'F';
  let graph = new Graph();

  it('Can add nodes to the graph', () => {
    graph.addNode(valueA);
    expect(graph.getNodes().length).toBe(1);
    expect(graph.toString()).toMatchInlineSnapshot(`
      "
      value: ${valueA} neighbors: "
    `);
    graph.addNode(valueB);
    graph.addNode(valueC);
    expect(graph.getNodes().length).toBe(3);
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
    expect(graph.getNeighbors(nodeA).length).toBe(0);

    graph.addEdge(nodeA, nodeB);
    expect(graph.getNeighbors(nodeA).length).toBe(1);
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

    expect(graph.getNodes().length).toBe(6);
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

  it('returns the proper size of the graph', () => {
    expect(graph.getSize()).toBe(6);
  });

  it('does not add duplicate values to the graph', () => {
    graph.addNode(valueA);
    expect(graph.getSize()).toBe(6);
  });
  
  it('returns null if the graph is empty', () => {
    graph = new Graph();
    expect(graph.getNodes()).toBe(null);
  });

  it('returns valid information when a graph contains one node and one edge', () => {
    const nodeA = graph.addNode(valueA);
    const alternateNodeA = graph.getNode(valueA);
    graph.addEdge(nodeA, alternateNodeA);
    expect(graph.toString()).toMatchInlineSnapshot(`
      "
      value: ${valueA} neighbors: "
    `);
  });

  it('traverses a graph using the breadth-first method', () => {
    graph = new Graph();
    const nodeA = graph.addNode(valueA);
    const nodeB = graph.addNode(valueB);
    const nodeC = graph.addNode(valueC);
    const nodeD = graph.addNode(valueD);
    const nodeE = graph.addNode(valueE);
    const nodeF = graph.addNode(valueF);

    graph.addEdge(nodeC, nodeF);
    expect(graph.breadthFirst(nodeC)).toBe(' C F');

    graph.addEdge(nodeC, nodeB);
    graph.addEdge(nodeC, nodeA);
    expect(graph.breadthFirst(nodeC)).toBe(' C F B A');
    graph.addEdge(nodeA, nodeB);
    expect(graph.breadthFirst(nodeC)).toBe(' C F B A');

    graph.addEdge(nodeA, nodeD);
    graph.addEdge(nodeD, nodeE);
    expect(graph.breadthFirst(nodeC)).toBe(' C F B A D E');
    graph.addEdge(nodeD, nodeC);
    expect(graph.breadthFirst(nodeC)).toBe(' C F B A D E');
  });

  it('traverses a graph using the depth-first method', () => {
    graph = new Graph();
    const nodeA = graph.addNode(valueA);
    const nodeB = graph.addNode(valueB);
    const nodeC = graph.addNode(valueC);
    const nodeD = graph.addNode(valueD);
    const nodeE = graph.addNode(valueE);
    const nodeF = graph.addNode(valueF);

    graph.addEdge(nodeC, nodeF);
    expect(graph.depthFirst(nodeC)).toBe(' C F');

    graph.addEdge(nodeC, nodeB);
    graph.addEdge(nodeB, nodeA);
    expect(graph.depthFirst(nodeC)).toBe(' C F B A');
    graph.addEdge(nodeC, nodeB);
    expect(graph.depthFirst(nodeC)).toBe(' C F B A');

    graph.addEdge(nodeA, nodeD);
    expect(graph.depthFirst(nodeC)).toBe(' C F B A D');
    graph.addEdge(nodeF, nodeE);
    expect(graph.depthFirst(nodeC)).toBe(' C F E B A D');
  });

});
