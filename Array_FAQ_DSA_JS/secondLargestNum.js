// Question: Second Largest Number
// Given an array of Arr size N, print second largest
// distinct element from an array

//Input: [12, 35, 1, 10, 34, 1] -- output: 34
//Input: [10, 5, 10]            --  output: 5


// Solution one
function secondLargest(arr){
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  // [12, 3, 10, 35, 35]
  //largest = 12
  //second largest = Number.NEGATIVE_INFINITY
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > largest){
      secondLargest = largest;
      largest = arr[i];
    }else if(arr[i] != largest && arr[i] > secondLargest){
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
const result = secondLargest([10, 5, 10])
console.log(result);

