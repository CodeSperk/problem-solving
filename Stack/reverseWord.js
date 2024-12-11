// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/

//my solutions
const reverseString = (s) =>{
  return s
    .split(" ")
    .filter(word => word !== "")
    .reverse()
    .join(" ")
  ;
  }

  //using regex
  var reverseWords = function(s) {
    return s.trim().replace(/\s+/g, ' ').split(" ").reverse().join(" ");
  };
  
  console.log(reverseString(" hello  world "));


  // using stack
  
const reverseWord = function(s){
  const splitS = s.split(" ");
  const stack = [];
  for (let i of splitS) {
      stack.push(i);
  }

  let finalS = "";
  while(stack.length){
    const current = stack.pop();
    if(current){
      finalS += " " + current;
    }
  }

  return finalS.trim();
}

console.log(reverseWord(" world   hello "));
