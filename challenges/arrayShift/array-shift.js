/**
 * Array Shift Insert
 * @param {*} arr - the array to be shifted
 * @param {*} ele - the element  to be inserted into the array
 * @returns {*} the array, modified in-place, with one new element inserted at the middle position
 * @function insertShiftArray
 */
function insertShiftArray(arr, ele) {
  for(let i = arr.length; i > arr.length / 2; i--) {
    arr[i] = arr[i - 1];
  }
  arr[Math.floor(arr.length / 2)] = ele;
  return arr;
}

/**
 * Array Shift Delete
 * @param {*} arr - the array to be shifted
 * @returns {*} the array, modified in-place, with the middle-most element removed and the array length decreased
 * @function deleteShiftArray
 */
function deleteShiftArray(arr, ele) {
  for(let i = Math.floor(arr.length / 2); i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = Math.max(0, arr.length - 1);
  return arr;
}

module.exports = {
  insertShiftArray,
  deleteShiftArray,
};