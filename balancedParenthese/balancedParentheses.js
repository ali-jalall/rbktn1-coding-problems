/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

// My solution is to count the open parentheses & the close parentheses
// return the condition if they are even or no
var isBalanced = function(str) {
	var openParentheses = '(';
	var closeParentheses = ')';
	var counterOpen = 0;
	var counterClose = 0;
	if (str === '') {
		return true;
	}
	for (var i = 0; i < str.length; i++) {
		if (str[i] === openParentheses) {
			counterOpen++;
		}
		if (str[i] === closeParentheses) {
			counterClose++;
		}
	}
	return counterOpen === counterClose;
};
