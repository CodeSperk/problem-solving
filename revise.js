// Create an array with range of numbers
// Input: start=1, end=5 ----->>> output: [1,2,3,4,5]

function rangeOfNum(startNum, endNum) {
  if(endNum < startNum) return [];
  const numbers = rangeOfNum(startNum, endNum - 1);
  // console.log(numbers);
  numbers.push(endNum);
  return numbers;
}
console.log(rangeOfNum(1,5));    

// explanation: 
//   rangeOfNum(1,5) => [1,2,3,4,5]
//   rangeOfNum(1,4) => [1,2,3,4]
//   rangeOfNum(1,3) => [1,2,3]
//   rangeOfNum(1,2) => [1,2]
//   rangeOfNum(1,1) => [1]
//   rangeOfNum(1,0) => []