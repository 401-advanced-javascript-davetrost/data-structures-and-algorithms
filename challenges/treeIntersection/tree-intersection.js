const Set = require('../setClass/Set');

function treeIntersection(tree1, tree2) {
  const set = new Set();
  const tree1StringValues = tree1.preOrder();
  tree1StringValues.split(' ').forEach(value => {
    if(tree2.contains(value)) set.add(value);
  });
  return set;
}

module.exports = { treeIntersection };
