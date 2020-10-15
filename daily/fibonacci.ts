function Fibonacci(n: number): number {
  let F = new Array(n + 1).fill(0);
  F[0] = 0;
  F[1] = 1;
  if (n < 2) return F[n];
  for (let i = 2; i <= n; i++) {
    F[i] = F[i - 1] + F[i - 2];
  }
  return F[n];
  // write code here
}

console.log(Fibonacci(32))