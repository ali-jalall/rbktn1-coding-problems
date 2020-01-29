/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  // Word to be the exact chars front and backward
  let forward = [];
  let backward = [];
  let splited = string.split(' ');

  for (let i = 0; i < string.length; i++) {
    forward.push(string[i])
  }

  for (let i = string.length - 1; i >= 0; i--) {
    backward.push(string[i])
  }

  // console.log(forward.includes(splited[0]))
  console.log(splited[0])

  console.log(`Forward: ${forward.join('')}`)
  console.log(`Backward: ${backward.join('')}`)
}
