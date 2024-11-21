function rotateArr(nums, k){
  const size = nums.length; 
  if(k > size){
    k = k % size;
  }
 const rotated = nums.splice((size - k), k); // [5,6,7] O(k)
 nums.unshift(...rotated); //O(n)
 return nums;
}
//Explanation
//nums = [1,2,3,4,5,6,7] => [1,2,3,4] => [5,6,7,1,2,3,4]
//rotated = [5,6,7]

//Time Complexity : O(k + n) = O(k)
//Space Complexity : O(k)



// === Optimized Solution ===
function rotateArrOptimized(nums, k){
  const size = nums.length; 
  if(k > size){
    k = k % size;
  }
  reverse(nums, 0,  nums.length - 1) //reverse entire array
  reverse(nums, 0,  k - 1) // reverse first k elements
  reverse(nums, k,  nums.length - 1) //reverse remaining elements
  return nums;
  //Steps : [1,9,3,4,19] => [19,4,3,9,1] => 
//        [3,4,19,4,1] => [3,4,19,1,4]
}

//[1,9,3,4,19]
//start = 0;
//end = 0

// temp = 1;
// nums[start] = 19;
//nums[end] = 1;


function reverse(nums, start, end){
  while(start < end){
    const temp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = temp;
  }
}




console.log(rotateArrOptimized([1,9,3,4,19], 3));
