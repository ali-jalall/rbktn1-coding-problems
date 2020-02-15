/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function(x, y) {
  let result = 0;
  for (let i = 1; i <= y; i++) {
    result += x;
  }
  return result
};


var divide = function(x, y) {
  let count = 1;
  for (let i = 0; i < x; i++) {
    x -= y;
    count++;
  }
  return count;
};

var modulo = function(x, y) {
  let i = 0;
  while (i < x) {
    x -= y;
    i++
  }
  return x
};

console.log(divide(50, 10))