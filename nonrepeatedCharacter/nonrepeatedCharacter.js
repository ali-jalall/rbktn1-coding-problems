/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var arrOfChars = string.split(''); // Create an array of the Chars
  var isNotMatched = false;
  // What i am trying to do is take each char in the array and check 
  // and iterate over the array again 
  // if matched break of the second loop and keep iterating 
  // if not matched set the value of var isNotMatched to true
  // at the end if NotMatched Is True return the elm2
  for (var i = 0; i < arrOfChars.length; i++) {
  	var elm = arrOfChars[i];
  	for(var j = 0; j < arrOfChars.length; j++){
  		var elm2 = arrOfChars[j];
  		if(elm === elm2){
  			break;
  		}
  		if(elm !== elm2){
  			isNotMatched = true;
  			continue;
  			console.log(elm, elm2)
  		}
  	}
  	if( isNotMatched ){
  		return elm2;
  	}
  }
};
