/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 */

function blackJack(array){
	var result = 0;
	// First we i need to add a RegEx for the numbers to check inside the loop
	var regNumbers = /[0-9]/g;
	for(var i = 0; i < array.length; i++){
		// So if the index = 'A' And the array includes Number
		if(array[i] === 'A' && regNumbers.test(array)){
			// Here we count the 'A' as 1
			result += 1;
			continue;
		}
		// Here if the index = 'A' and the array doesn't contains numbers
		if(array[i] === 'A' && !regNumbers.test(array)){
			// We count the 'A' as 11
			result += 11;
		}

		// And of course the 'J Q K' Count as 10
		if(array[i] === 'J' || array[i] === 'Q' || array[i] === 'K'){
			result += 10;
			continue;
		}

		// And here we check if this index is number by using RegEx
		if(regNumbers.test(array[i])){
			console.log(parseInt(array[i]))
			// We Conver it to Number because the whole array is string
			result += parseInt(array[i]);
			continue;
		}
	}
	// And return
	return result;

	// Logically it should work and it works on some of the examples 
	// but i don't know what is missing
}
