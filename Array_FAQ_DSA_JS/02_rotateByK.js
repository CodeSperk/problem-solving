function rotateArr(nums, k){
  const size = nums.length; 
  if(k > size){
    k = k % size;
  }
 const rotated = nums.splice((size - k), k); // [5,6,7] O(k)
 nums.unshift(...rotated); //O(n)
 return nums;
}

console.log(rotateArr([1,2,3,4,5,6,7], 3));

//Explanation
//nums = [1,2,3,4,5,6,7] => [1,2,3,4] => [5,6,7,1,2,3,4]
//rotated = [5,6,7]

//Time Complexity : O(k + n) = O(k)
//Space Complexity : O(k)