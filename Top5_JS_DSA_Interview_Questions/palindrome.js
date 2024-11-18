const isPalindrome = (x) => {
  if(x < 0 ) return false;
  return x === +x.toString().split("").reverse().join("");
}

const isPalindrome1 = (x) => {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const result = isPalindrome(121)
console.log(result);

