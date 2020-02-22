// Given a number n (represented as a binary number string), convert n to base 10. Do NOT use parseInt(n, 2). 
// You may use the parseInt function that takes in just one argument.

// Examples
// Input	Output
// n: "0"	 0
// n: "1"	 1
// n:"10"	 2
// n:"11"	 3
// n:"100"	 4
// n:"101"	 5
// n:"110"	 6
// n:"111"	 7
// n:"1000"	 8 

const binaryToDecimal = (n) => {
  let result = 0;
  n = n.split('').reverse().join(''); // Reverse the string
  for (let i = 0; i < n.length; i++) {
    let thisPower = Math.pow(2, i);
    result += (thisPower * Number(n[i]));
  }
  return result;
}

console.log(binaryToDecimal('1000'));