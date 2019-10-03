const { Stack } = require('../stacksAndQueues/stacks-and-queues');

const getBalancingFunction = stack => ({
  '{': () => stack.push('}'),
  '[': () => stack.push(']'),
  '(': () => stack.push(')'),
  '}': () => stack.pop() === '}',
  ']': () => stack.pop() === ']',
  ')': () => stack.pop() === ')',
});
const isTrue = () => true;

module.exports = function multiBracketValidation(input) {
  const closureStack = new Stack();
  const bracketBalancer = getBalancingFunction(closureStack);
  const checkForBalancedBrackets = char => bracketBalancer[char] || isTrue;

  const isBalanced = input.split('').every(char => checkForBalancedBrackets(char)());
  return isBalanced && closureStack.top === null;
};


