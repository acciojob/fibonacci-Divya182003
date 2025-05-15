function fibonacci(num) {
  /**
   * Finds the nth Fibonacci number.
   *
   * Args:
   * num: A positive integer representing the index of the desired Fibonacci number (0-based).
   *
   * Returns:
   * The nth Fibonacci number.
   */
  if (num < 0) {
    throw new Error("Input must be a non-negative integer.");
  } else if (num <= 1) {
    return num;
  } else {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

// Example usage:
console.log(`The 0th Fibonacci number is: ${fibonacci(0)}`);
console.log(`The 1st Fibonacci number is: ${fibonacci(1)}`);
console.log(`The 2nd Fibonacci number is: ${fibonacci(2)}`);
console.log(`The 3rd Fibonacci number is: ${fibonacci(3)}`);
console.log(`The 10th Fibonacci number is: ${fibonacci(10)}`);
console.log(`The 20th Fibonacci number is: ${fibonacci(20)}`);