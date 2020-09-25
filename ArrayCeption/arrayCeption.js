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

const arrayCeption = (arr) => {
  let result = [];

  function deepSearch(arr, count = 2) {
    // arr is array of depth level 2
    // loop over arr
    for (let i = 0; i < arr.length; i++) {
      // if arr[i] is array
      if (Array.isArray(arr[i])) {
        // recursion with inc count
        return deepSearch(arr[i], ++count);
      } else {
        // else continue
        continue;
      }
    }

    return arr[0] ? count : 0
  }

  for (let i = 0; i < arr.length; i++) {
    // if arr[i] is array
    // deepSearch(arr[i]);
    // push count to result array
    Array.isArray(arr[i]) ? result.push(deepSearch(arr[i])) : null
  }

  return result.length ? Math.max(...result) : 1;
};


//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4

console.log(arrayCeption([ [ [ ] ] ]));
