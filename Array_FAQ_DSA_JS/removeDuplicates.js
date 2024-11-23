// Leetcode : P-26. Remove Duplicates from Sorted Array

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description


//Optimized
function removeDuplicate1(nums){
  for (let i = 0; i < nums.length - 1; i++) { //O(n)
    if(nums[i] === nums[i + 1]){
      nums.splice(i + 1, 1); //O(1)
      i--
    }
  }
  return nums.length;
};

//Time Complexity = O(n)
//Space Complexity = O(1)
// const nums = [0,0,1,1,2,3,3,4,4,5,]
// console.log(removeDuplicate1(nums));


//Optimized Without JS Methods
const removeDuplicatesOptimized = nums => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if(nums[i] !== nums[j]){
      i++;
      nums[i] = nums[j]
    }
  }
  return i + 1;
}
//Time Complexity = O(n)
//Space Complexity = O(1)
// explanation [0,1,2,3,4,5,3,4,4,5,]
// i = 4
// j = 9

const nums = [0,0,1,1,2,3,3,4,4,5,]
console.log(removeDuplicatesOptimized(nums));



// Question details
// 26. Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.



// Input: nums = [1,1,2] -- Output: 2, nums = [1,2,_]
// Input: nums = [0,0,1,1,1,2,2,3,3,4] -- Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]