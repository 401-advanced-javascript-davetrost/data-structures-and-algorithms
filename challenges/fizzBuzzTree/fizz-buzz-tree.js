function fizzBuzzTree(tree) {
  preOrderHelper(tree.head, node => {
    const num = +node.value;
    node.value = (num % 3 === 0) ? 'Fizz' : num;
    node.value = (num % 5 === 0) ? 'Buzz' : num;
    node.value = (num % 15 === 0) ? 'FizzBuzz' : num;
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