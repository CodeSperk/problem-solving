function removeDuplicate(arr){
  let newArr = []; //O(n)
  for (let i = 0; i < arr.length; i++) {
      if(!newArr.includes(arr[i])){   //O(n^2)
        newArr.push(arr[i]);
      }
  }
  return newArr.length;
};
//Time Complexity: O(n^2)
//Space Complexity: O(n)

//Optimized
function removeDuplicate1(arr){
  for (let i = 0; i < arr.length - 1; i++) { //O(n)
    if(nums[i] === nums[i + 1]){
      nums.splice(i + 1, 1); //O(1)
      i--
    }
  }
  return nums.length;
};
//Time Complexity = O(n)
//Space Complexity = O(1)

const nums = [0,0,1,1,2,3,3,4,4,5,]
console.log(removeDuplicate1(nums));