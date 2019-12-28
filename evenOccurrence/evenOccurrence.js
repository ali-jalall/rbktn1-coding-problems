/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. 
Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
evenOccurrence([ 1, 3, 4, 2, 5 ]) // null

*/

// Stupid solution
// take each index and iterate over the array if matched increase some counter 
// if counter % 2 === 0 ? return element;

var evenOccurrence = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    var counter = 1;
    if (typeof element === 'object' || Array.isArray(element)) {
      for (var j = i + 1; j < arr.length; j++) {
        if (JSON.stringify(element) === JSON.stringify(arr[j + 1])) {
          arr.splice(j + 1, 1);
          j = j - 1;
          counter++;
          continue;
        }
      }
      if (counter % 2 === 0 && counter !== 0) {
        return element
      }  
    } else {
      for (var j = i; j < arr.length; j++) {
        if (arr[j + 1] === element) {
          arr.splice(j + 1, 1);
          j = j - 1;
          counter++;
          continue;
        }
      }
      if (counter % 2 === 0 && counter !== 0) {
        return element
      }
    }
  }
  return null;
}

evenOccurrence([[1,2,3], [1,2], [1,2,3]])