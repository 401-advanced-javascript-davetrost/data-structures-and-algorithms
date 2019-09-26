'use strict';

let { LinkedList } = require('../challenges/linkedList/linked-list');
let { mergeLists, mergeAndSortLists } = require('../challenges/linkedList/ll-merge');
let llA, llB;

const value1 = '1';
const value2 = '2';
const value3 = '3';
const value4 = '4';
const value5 = '5';
const value6 = '6';

describe('Merge Linked Lists', () => {

  it('Can merge two unsorted lists of equal length', () => {
    llA = new LinkedList();
    llA.append(value1);
    llA.append(value2);
    llA.append(value3);
    llB = new LinkedList();
    llB.append(value4);
    llB.append(value5);
    llB.append(value6);
    expect(llA.toString()).toBe(`${value1}, ${value2}, ${value3}`);
    expect(llB.toString()).toBe(`${value4}, ${value5}, ${value6}`);
    mergeLists(llA, llB);
    expect(llA.toString()).toBe(`${value1}, ${value4}, ${value2}, ${value5}, ${value3}, ${value6}`);
  });

  it('Can merge lists of un-equal lengths', () => {
    llA = new LinkedList();
    llA.append(value1);
    llB = new LinkedList();
    llB.append(value4);
    llB.append(value5);
    llB.append(value6);
    expect(llA.toString()).toBe(`${value1}`);
    expect(llB.toString()).toBe(`${value4}, ${value5}, ${value6}`);
    mergeLists(llA, llB);
    expect(llA.toString()).toBe(`${value1}, ${value4}, ${value5}, ${value6}`);
    llA = new LinkedList();
    llA.append(value1);
    llA.append(value2);
    llA.append(value3);
    llB = new LinkedList();
    llB.append(value4);
    expect(llA.toString()).toBe(`${value1}, ${value2}, ${value3}`);
    expect(llB.toString()).toBe(`${value4}`);
    mergeLists(llA, llB);
    expect(llA.toString()).toBe(`${value1}, ${value4}, ${value2}, ${value3}`);
  });

  it('Can merge lists where one or both are empty', () => {
    llA = new LinkedList();
    llB = new LinkedList();
    llB.append(value4);
    llB.append(value5);
    llB.append(value6);
    expect(llA.toString()).toBe(``);
    expect(llB.toString()).toBe(`${value4}, ${value5}, ${value6}`);
    mergeLists(llA, llB);
    expect(llA.toString()).toBe(`${value4}, ${value5}, ${value6}`);
    llA = new LinkedList();
    llB = new LinkedList();
    expect(llA.toString()).toBe(``);
    expect(llB.toString()).toBe(``);
    mergeLists(llA, llB);
    expect(llA.toString()).toBe(``);
  });
});


describe('Merge and Sort Linked Lists', () => {
  it('Can merge and sort lists of equal length', () => {
    llA = new LinkedList();
    llA.append(value1);
    llA.append(value2);
    llA.append(value3);
    llB = new LinkedList();
    llB.append(value4);
    llB.append(value5);
    llB.append(value6);
    expect(llA.toString()).toBe(`${value1}, ${value2}, ${value3}`);
    expect(llB.toString()).toBe(`${value4}, ${value5}, ${value6}`);
    mergeAndSortLists(llA, llB);
    expect(llA.toString()).toBe(`${value1}, ${value2}, ${value3}, ${value4}, ${value5}, ${value6}`);
  });

  it('Can merge and sort lists of un-equal lengths', () => {
    llA = new LinkedList();
    llA.append(value6);
    llB = new LinkedList();
    llB.append(value1);
    llB.append(value4);
    llB.append(value5);
    expect(llA.toString()).toBe(`${value6}`);
    expect(llB.toString()).toBe(`${value1}, ${value4}, ${value5}`);
    mergeAndSortLists(llA, llB);
    expect(llA.toString()).toBe(`${value1}, ${value4}, ${value5}, ${value6}`);
    llA = new LinkedList();
    llA.append(value1);
    llA.append(value2);
    llA.append(value3);
    llB = new LinkedList();
    llB.append(value4);
    expect(llA.toString()).toBe(`${value1}, ${value2}, ${value3}`);
    expect(llB.toString()).toBe(`${value4}`);
    mergeAndSortLists(llA, llB);
    expect(llA.toString()).toBe(`${value1}, ${value2}, ${value3}, ${value4}`);
  });

  it('Can merge and sort lists where one or both are empty', () => {
    llA = new LinkedList();
    llB = new LinkedList();
    llB.append(value4);
    llB.append(value5);
    llB.append(value6);
    expect(llA.toString()).toBe(``);
    expect(llB.toString()).toBe(`${value4}, ${value5}, ${value6}`);
    mergeAndSortLists(llA, llB);
    expect(llA.toString()).toBe(`${value4}, ${value5}, ${value6}`);
    llA = new LinkedList();
    llB = new LinkedList();
    expect(llA.toString()).toBe(``);
    expect(llB.toString()).toBe(``);
    mergeAndSortLists(llA, llB);
    expect(llA.toString()).toBe(``);
  });

  it('can fail gracefully when  the incoming lists are not sorted', () => {
    llA = new LinkedList();
    llB = new LinkedList();
    llB.append(value4);
    llB.append(value1);
    expect(() => mergeAndSortLists(llA, llB).toThrow(expect.matches(/exception/i)));
  });

});


