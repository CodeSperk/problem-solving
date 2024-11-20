function secondLargest(arr){
  const uniqueArr = Array.from(new Set(arr));
  const sortedArr = uniqueArr.sort((a, b) => b - a);
  return sortedArr[1];
}

const result = secondLargest([10, 5, 10])
console.log(result);

