const isPalindrome = (x) => {
  return x === +x.toString().split("").reverse().join("");
}

