/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/
function flatten(arr, result = []) {
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element, result)
    } else {
      result.push(element)
    }
  });
  return result
}

console.log(flatten([[1, 1], [4], 3, [3], 4, [6, 7]]))