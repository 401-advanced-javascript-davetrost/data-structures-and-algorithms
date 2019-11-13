# Hash Table Data Structure

## [Hash Table Class](challenges/hashtable/hashtable.js)
This class implements JavaScript's Object data structure without utilizing any of the built-in object methods. The underlying implementation is an array of arrays. The outer array is indexed by the hash value of the key. The inner array is a list of values that correspond to the same hash-key. The inner array is needed in case of collisions between hash keys. The leaf object is a 2-item array containing the key and the value of the original item.

The class contains the following methods:
- `set` takes in both the key and value. This method stores the key and value in the correct location in the table (as determined by the hashing algorithm) and either updates the existing key and value pair or adds them, handling collisions as needed.
- `get` takes in the key and returns the value from the table.
- `contains` takes in the key and returns a boolean, indicating if the key exists in the table already.
- `hash` takes in an arbitrary key and returns an index in the collection.

### Approach and Efficiency
- all functions are intended to approach O(1) efficiency, but this particular hash table implementation is not dynamically scalable in its memory allocation, and the size must be provided upon instantiation of the object.

## [Repeated Word Function](challenges/repeatedWord/repeated-word.js)
This function uses the Hash Table class to return the first word that occurs more than once in a provided string. 

### Approach and Efficiency
- The approach for this function is to split the text into an array of words. Traverse the array and put each word into an instance of HashTable. If the word already existed in the HashTable before insertion, stop traversing and return the repeated word.
- The efficiency of this approach is O(n), under the assumption that HashTable's efficiency approaches constant time.

## LEFT/RIGHT Join
- `leftJoin()` is a function that LEFT JOINs two hashmaps into a single data structure. 
  - The first parameter is a hashmap that has word strings as keys word strings as values.
  - The second parameter is a hashmap that has overlapping word strings as keys, and different word strings as values. 
  - This function combines the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic. LEFT JOIN means all the values in the first hashmap are returned, and, if values exist for a matching key in the “right” hashmap, they are appended to the result value. If no values exist at the matching key in the right hashmap, `null` is appended to the result value.
- `rightJoin()` is a function that utilized code re-use to attain the RIGHT JOIN functionality, when given two hash maps as input.
