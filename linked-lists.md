# Linked Lists

## [Singly Linked List](challenges/linkedList/linked-list.js)

Create a Node class and a LinkedList class. Upon instantiation, an empty Linked List should be created. It should have the following methods:
- insert(): it takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- includes(): it takes any value as an argument and returns true if that value exists somewhere in the list.
- toString(): returns a string representing all the values in the Linked List.

Catch and handle any exceptions and return a printed value or operation which cleanly represents the state. Either stop the execution cleanly, or provide the user with clear direction and output.

### Approach & Efficiency

- insert(): has space efficiency of O(1) and time performance of O(1)
- includes(): has no space requirements and time performance of O(n)
- toString(): has no space requirements and time performance of O(n)

## [Linked List Insertions](challenges/linkedList/linked-list.js)

Write and test 3 new methods for the Linked List class. 
1. `append(value)` adds a new node with the given value to the end of the list
1. `insertBefore(value, newVal)` adds a new node with the given newValue immediately before the first found node with value of `value`
1. `insertAfter(value, newVal)` adds a new node with the given newValue immediately after the first found node with value of `value`

The stretch goal is to write a Delete method for the Linked List class. `delete(value)` removes a node from the linked list. The node removed is the first found node with value of `value`.

### Approach & Efficiency

- append(): has space efficiency of O(1) and time performance of O(n)
- insertBefore(): has space efficiency of O(1) and time performance of O(n)
- insertAfter(): has space efficiency of O(1) and time performance of O(n)
- delete(): has space efficiency of O(1) and time performance of O(n)

## [Linked List Find Kth from End](challenges/linkedList/linked-list.js)

Write a method named `kthFromEnd()` for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k elements from the end of the linked list. Write tests to check the functionality of the method.

### Approach & Efficiency

Adding a length property and a tail property to the linked list class improved the simplicity of the code for kthFromEnd(). It also improved the performance of append()
- append(): has space efficiency of O(1) and time performance improved from O(n) to **O(1)**
- kthFromEnd(): has space efficiency of O(1) and time performance of O(n)

## [Merge Linked Lists](challenges/linkedList/llMerge.js)

The `mergeLists()` function takes two linked lists as arguments. On completion, the two linked lists will be "zippered" together so that the nodes alternate between the two lists. To acheive a space efficiency of O(1), the node pointers will be modified in-place, and this is a destructive operation. The head of the first list argument will be used as the head of the resulting list.

Another function, `mergeAndSortLists()` works in a similar manner, except the output list will be sorted lexically. In order to accomplish this, the incoming lists are required to be sorted.

### Approach & Efficiency

Both functions have a space efficiency of O(1) and a time performance of O(n)

## [Stacks and Queues](challenges/stacksAndQueues/stacks-and-queues.js)

### The Stack Class

The Stack class has a primary pointer (property) named "top". It creates an empty Stack when instantiated. The Stack class has the following methods:
- `push` takes any value as an argument and adds a new node with that value to the top of the stack
- `pop` removes the node from the top of the stack, and returns the node’s value.
- `peek` returns the value of the node located on top of the stack without removing it from the stack.

### The Queue Class

The Queue class has a primary pointer named "front" that indicates the node at the front of the queue. It creates an empty Queue when instantiated. This class has the following methods:
- `enqueue` takes any value as an argument and adds a new node with that value to the back of the queue
- `dequeue` removes the node from the front of the queue, and returns the node’s value.
- `peek` returns the value of the node located in the front of the queue, without removing it from the queue.

### Approach & Efficiency

All functions have a space efficiency of O(1) and a time performance of O(1)

## [Queue with Stacks](challenges/queueWithStacks/queue-with-stacks.js)

### The PseudoQueue Class

This PseudoQueue class implements a standard queue interface, but internally utilizes 2 Stack objects. It has the following methods:
- `enqueue` inserts value into the PseudoQueue, using a first-in, first-out approach.
- `dequeue` extracts a value from the PseudoQueue, using a first-in, first-out approach.

### Approach & Efficiency

- `enqueue` has time performance of O(1)
- `dequeue` has worst-case time performance of O(n).

## [Animal Shelter](challenges/fifoAnimalShelter/fifo-animal-shelter.js)

AnimalShelter is a class that holds dogs and cats. The shelter operates FIFO ordering.
- `enqueue(animal)` adds an animal to the shelter. The animal must be either a dog or a cat object.
- `dequeue(preference)` returns either a dog or a cat. If `preference` is not "dog" or "cat", the function returns null.
  - If a cat or dog isn’t preferred, whichever animal has been waiting in the shelter the longest will be returned

### Approach & Efficiency

- `enqueue(animal)` has time performance of O(1)
- `dequeue(preference)` has worst-case time performance of O(n).

## [Multi Bracket Validation](challenges/multiBracketValidation/multi-bracket-validation)

`multiBracketValidation(input)` takes a string as its only argument and returns a boolean representing whether or not the brackets in the string are balanced. The function considers the following 3 types of brackets:
- Round Brackets : ()
- Square Brackets : []
- Curly Brackets : {}

### Approach & Efficiency

- `multiBracketValidation(input)` has time performance of O(n)

