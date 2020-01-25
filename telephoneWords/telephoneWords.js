/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: 
http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. 
But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, 
and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

const telephoneWords = (digitString) => {
  let newArr = [];
  // split it taje each letter enter switch case
  let arrayDigit = digitString.split('');
  // if 1 || 0 push 1 || 0 to string ...
  let newString = '';
  for (let digit of arrayDigit) {
    switch (digit) {
      case '0':
        newString += '0';
        continue;
      case '1':
        newString += '1';
        continue;
      case '2':
        let arrTwo = ['A', 'B', 'C'];
        for (var i = 0; i < 3; i++) {
          let tempString = newString + arrTwo[i]
          if (digit === arrayDigit[arrayDigit.length - 1]) {
            newArr.push(tempString);
          } else {
            newString += arrTwo[i]
            break;
          }
          continue;
        }
        continue;
      case '3':
        let arrThree = ['D', 'E', 'F'];
        for (var i = 0; i < 3; i++) {
          let tempString = newString + arrThree[i]
          if (digit === arrayDigit[arrayDigit.length - 1]) {
            newArr.push(tempString);
          } else {
            newString += arrThree[i]
            break;
          }
          continue;
        }
        continue;
      case '4':
        let arrFour = ['G', 'H', 'I'];
        for (var i = 0; i < 3; i++) {
          let tempString = newString + arrFour[i]
          if (digit === arrayDigit[arrayDigit.length - 1]) {
            newArr.push(tempString);
          } else {
            newString += arrFour[i]
            break;
          }
          continue;
        }
        continue;
      case '5':
        let arrFive = ['J', 'K', 'L'];
        for (var i = 0; i < 3; i++) {
          let tempString = newString + arrFive[i]
          if (digit === arrayDigit[arrayDigit.length - 1]) {
            newArr.push(tempString);
          } else {
            newString += arrFive[i]
            break;
          }
          continue;
        }
        continue;
      case '6':
        let arrSix = ['M', 'N', 'O'];
        for (var i = 0; i < 3; i++) {
          let tempString = newString + arrSix[i]
          if (digit === arrayDigit[arrayDigit.length - 1]) {
            newArr.push(tempString);
          } else {
            newString += arrSix[i]
            break;
          }
          continue;
        }
        continue;
      case '7':
        let arrSeven = ['P', 'Q', 'R', 'S'];
        for (var i = 0; i < 4; i++) {
          let tempString = newString + arrSeven[i]
          if (digit === arrayDigit[arrayDigit.length - 1]) {
            newString += arrSeven[i]
            break;
          } else {
            newString += arrSeven[i]
            break;
          }
          continue;
        }
        continue;
      case '8':
        let arrEight = ['T', 'U', 'V'];
        for (var i = 0; i < 3; i++) {
          let tempString = newString + arrEight[i]
          if (digit === arrayDigit[arrayDigit.length - 1]) {
            newString += arrEight[i]
            break;
          } else {
            newString += arrEight[i]
            break;
          }
          continue;
        }
        continue;
      case '9':
        let arrNine = ['W', 'X', 'Y', 'Z'];
        for (var i = 0; i < 4; i++) {
          let tempString = newString + arrNine[i]
          if (digit === arrayDigit[arrayDigit.length - 1]) {
            newArr.push(tempString);
          } else {
            newString += arrNine[i]
            break;
          }
          continue;
        }
        continue;
    }
  }
  return newArr
}
