/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. 
A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

const nestedWordCount = (words) => {
  let obj = {};
  let result = "";
  let acc = 0;
  for (let i = 0; i < words.length; i++) {
    obj[words[i]] = 0;
    for (let j = 0; j < words.length; j++) {
      if (words[i].includes(words[j])) {
        obj[words[i]]++;
        if (obj[words[i]] > acc) {
          acc = obj[words[i]];
          result = words[i];
        }
      }
    }
  }
  return result;
};

console.log(nestedWordCount(["gray", "grays", "ray", "rays", "strays"]));
