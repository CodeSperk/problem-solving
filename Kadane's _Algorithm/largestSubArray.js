function maxSubArray(nums){
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if(currentSum > maxSum){
        maxSum = currentSum;
      }
    }    
  }
  return maxSum;
}
const nums = [5,4,-1,7,8];
console.log(maxSubArray(nums));