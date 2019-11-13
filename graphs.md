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

## [Get Edges Challenge](challenges/getEdges/get-edges.js)
- `getEdges()` takes in a graph and an array of city names. Upon completion, the function returns whether or not the full trip is possible with direct flights (true/false), and how much it would cost (sum of graph edge weights or $0 if the trip is not possible).

### Approach and Efficiency
The top level of the algorithm has to loop through the provided array. At each node of the array, the node in the graph which contains the city listed in the array must be found. The first node only has to exist. Subsequent nodes must exist in the neighbors list of the previously located node. For each node that is located in the neighbors list, the weight from the neighbors list will be added to a top-level accumulator variable. If one of the array values is not found in the neighbors list, the function will immediately return false and $0 for the trip price. Otherwise, the function returns true and returns the value of the accumulator.

The graph functions that will be used by the getEdges algorithm have O(1) efficiency. However, the array provided to the function could have a large number of elements. So, the eficiency of `getEdges()` is O(k) where k is the length of the array of city names.
