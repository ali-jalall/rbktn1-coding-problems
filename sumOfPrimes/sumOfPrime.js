/*
Sum of Primes
Given a positive number, return the sum of all positive primes 
that are less than or equal to that number.
*/

const isPrime = num => {
  for ( let i = 2; i < num; i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }
  return true;
}



const sumOfPrimes = num => {
  let sum = 2;
  for ( let i = 3; i < num; i+=2 ) {
    isPrime(i) ?  sum += i : null
  }
  return sum;
}

console.log(sumOfPrimes(13))