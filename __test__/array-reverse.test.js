'use strict';

let arrayReverse = require('../challenges/arrayReverse/array-reverse');

describe.skip('array reverse', () => {

  it('reverses a short array', () => {
    expect(arrayReverse([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it('reverses a longer array', () => {
    const arrayInput = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
    const expected = [199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2];
    expect(arrayReverse(arrayInput)).toEqual(expected);
  });

  it('returns an empty array if there is no input', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it('reverses the array in-place', () => {
    const arrayInput = [1, 2, 3];
    expect(arrayReverse(arrayInput)).toBe(arrayInput);
  });

});