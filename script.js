function fibonacci(num) {
  if (num <= 0) return null; // Handle invalid input
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, result;

  for (let i = 3; i <= num; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

// ✅ Test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
console.log(fibonacci(10)); // Output: 34
