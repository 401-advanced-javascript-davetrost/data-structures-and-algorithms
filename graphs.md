# Graphs

## [Graph Class Implementation](challenges/graph/graph.js)
This class represents agraphs using an Adjacency List approach

### Methods
- `AddNode()` - Adds a new node to the graph. Takes in the value of that node and returns the added node
- `AddEdge()` - Adds a new edge between two nodes in the graph with a “weight”. Takes in the two nodes to be connected by the edge. Both nodes must already be in the Graph, or the funtion will return "null"
- `GetNodes()` - Returns all of the nodes in the graph as an array
- `GetNeighbors()` - Return all the nodes connected to the given node. Takes in a given node and returns an array of objects where each object contains the value of the neighbor node and the weight of the connection
- `Size()` - Returns the total number of nodes in the graph

### Approach and Efficiency
The top level of the adjacency list will be implemented with an object. This means that all node values will be converted to strings before storage, and this places a slight restriction on what the graph can store. Lookup and storage into an object occurs in constant time, so the efficiency of GetNeighbors, AddNode and AddEdge is O(1). The GetNodes method needs to traverse the entire structure, so its efficiency is O(n). The size of the graph will be stored in a class level property, so the Size method will have time efficiency of O(1).
