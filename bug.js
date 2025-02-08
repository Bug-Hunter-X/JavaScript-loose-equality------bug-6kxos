function foo(x) {
  if (x == null) {
    return 0; //This is the buggy line
  } else {
    return x + 1;
  }
}
console.log(foo(null)); //Output:0
console.log(foo(undefined)); //Output:0
console.log(foo(0)); //Output:1