'use strict';

let { binarySearch } = require('../challenges/arrayBinarySearch/array-binary-search');

describe('array binary search', () => {

  it('finds an search key in the array', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toBe(2);
  });

  it('returns "-1" when the search key does not exist', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toBe(-1);
  });

});
