/*

Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]

*/


// Here what i am trying to do is to split the string and then iterate over it 
// if the current element is not index of our array 
// which means that we never added this element 
// so push it with counter 1
// else which mean that we added this element before
// so add it and increase the counter
function characterFrequency(string) {
	// debugger;
	var arrOfChars = string.split('');
	var array = [];
	var count = 1;
	for (var i = 0; i < arrOfChars.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if(array[j].indexOf(arrOfChars[i]) === -1){
				count = 1;
				array.push([arrOfChars[i], count]);
			} else {
				array[arrOfChars[i], count++];
			}
		}		
	}
	return array
}

