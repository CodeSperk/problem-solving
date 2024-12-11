//Basic Stack Implementation

class Stack {
  constructor(){
    this.stack = [];
  }

  push(element) {
    this.stack.push(element)
  }

  pop(){
    if(this.isEmpty()){
      return "Stack is empty";
    }
    return this.stack.pop()
  }

  peek(){
    if(this.isEmpty()){
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }

  isEmpty(){
    return this.size() === 0;
  }

  size(){
    return this.stack.length;
  }

  printStack(){}
}


const stack = new Stack();

stack.push(10)
stack.push(45)
stack.push(34)

console.log(stack.size());

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());

console.log(stack.isEmpty());
console.log(stack.size());



