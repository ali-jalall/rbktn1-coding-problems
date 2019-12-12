/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

	// console.log(Object.keys(apple) === Object.keys(orange))
	// var keys = Object.keys(orange);
	// var values = Object.values(orange);
	// console.log(values)


	// debugger;
	// var appleEntries = Object.entries(apple)
	// var orangeEntries = Object.entries(orange)
	// var isEqual = false;
	// for (var i = 0; i < appleEntries.length; i++) {
	// 	for (var i = 0; i < orangeEntries.length; i++) {
	// 		if( appleEntries[i] === orangeEntries[i]) {
	// 			isEqual = true;
	// 			continue;
	// 		} else {
	// 			return false
	// 		}
	// 	}
	// }
	// return isEqual

	// var isEqual = false;
	// for (let [key, value] of Object.entries(apple)) {
	//   for (let [key2, value2] of Object.entries(orange)) {
	//    	if (key === key2 && value === value2) {
	//    		isEqual = true;
	//    		break;
	//    	} else {
	//    		isEqual = false
	//    	}
	// 	}
	// }
	// return isEqual;
	

	// var isEqual = false;
	// var keys1 = Object.keys(apple);
	// var values1 = Object.values(apple);
	// var keys2 = Object.keys(orange);
	// var values2 = Object.values(orange);
	// for (var i = 0; i < keys1.length; i++) {
	// 	for (var j = 0; j < keys2.length; j++) {
	// 		if (keys[i] === keys2[j]) {
	// 			isEqual = true;
	// 		} else {
	// 			return false;
	// 		}
	// 	}
	// }

	// for (var i = 0; i < values1.length; i++) {
	// 	for (var j = 0; j < values1.length; j++) {
	// 		if (values1[i] === values2[j]) {
	// 			isEqual = true;
	// 		} else {
	// 			return false;
	// 		}
	// 	}
	// }


	// return isEqual;
	// // for (var key in apple) {}

var deepEquals = function(apple, orange) {
	var isEqual = false;
	for (let [key, value] of Object.entries(apple)) {
	  for (let [key2, value2] of Object.entries(orange)) {
	   	if (key === key2 && value === value2) {
	   		isEqual = true;
	   		break;
	   	} else {
	   		isEqual = false
	   	}
		}
	}
	return isEqual;
};
