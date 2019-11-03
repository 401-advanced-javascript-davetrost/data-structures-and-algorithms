/**
 * Array Binary Search
 * @param {*} sortedArr - a sorted array, to be used for searching
 * @param {*} ele - the search key
 * @returns {*} the index of an element in the array that matches the search key, or -1 if the search key does not exist in the array
 * @function binarySearch
 */
function binarySearch(sortedArr, ele, startIndex, endIndex) {
  if(startIndex === undefined) startIndex = 0;
  if(endIndex === undefined) endIndex = sortedArr.length - 1;
  
  const arrLength = endIndex - startIndex + 1;
  const middleIndex = startIndex + Math.floor(arrLength / 2);

  if(arrLength < 1) return -1;
  if(ele === sortedArr[middleIndex]) return middleIndex;

  if(ele > sortedArr[middleIndex]) startIndex = middleIndex + 1;
  if(ele < sortedArr[middleIndex]) endIndex = middleIndex - 1;
  return binarySearch(sortedArr, ele, startIndex, endIndex);
}

module.exports = { binarySearch };