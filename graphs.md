# Graphs

## [Graph Class Implementation](challenges/graph/graph.js)
This class represents agraphs using an Adjacency List approach

### Methods
- `addNode()` - Adds a new node to the graph. Takes in the value of that node and returns the added node
- `addEdge()` - Adds a new edge between two nodes in the graph with a “weight”. Takes in the two nodes to be connected by the edge. Both nodes must already be in the Graph, or the funtion will return "null"
- `getNodes()` - Returns all of the nodes in the graph as an array
- `getNeighbors()` - Return all the nodes connected to the given node. Takes in a given node and returns an array of objects where each object contains the value of the neighbor node and the weight of the connection
- `size()` - Returns the total number of nodes in the graph
- `breadthFirst()` - Traverses the graph in a breadth-first order. Takes in a node to be used as the starting point for the traversal

### Approach and Efficiency
The top level of the adjacency list will be implemented with an object. This means that all node values will be converted to strings before storage, and this places a slight restriction on what the graph can store. Lookup and storage into an object occurs in constant time, so the efficiency of GetNeighbors, AddNode and AddEdge is O(1). The GetNodes method needs to traverse the entire structure, so its efficiency is O(n). The size of the graph will be stored in a class level property, so the Size method will have time efficiency of O(1).

The method `breadthFirst()` uses a recursive approach to graph traversal. There are multiple structures in use to accomplish this task:
- Graph class contains methods to get a node and to get its children
- HashTable class contains the `set` methods to track which node values have already been visited in the traversal, and the `includes` method to check if a node has already been traversed before calling the recursive algorithm on it again.
- Queue class contains `enqueue` and `dequeue` methods to keep track of which graph nodes will be next in the recursive cycle

The efficiency of `breadthFirst` starts at O(n), because all `n` nodes of the graph need to be traversed. At each node, the HashTable and Queue methods that are used have O(1) efficiency. So, the overall efficiency of the algorithm simplifies to O(n).