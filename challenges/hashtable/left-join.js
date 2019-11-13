const { HashTable } = require('./HashTable');

const leftJoin = (left, right) => {
  const joinResult = new HashTable(5);
  left.forEachHash(([key, value]) => {
    const rightVal = right.get(key);
    joinResult.set(key, [value, rightVal || null]);
  });
  return joinResult;
};

const rightJoin = (left, right) => leftJoin(right, left);

module.exports = { leftJoin, rightJoin };
