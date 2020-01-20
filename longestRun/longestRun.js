/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array 
containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
// Am sick of this
function longestRun(string) {
  var newObj = {};
  var longestObj = { a: 0 };
  var newArr = [];
  var i = 0
  for (var k = 0; k < string.length; k++) {
    newObj[string[k]] === undefined ? newObj[string[k]] = 1 : newObj[string[k]]++ 
  }
  
  for (var key in newObj) {
    if (newObj[key] > longestObj.a) {
      delete longestObj.a;
      longestObj[key] = newObj[key]
    }
  }

  for ( ; i < string.length; i++) {
    if (i === string.indexOf(Object.keys(longestObj).toString())) {
      newArr.push(i);
      break;
    } 
  }
  for (var j = string.length - 1; j >= 0; j--) {
    if (j === string.indexOf(Object.keys(longestObj).toString(), i)) {
      newArr.push(j);
    } 
  }
  return newArr
}
=======



>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
