// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the
// deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

// itertae over array
// if elm is array -> c++, recursion
// otherwise continue..

// for (let element of array) {
//   if (Array.isArray(element)) {
//     arrayCeption(element, ++count);
//   } else {
//     newArr.push(count);
//     count = 0;
//     continue;
//   }
// }

const arrayCeption = (array, count = 0) => {
  let sum = 0
  
  function innerIterate (arr, count) {
    if (!Array.isArray(arr)) {
      return count;
    }
    for (let elm of arr) {
      if (Array.isArray(elm)) {
        innerIterate(elm, ++count);
      } else {
        return count
      }
    }
  }

  for (let element of array) {
    if (Array.isArray(element)) {
      console.log(innerIterate(element, count))
    } else {
      continue;
    }
  }

  // console.log(sum)
}

console.log(arrayCeption([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]))