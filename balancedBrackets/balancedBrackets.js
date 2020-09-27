/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid
in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/


const bracketsObject = {
  '[': ']',
  '{': '}',
  '(': ')',
  ']': '[',
  '}': '{',
  ')': '(',
};


function isBalanced(str) {
  let isBalanced = true;
  // 1- Split str into arr
  // 2- filter arr to keep only brackets and join as string.
  str = str.split('').filter((val) => (bracketsObject[val])).join('');

  for (let i = 0; i < str.length; i++) {
    // if the brackets at this index === the closing of this brackets ? continue;
    if (bracketsObject[str[i]] === str[str.length - (i + 1)]) {
      continue
    } else {
      // If not it means we have a flow in our string so return false
      return false
    }
  }

  return isBalanced;
};

console.log(isBalanced("(x + y) - (4)")) // true
console.log(isBalanced("(((10 ) ()) ((?)(:)))")) // true
console.log(isBalanced("[{()}]")) // true
console.log(isBalanced("(50)(")) // false
console.log(isBalanced("[{]}")) // false
console.log(isBalanced("[{{[]}}]")) // true