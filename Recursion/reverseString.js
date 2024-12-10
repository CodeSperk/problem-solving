// Question - 5: Reverse a string
function reverse(str) {
  return str
    .split(" ")
    .reverse().join(" ");
}
// console.log(reverse("hello"));

//using recursion
function reverseString(str) {
  if(str === ""){
    return "";
  }else{
    return reverseString(str.substr(1)) + str.charAt(0)
  }
}
console.log(reverseString("hello"));




// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
function reverse(str) {
  return str
    .trim()
    .replace(/\s+/g, ' ').
    split(" ")
    .reverse().join(" ");
}
// console.log(reverse("a good   example"));


// Without using regex 
function reverse(s) {
  return s
    .split(" ")
    .filter(word => word !== "")
    .reverse()
    .join(" ");
}
// console.log(reverse("a good   example"));