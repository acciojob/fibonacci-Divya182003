function fibonacci(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1;
  for (let i = 2; i < num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function findFibonacci() {
  const input = document.getElementById("fibInput").value;
  const num = parseInt(input);
  const resultDiv = document.getElementById("result");

  if (isNaN(num) || num < 1) {
    resultDiv.innerText = "Please enter a valid positive integer.";
    return;
  }

  const fib = fibonacci(num);
  resultDiv.innerText = `The ${num} Fibonacci number is: ${fib}`;
}
