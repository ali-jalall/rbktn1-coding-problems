/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


var allAnagrams = function(string) {
  var result = [];
  
  var anagram = function (str) {
    str = str || '';

    if (result.length === (string.length * 2)) {
      return result
    }
    
    for (var i = 0; i < string.length; i++) {
      var random = Math.floor((Math.random() * string.length));
      if (str.includes(string[random])) {
        continue;
      }
      str += string[random];
      if (str.length === string.length) {
        result.push(str)
      }
    }    

    anagram();
  }

  anagram()
  return result
};
