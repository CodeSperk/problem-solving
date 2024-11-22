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