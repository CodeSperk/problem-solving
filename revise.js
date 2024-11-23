function goToLunch(person) {
    if(person === 5) return true;
    console.log(person);
    return goToLunch(person + 1);  
}

// console.log("outcome:", goToLunch(1));

// Loops vs recursion
function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *=arr[i]    
  }
  return product;
}
// console.log(multiply([1,2,3,4]));

function multArr(arr) {
  console.log(arr);
  if(arr.length <= 0) return 1;

  return arr[arr.length - 1] * multArr(arr.slice(0, arr.length - 1))

  //explanation
  //4 * 3 * multArr([1,2]) ...
}
console.log(multArr([3,2,3,4]));
