/**
 * Array Binary Search
 * @param {*} sortedArr - a sorted array, to be used for searching
 * @param {*} ele - the search key
 * @returns {*} the index of an element in the array that matches the search key, or -1 if the search key does not exist in the array
 * @function binarySearch
 */
function binarySearch(sortedArr, ele) {
  const middleIndex = Math.floor(sortedArr.length / 2);
  console.log(sortedArr, sortedArr[middleIndex], ele);
  if(ele === sortedArr[middleIndex]) return middleIndex;
  if(sortedArr.length > 2 && ele > sortedArr[middleIndex]) {
    const newArr = []; 
    for(let i = middleIndex + 1; i < sortedArr.length; i++) {
      newArr[i - middleIndex - 1] = sortedArr[i];
    }
    const newSearch = binarySearch(newArr, ele);
    if(newSearch === -1) return -1;
    return middleIndex + newSearch;
  }
  if(sortedArr.length > 1 && ele < sortedArr[middleIndex]) {
    const newArr = [];
    for(let i = 0; i < middleIndex; i++) {
      newArr[i] = sortedArr[i];
    }
    return binarySearch(newArr, ele);
  }
  return -1;
}

module.exports = { binarySearch };