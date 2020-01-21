/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion'
};

function numberToEnglish(number) {

  let newString = '';
  // first we count the digits number ex: 3 -> hundred, 4 -> thousand, 6 -> million, etc ...
  let oldString = number.toString()

  for (let i = 0; i < oldString.length; i++) {
    let value = oldString[i];
    let length =  oldString.length - i;
    var zeros = '1'
    for (let j = 1; j < length; j++) {
      zeros+= '0';
    }
    if (i === 0) {
      newString += numbersToWords[value] + ' ' + numbersToPlace[zeros]
    } else {
      newString += numbersToPlace[zeros] + ' ' +  numbersToWords[value]
    }
    
    numberToEnglish(oldString.slice(1))
  }
  
  return newString
  // check the first number and put it before the above ex : 500 -> five hundered
  // check the number before it and check how many numbers after it, ex: 570 -> five hundred seventy
  // check the last number and put it!

  // return numbersToWords[number]
}
