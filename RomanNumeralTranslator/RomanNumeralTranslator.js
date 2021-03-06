// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the 
// correspondence between roman numeral characters and integers.

// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation.
// You can assume only one smaller numeral may appear in front of larger one.

// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return “null” on invalid input.

// You've got Helpers!

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50, 
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral (romanNumeral) {
  let result = 0;
  let i = 0;
  while ( i < romanNumeral.length ) {
    if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
      result += Math.abs(DIGIT_VALUES[romanNumeral[i]] - DIGIT_VALUES[romanNumeral[i + 1]]);
    }
    else if (DIGIT_VALUES[romanNumeral[i]] > DIGIT_VALUES[romanNumeral[i + 1]]) {
      result += DIGIT_VALUES[romanNumeral[i]] + DIGIT_VALUES[romanNumeral[i + 1]];
      if ( DIGIT_VALUES[romanNumeral[i + 1]] === DIGIT_VALUES[romanNumeral[i + 2]]) {
        result += DIGIT_VALUES[romanNumeral[i + 1]]
      }
    }
    i++;
  }
  return result
}

console.log(translateRomanNumeral('LXX'));