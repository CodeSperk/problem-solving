function secondLargest(arr){
  const uniqueArr = Array.from(new Set(arr));
  const sortedArr = uniqueArr.sort((a, b) => b - a);
  return sortedArr[1];
}

function secondLargestOptimized(arr){
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  // [12, 35, 1, 10, 34, 1]
  // largest = 35
  // secondLargest = 34
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

const result = secondLargestOptimized([12, 35, 1, 10, 34, 1])
console.log(result);

