/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export function uniquePaths (m: number, n: number): number {
  let F: number[][] = new Array(m).fill(new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) F[i][j] = 1;
      else if (i == 0) F[i][j] = F[i][j - 1];
      else if (j == 0) F[i][j] = F[i - 1][j];
      else {
        F[i][j] = F[i - 1][j] + F[i][j - 1];
      }
    }
  }
  return F[m - 1][n - 1];
};