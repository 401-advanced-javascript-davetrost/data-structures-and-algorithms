# N-Ary Trees

## [N-Ary Tree Implementation](challenges/nAryTree/n-tree.js)
This class implements a "Complete" N-Ary Tree implementation. A "complete m-ary tree" is specifically defined as a tree in which each node has 0 to 'N' children _and_ the tree is maximally space efficient. It must be completely filled on every level except for the last level. If the last level is not complete, then all nodes of the tree must be as far left as possible.

The node class used to implement this tree has a value property and a children property. An array is used to contain the child node references. The array technically has no upper bound because there is no limit to the N-dimension for N-Ary trees.

### N-Ary Tree Class Methods
The NTree class contains the following methods
- `add` accepts a value, and adds a new node with that value in the maximally space-eficient location in the tree.
- `preOrder` returns a string of the values in the tree - parent first, then children
- `inOrder` returns an array of the values, left children first, followed by the parent and then the right children. In cases where N is odd (odd number of children per node), the middle child is grouped with the left children.
- `postOrder` returns an array of the values - children first, then parent
- `breadthFirst` takes an NTree as its input, traverses the tree using a Breadth-first approach and returns a string containing every visited node’s value.

### Approach and Efficiency
- `add`, `preOrder`, `inOrder`, `postOrder` and `breadthFirst` all have O(n) efficiency
