'use strict';

let insertShiftArray = require('../challenges/arrayShift/array-shift');

describe('array shift', () => {

  it('shifts 5 into the middle position', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
  });

  it('shifts into an empty array', () => {
    expect(insertShiftArray([], 55)).toEqual([55]);
  });

  it('shifts the array in-place', () => {
    const arrayInput = [1, 2, 3];
    expect(insertShiftArray(arrayInput, 99)).toBe(arrayInput);
  });

});