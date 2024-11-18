// 0, 1, 2, 3, 5, 8, 13


const isFibonacci = (n) => {
  const arr = [0, 1];
  for(i = 2; i<=n; i++){
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

const result = isFibonacci(1);
console.log(result);