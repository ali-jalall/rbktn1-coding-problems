/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

var zeroSum = function (array) {
  for (var element of array) {
    var index = element;
    for (var value of array) {
      if (index + value === 0) {
        return true;
      }
    }
  }
  return false;
}

var zeroSum = function (array) {  
  if (array.length === 0) {
    return false;
  }

  for (var value of array) {
    if (array[0] + value === 0) {
      return true;
    }
  }
  
  if (zeroSum(array.slice(1))) {
    return true
  } else {
    return false;
  }
}

zeroSum([ 5, 7, 2, 9 ])

