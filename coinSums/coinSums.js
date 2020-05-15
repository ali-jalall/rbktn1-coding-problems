/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)

Given a given number of pence, return the possible number of ways someone could make change.
It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/

// HELPERS
const coinSums = (total, coins) => {
  let counter = 0;
  coins.sort((a, b) => a - b)
  (function recurse(index, reminder) {
    let coin = coins[index]
    if (index === 0) {
      reminder % coin === 0 && counter++
      return;
    }
    while (reminder >= 0) {
      recurse(index - 1, reminder);
      reminder -= coin
    }
  })(coins.length - 1, total)

  return counter
}
console.log(coinSums(5, 4))