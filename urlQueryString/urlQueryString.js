/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var regEx = /[0-9]/g;
	// final result
	var newArr = [];
	// new String to save the text after ?
	var newStr = '';
	// clean string
	var cleanStr = ''
	// iterate over string and amd take the text after ? mark !
	for (var i = 0; i < url.length; i++) {
		if (url[i] === '?') {
			newStr = url.slice(i + 1)
		}
	}

	console.log(newStr)
	// iterate over new String 
	for (var i = 0; i < newStr.length; i++) {
		// seperate are '=' mark
		if (newStr[i] === '=') {
			// text after ? mark save it inside seperate arrays
			var endElement = newStr.slice(i + 1, newStr.indexOf('&'));
			var endElement2 = newStr.slice(i + 1, newStr[newStr.length - 1]);
			var startElement = newStr.slice(newStr[0], newStr.indexOf('='))
			// console.log(startElement)
			if ( endElement ) {
				newArr.push([startElement, endElement])
			} else 
			newArr.push([startElement, endElement2])
		}
	}

	if (newArr.length === 0) {
		return undefined;
	}

	return newArr;
}
