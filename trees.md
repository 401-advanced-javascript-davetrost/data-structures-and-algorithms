# Trees

## [Binary Tree and BST Implementation](challenges/tree/tree.js)
The following tree implementations use a Node class to store the node's value, left child and right child.

### Binary Tree Class - Depth First Traversal
The BinaryTree class contains the following methods for depth-first traversal
- `preOrder` returns an array of the values, parent then children, left child first
- `inOrder` returns an array of the values, left children first, followed by the parent and then the right children
- `postOrder` returns an array of the values, children first, then parent, left child first

### Binary Tree Class - Breadth First Traversal
The BinaryTree class contains the following method for breadth-first traversal
- `breadthFirst` takes a Binary Tree as its input, traverses the input tree using a Breadth-first approach and prints every visited node’s value.

### Binary Search Tree Class
The BinarySearchTree class contains the following methods
- `add` accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- `contains` accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

### Binary Search Tree Methods
- `findMaximumValue` returns the maximum value stored in the tre, assuming all values stored in the tree are numeric

### Approach and Efficiency
- `preOrder`, `inOrder` and `postOrder` all have O(n) efficiency
- `add` and `contains` both have O(log(n)) efficiency

## Stretch Goal: K-Ary Tree
Create a new branch called k-ary-tree, and, using the resources available to you online, implement a k-ary tree, where each node can have any number of children.

## [FizzBuzz Tree](challenges/fizzBuzzTree/fizz-buzz-tree.js)

### Function `fizzBuzzTree`
The function takes a tree as an argument and determines wether or not the value of each node is divisible by 3, 5 or both. The value of each node is changed as below and the tree is returned with its new values.
- If the value is divisible by 3, the value becomes “Fizz”
- If the value is divisible by 5, the value becomes “Buzz”
- If the value is divisible by 3 and 5, the value becomes “FizzBuzz”

### Approach and Efficiency
- `fizzBuzzTree` has O(n) time efficiency and O(1) space requirements
