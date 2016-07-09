const DataStructures = require('algorithms').DataStructures;
const Stack = DataStructures.Stack;

const pair = function pair(input) {
  const stack = new Stack;

  for (let i = 0; i < input.length; i ++) {
    const ying = { '[': ']', '{': '}', '(': ')' };
    const yang = input[i];

    if (ying[yang]) {
      stack.push(yang);
    } else if (ying[stack.pop()] !== yang) {
      return false;
    }
  }
  return stack.length !== true;
};

console.log(pair('{}((((()))))'));
console.log(pair('[()]{}{[()()]()}'));
console.log(pair('{[[](]}][[))))))]]'));
