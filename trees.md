# Trees

## [Binary Tree and BST Implementation]()
The following tree implementations use a Node class to store the node's value, left child and right child.

### Binary Tree Class
The BinaryTree class contains the following methods
- `preOrder` returns an array of the values, parent then children, left child first
- `inOrder` returns an array of the values, left children first, followed by the parent and then the right children
- `postOrder` returns an array of the values, parent then children, left child first

### Binary Search Tree Class
The BinarySearchTree class contains the following methods
- `add` accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- `contains` accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

### Approach and Efficiency
- `preOrder`, `inOrder` and `postOrder` all have O(n) efficiency
- `add` and `contains` both have O(log(n)) efficiency

### Tests
- [ ] Can successfully instantiate an empty tree
- [ ] Can successfully instantiate a tree with a single root node
- [ ] Can successfully add a left child and right child to a single root node
- [ ] Can successfully return a collection from a preorder traversal
- [ ] Can successfully return a collection from an inorder traversal
- [ ] Can successfully return a collection from a postorder traversal
- [ ] Ensure your tests are passing before you submit your solution.

## Stretch Goal: K-Ary Tree
Create a new branch called k-ary-tree, and, using the resources available to you online, implement a k-ary tree, where each node can have any number of children.