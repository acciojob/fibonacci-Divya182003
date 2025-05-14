function fibonacci(num) {
    if (num === 1) return 0;
    if (num === 2) return 1;

    let a = 0, b = 1, fib;

    for (let i = 3; i <= num; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

// Example usage:
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(6)); // Output: 5
console.log(fibonacci(10)); // Output: 34
