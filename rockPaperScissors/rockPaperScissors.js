/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
var str = '';
  var array = [];
  var rockPaperScissors = ['R', 'P', 'S'];
  // AS AN EXAMPLE
  // we need to set the string to be 'RRR' as start point
  var str = 'RRR';
  // then we need to start from the last index and change it each time to be rockPaperScissors
  for (var i = str.length - 1; i >= 0; i--) {
    str[i] += rockPaperScissors[i];
  }
  // if the rockPaperScissors array ends!
    // descrease the length by 1 and start replacing again
  return str
  // as always i know the idea but i don't know how to do it
*/

var rockPaperScissors = function () {
  var str = '';
  var array = [];
  var rockPaperScissors = ['R', 'P', 'S'];
  // AS AN EXAMPLE
  // we need to set the string to be 'RRR' as start point
  var str = 'RRR';
  // then we need to start from the last index and change it each time to be rockPaperScissors
  for (var i = str.length - 1; i >= 0; i--) {
    str[i] += rockPaperScissors[i];
  }
  // if the rockPaperScissors array ends!
    // descrease the length by 1 and start replacing again
  return str
  // as always i know the idea but i don't know how to do it
};
