const DEFAULT_HASH_FUNCTION = size => key => {
  return key
    .split('')
    .reduce((sum, char) => {
      return sum += char.charCodeAt(0);
    }, key.charCodeAt(0))
    % size;
};

class HashTable {
  constructor(size = 20, hashAlgorithm = DEFAULT_HASH_FUNCTION) {
    this.arr = new Array(size).fill(0).map(arr => []);
    console.log(this.arr);
    
    this.hashAlgorithm = hashAlgorithm(size);
    this.size = size;
  }

  hash(key) {
    return this.hashAlgorithm(key);
  }

  findItem(key, bucket) {
    if(!bucket) bucket = this.arr[this.hash(key)];
    return bucket.find(keyValArr => keyValArr[0] === key);
  }

  includes(key) {
    return (this.findItem(key) != null);
  }

  set(key, value) {
    const bucket = this.arr[this.hash(key)];
    const item = this.findItem(key, bucket);
    if(item) item[1] = value;
    else bucket.push([key, value]);
  }

  get(key) {
    const item = this.findItem(key);
    return (item) ? item[1] : null;
  }

}

module.exports = { HashTable };