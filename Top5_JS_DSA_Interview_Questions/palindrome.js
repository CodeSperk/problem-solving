//Leetcode P-9 : Palindrome Number
// https://leetcode.com/problems/palindrome-number/description

const isPalindrome = (x) => {
  if(x < 0 ) return false;
  return x === +x.toString().split("").reverse().join("");
}

const isPalindrome1 = (x) => {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const result = isPalindrome(121)
console.log(result);





//Questions Details
// Given an integer x, return true if x is a palindrome , and false otherwise.

// Input: x = 121 -- Output: true
// Input: x = -121 --  Output: false
// Input: x = 10 -- Output: false
