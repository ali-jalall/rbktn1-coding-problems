/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


// This is Might be the Worst solution And it's not even Correct
var bubbleSort = function(array) {
	// I am iterating three times so i make sure that it's sorted
	// First
	for (var i = 0; i < array.length; i++) {
	 	if(array[i] > array[i + 1]){
	 		var temp = array[i];
   		array[i] = array[i + 1];
  		array[i + 1] = temp;
  	}
	}	

	// Second
	for(var j = 0; j < array.length; j++){
		if(array[j] > array[j + 1]){
			var temp2 = array[j];
   		array[j] = array[j + 1];
  		array[j + 1] = temp2;
		}
	}

	// Third
	for(var k = 0; k < array.length; k++){
		if(array[k] > array[k + 1]){
			var temp3 = array[k];
   		array[k] = array[k + 1];
  		array[k + 1] = temp3;
		}
	}

	// I know that i can make use of recursion but i couldn't figured out the stop condition
  return array
};