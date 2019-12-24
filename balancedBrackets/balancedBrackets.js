/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/


var isBalanced = function(str) {
  // debugger;
  var parenthesis = '(';
  var parenthesisClose = ')';
  var brackets = '[';
  var bracketsClose = ']';
  var curly = '{';
  var curlyClose = '}';

  var isBalanced = false;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === parenthesis) {
      for (var j = i; j < str.length; j++) {
        if (str[j] === bracketsClose || str[j] === curlyClose) {
          return false;
        }
      }
      if ( str.includes(parenthesisClose, i) ) {
        isBalanced = true;
      } else {
        return false
      }
    }
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === brackets) {
      for (var j = i; j < str.length; j++) {
        if (str[j] === parenthesisClose || str[j] === curlyClose) {
          return false;
        }
      }
      if ( str.includes(bracketsClose, i) ) {
        isBalanced = true;
      } else {
        return false
      }
    }
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === curly) {
      for (var j = i; j < str.length; j++) {
        if (str[j] === parenthesisClose || str[j] === bracketsClose) {
          return false;
        }
      }
      if ( str.includes(curlyClose, i) ) {
        isBalanced = true;
      } else {
        return false
      }
    }
  }

  return isBalanced;
};

isBalanced("[{]}")
