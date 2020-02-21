/*
Edit Distance
Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, 
given that the only operations can be insertion, deletion, or substitution.
Challenge: Do this in O(m x n) time, where m and n are the respective lengths of str1 and str2.



editDistance("cat", "cut") // 1

editDistance("wednesday", "sunday") // 5

editDistance("hackerrank", "hackreactor") // 6

For more information check out this article: https://en.wikipedia.org/wiki/Levenshtein_distance
*/

function editDistance(str1, str2) {
  let counter = 0;
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      counter++;
    } else {
      // for (let j = i; j < str2.length; j++) {
      //   if (str2[j] === str1[i]) {
      //     counter++;
      //   }
      // }
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      counter++;
    }
  }
  return counter
}

console.log(editDistance("cqt", "cut"))