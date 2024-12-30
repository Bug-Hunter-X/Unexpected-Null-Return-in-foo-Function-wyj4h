function foo(a, b) {
  // Check if either a or b is null
  if (a === null || b === null) {
    return 0; // Handle null values appropriately 
  } else if (a === 0 && b === 0) {
      return 0;
  }
  return a + b;
}