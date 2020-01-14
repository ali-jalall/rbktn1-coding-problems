// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
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


//  Almost Done :(
  
let level = 1;
let newObj = {};
const arrayCeption = (array) => {
  for (var i = 0; i < array.length; i++) {
    if ( !Array.isArray(array[i]) ) {
      newObj[array[i]] = level;
      continue;
    } else {
      level++;
      arrayCeption(array[i]);
    }
  }
  console.log(newObj)
  return level
}


// level++
// return level