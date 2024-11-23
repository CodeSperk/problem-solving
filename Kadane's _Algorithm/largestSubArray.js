//Leetcode P-53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/description

function maxSubArray(nums){
  let maxSum = nums[0];
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < nums.length; i++) {  // O(n)
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) { // O(n / n-1 / n-2 ...)
      currentSum = currentSum + nums[j];
      if(currentSum > maxSum){
        maxSum = currentSum;
        startIdx = i;
        endIdx = j;
      }
    }    
  }
  return {
    sum: maxSum,
    subArray: nums.slice(startIdx, endIdx + 1)
  } 
}
//Time Complexity:  O(n^2)
//Space Complexity: O(1)



//Optimized using Kadane's Algorithms
function maxSubArr(nums) {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) { //O(n)
    sum += nums[i];
    if(sum > max){
      max = sum;
    }
    if(sum < 0){
      sum = 0;
    }
  }
  return max;
}
//Time Complexity:  O(n)
//Space Complexity: O(1)

const nums = [5,4,-1,7,8];
console.log(maxSubArr(nums));


// Question details
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4] -- Output: 6
// Input: nums = [1] --  Output: 1
// Input: nums = [5,4,-1,7,8] -- Output: 23

