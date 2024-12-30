function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause unexpected behavior if a and b are both 0
  }
  return a + b;
}