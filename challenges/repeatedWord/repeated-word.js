const { HashTable } = require('../hashtable/HashTable');

function repeatedWord(text) {
  const words = new HashTable(40);
  let firstRepeatedWord = null;
  text.replace(/,|\.|:|;|'|"|!|\?/g, '').split(' ').every(word => {
    word = word.toLowerCase();
    if(words.includes(word)) {
      firstRepeatedWord = word;
      return false;
    }
    words.set(word, '1');
    return true;
  });
  return firstRepeatedWord;
}

module.exports = { repeatedWord };