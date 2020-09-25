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
  const result = [];

  function deepSearch(arr, count = 2) {
    // arr is array of depth level 2
    // loop over arr
    for (let elm of arr) {
      // if elm is array
      if (Array.isArray(elm)) {
        // recursion with inc count
        return deepSearch(elm, ++count);
      } else {
        // else continue
        continue;
      }
    }

    return arr[0] ? count : 0
  }

  for (let elm of arr) {
    // if elm is array
    // deepSearch(elm);
    // push count to result array
    Array.isArray(elm) ? result.push(deepSearch(elm)) : null
  }

  return result.length ? Math.max(...result) : 1;
};


//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4

console.log(arrayCeption([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]));
