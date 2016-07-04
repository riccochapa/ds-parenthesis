var DataStructures = require('algorithms').DataStructures;
var Stack = DataStructures.Stack;

var pair = function(input) {
  var stack = new Stack;

  for (var i = 0; i < input.length; i ++) {
    var ying = {'[':']','{':'}','(':')'};
    var yang = input[i];

    if (ying[yang]){
      stack.push(yang);
    }
    else if (ying[stack.pop()] !== yang){
      return false;
    }
  }
  return stack.length != true;
};

console.log(pair('{}((((()))))'));
console.log(pair('[()]{}{[()()]()}'));
console.log(pair('{[[](]}][[))))))]]'));
