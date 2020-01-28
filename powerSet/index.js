/*
Power Set

Return an array that contains the power set of a given string. 
The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

  1. All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
  3. Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’.

Example: 

powerSet("a") // [ "", "a" ]
powerSet("ab") // [ "", "a", "ab", "b" ]
powerSet("obama") // [ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]
powerSet("horse") // [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
*/

function powerSet(string) {
  // debugger
  let sorted = sortAlphabetically(string);
  let newArr = [];
  
  newArr.push('');
  
  for (let i = 0; i < sorted.length; i++) {
    let newString = '';
    newArr.push(sorted[i]);
    newString += sorted[i]
    
    for (let j = i + 1; j < sorted.length; j++) {
      newString += sorted[j];
      newArr.push(newString);
    }

  }
  return newArr
}


// Sort the string alphabetically remove dupilcate
// Ex: 'obama' -> "a", "b", "m", "o"

const sortAlphabetically = (string) => {
  let splitedStr = string.split('');
  let temp;
  for (let i = 0; i < splitedStr.length; i++) {
    for (let j = i + 1; j < splitedStr.length; j++) {
      if (splitedStr[i] > splitedStr[j]) {
        temp = splitedStr[i];
        splitedStr[i] = splitedStr[j]
        splitedStr[j] = temp;
      }
    }
  }
  // remove the duplicate
  let uniqe = Array.from(new Set(splitedStr))
  return uniqe
}