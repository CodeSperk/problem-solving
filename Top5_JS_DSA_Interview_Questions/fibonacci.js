//Leetcode P-509: Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/description


const isFibonacci = (n) => {
  const arr = [0, 1];
  for(i = 2; i<=n; i++){
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

const result = isFibonacci(1);
console.log(result);


//Questions details:
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Input: n = 2 -- Output: 1
// Input: n = 3 -- Output: 2
// Input: n = 4 -- Output: 3
