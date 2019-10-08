function fizzBuzzTree(tree) {
  preOrderHelper(tree.head, node => {
    const num = +node.value;
    if (num % 3 === 0) node.value = 'Fizz';
    if (num % 5 === 0) node.value = 'Buzz';
    if (num % 15 === 0) node.value = 'FizzBuzz';
  });
}

function preOrderHelper(current, func) {
  if(!current) return;
  if(current) func(current);
  if(current.left) preOrderHelper(current.left, func);
  if(current.right) preOrderHelper(current.right, func);
}

module.exports = {
  fizzBuzzTree,
};