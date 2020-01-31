/**
 * @param {number} n
 * @return {number}
 */
export function climbStairs (n: number): number {
  let f: number[] = new Array(n + 1).fill(0);
  f[0] = 0;
  f[1] = 1;
  f[2] = 2;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n]
};