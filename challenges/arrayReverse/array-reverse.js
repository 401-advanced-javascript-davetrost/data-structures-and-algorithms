function arrayReverse(arr) {
  for(let i = 0; i < (arr.length - 1) / 2; i++) {
    const mirrorI = arr.length - 1 - i;
    [arr[i], arr[mirrorI]] = [arr[mirrorI], arr[i]];
  }
  return arr;
}

module.exports = arrayReverse;