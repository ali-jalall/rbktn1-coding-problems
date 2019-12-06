// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowelsBack(str) {
	let chars = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Array Of the Alphabet
	let regVowels = /[oiuea]/;
	let arrOfStr = str.split(''); // chars of our string
	for (var i = 0; i < arrOfStr.length; i++) {

		if ( regVowels.test(arrOfStr[i]) ) {
			if (arrOfStr[i] === 'o') {
				arrOfStr[i] = chars[chars.indexOf(arrOfStr[i]) - 1];
				continue;
			}
			if (arrOfStr[i] === 'e') {
				arrOfStr[i] = chars[chars.indexOf(arrOfStr[i]) - 4];
				continue;
			}
			if ( chars[chars.indexOf(arrOfStr[i]) - 4] === 'a' ) {
				arrOfStr[i] = chars[chars.length - 1] - 5;
				continue;
			}
			arrOfStr[i] = chars[chars.indexOf(arrOfStr[i]) - 5];
			continue;
		}

		if (arrOfStr[i] === 'c') {
			arrOfStr[i] = chars[chars.indexOf(arrOfStr[i]) - 1];
			continue;
		}

		if (arrOfStr[i] === 'd') {
			arrOfStr[i] = chars[chars.indexOf(arrOfStr[i]) - 4];
			continue;
		}

		if (chars[chars.indexOf(arrOfStr[i]) + 8] === 'z') {
			arrOfStr[i] = chars[chars[0] + 9];
			continue;
		}
		arrOfStr[i] = chars[chars.indexOf(arrOfStr[i]) + 9];
	}
	return arrOfStr.join('')
}