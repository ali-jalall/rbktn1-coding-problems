/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  var newArr = []; // Variable to save the Result
  var elm; // Var to save each elm in the Arr
  var firstArr = string1.split('');
  var secondArr = string2.split('');  
  // First we iterate Over the Arr
  for(var i = 0; i < firstArr.length; i++){
  	// Save Each element inside elm variable
  	elm = firstArr[i];
  		// So here we check if our new Array includes the elm ?? and check if the element is a space ' '
  		// If so that means that we already pushed that element so we don't need to push it again
  		// and the empty string we don't need to push it
  		// So Continue Iterating
	  	if(newArr.includes(elm) || elm === ' '){
				continue;
			}
			// And If the second array contains our elm
			if(secondArr.includes(elm)){
				// Push it
				newArr.push(elm);
			}
  }

  return newArr.join('')
};
