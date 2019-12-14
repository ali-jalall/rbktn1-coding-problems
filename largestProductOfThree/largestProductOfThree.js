/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) 	  // 0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

// if (array[i + 1] || array[i + 2] === undefined) {}

function largestProductOfThree(array) {
	// First check if array includes 0 return 
	if (array.includes(0)) return 0;
	var result = 0;
	var resultsArr = [];
	var max = 0;
	for (var i = 0; i < array.length; i++) {
		// Second we take the element at that index
		var element = array[i];
		// if the element after it is undefined which means the array ends
		if (!array[i + 1]) {
			// Multiplay it by the first two elements
			result = element * array[0] * array[1];
		} else 
		// and if the element second after it is undefined
		if (!array[i + 2]) {
			// multiplay it by the element after it and than by the first element
			result = element * array[i + 1] * array[0];
		} else {
			// else multiplay it by two elements after it
			result = element * array[i + 1] * array[i + 2];
		}
		// and here we push the whole results
		resultsArr.push(result);
	}

	// Here we get the biggest element and return it
	for (var i = 0; i < resultsArr.length; i++) {
		if (resultsArr[i] > max) {
			max = resultsArr[i];
		}
	}

	return max;
}
