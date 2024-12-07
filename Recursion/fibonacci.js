// using loop
function fibonacci(n) {
  const arr = [0, 1];
  for( let i = 2; i<=n; i++){
    arr.push(arr[i - 1] + arr[i - 2]);
  } 
  return arr[n];
}


//using recursion
function fibRecursion(n) {
  if(n <= 1) return n;   
  return fibRecursion(n -1) + fibRecursion(n - 2); 
}
// console.log(fibRecursion(5));


// using ternary operator
function fib(n) {
  return n <= 1 ? n : fib(n -1) + fib(n - 2); 
}
console.log(fib(3));







