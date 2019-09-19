# data-structures-and-algorithms

## [Array reverse](challenges/arrayReverse/array-reverse.js)

The challenge is to reverse the order of the elements in a given array (basically, to implement Array.Prototype.reverse()).

I took the aproach to reverse the array 'in-place'. My solution runs in O(n/2) time (linear) and uses O(1) space (constant).

## [Array shift](challenges/arrayShift/array-shift.js)

The challenge is to take in an array and a value to be added. The function returns an array with the new value added at the middle index.

A second function removes an element from the middle index and shifts other elements in the array to fill the new gap.

I took the approach to shift the array 'in-place'. My solution runs in O(n/2) time (linear) and uses O(1) space (constant).

## [Array Binary Search](challenges/arrayBinarySearch/array-binary-search.js)

The challenge is to search a sorted array for a given search key. The function will return the index of the array’s element that is equal to the search key, or -1 if the element does not exist. None of the built-in methods will be used. 

The binary search algorithm results in time performance of O(log n) or logarithmic time.

I initially created a new array to run subsequent recursive calls to binary search. However, this is space inefficient. I refactored the code to always use the original array (even in the recursive calls). This results in memory performance of O(1) or constant memory usage.

### [Runtime Tests](index.js)

This script benchmarks the performance of Array Binary Search against varying array sizes of 100, 10000 and 100000 elements.

Before refactoring for constant memory usage, the time to perform 1000 searches in an array with 100,000 elements was around 870ms. 
After refactoring, the time to perform 1000 searches in the same array dropped to around 0.45ms. 
