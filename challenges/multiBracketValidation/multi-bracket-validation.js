const { Stack } = require('../stacksAndQueues/stacks-and-queues');


module.exports = function multiBracketValidation(input) {

  const closureStack = new Stack();
  const balancingDictionary = {
    '{': () => closureStack.push('}'),
    '[': () => closureStack.push(']'),
    '(': () => closureStack.push(')'),
    '}': () => closureStack.pop() === '}',
    ']': () => closureStack.pop() === ']',
    ')': () => closureStack.pop() === ')',
  };

  let arr = input.split('');
  for(let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if(balancingDictionary[char] && balancingDictionary[char]() === false) return false;
  }
  return (closureStack.top === null);
};
