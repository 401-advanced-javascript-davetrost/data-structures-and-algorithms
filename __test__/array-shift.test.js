'use strict';

let {insertShiftArray, deleteShiftArray} = require('../challenges/arrayShift/array-shift');

describe('array insert shift', () => {

  it('shifts 5 into the middle position', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
  });

  it('shifts 5 into the middle position of an array with an odd number of elements', () => {
    expect(insertShiftArray([2,3,4,6,8], 5)).toEqual([2,3,4,5,6,8]);
  });

  it('shifts into an single-element array', () => {
    expect(insertShiftArray([11], 55)).toEqual([11,55]);
  });

  it('shifts into an empty array', () => {
    expect(insertShiftArray([], 55)).toEqual([55]);
  });

  it('shifts the array in-place', () => {
    const arrayInput = [1, 2, 3];
    expect(insertShiftArray(arrayInput, 99)).toBe(arrayInput);
  });

});

describe('array delete shift', () => {

  it('removes 5 from the middle position', () => {
    expect(deleteShiftArray([2,4,5,6,8])).toEqual([2,4,6,8]);
  });

  it('removes 5 from the middle position of an array with an even couunt of elements', () => {
    expect(deleteShiftArray([2,4,5,6])).toEqual([2,4,6]);
  });

  it('does not change an empty array', () => {
    expect(deleteShiftArray([])).toEqual([]);
  });

  it('modifies the array in-place', () => {
    const arrayInput = [1, 2, 3, 99];
    expect(deleteShiftArray(arrayInput)).toBe(arrayInput);
  });

});