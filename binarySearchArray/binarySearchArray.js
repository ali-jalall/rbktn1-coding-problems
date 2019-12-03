/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
	// Array is Sorted
	// So we Save the Middle element in the array each time we iterate
	var medium = Math.round(array.length / 2);
	// And itertate over the array
	for (var i = 0; i < array.length; i++) {
		// Our stop condition is when you found the value
		if (array[i] === target) {
			return i;
		}
		// if NOT so return re-invoke the function with slicing the array from the middle index
		if (target > array[medium]) {
			binarySearch (array.slice(medium), target)
		}
	}

	// Nothing found return null
	return null
};

