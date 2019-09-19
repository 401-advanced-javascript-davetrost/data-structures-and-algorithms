'use strict';

let { binarySearch } = require('../challenges/arrayBinarySearch/array-binary-search');

describe('array binary search', () => {

  it('finds an search key in the array', () => {
    expect(binarySearch([4,8,15,16,23,42], 4)).toBe(0);
    expect(binarySearch([4,8,15,16,23,42], 15)).toBe(2);
    expect(binarySearch([4,8,15,16,23,42], 42)).toBe(5);
  });

  it('returns "-1" when the search key does not exist', () => {
    expect(binarySearch([11,22,33,44,55,66], 90)).toBe(-1);
    expect(binarySearch([11,22,33,44,55,66], 0)).toBe(-1);
    expect(binarySearch([11,22,33,44,55,66], 40)).toBe(-1);
  });

});
