/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
export function uniquePathsWithObstacles (obstacleGrid: number[][]): number {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0] ? obstacleGrid[0].length : 0;
  let F = obstacleGrid.map(r => r.map(d => 0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j]) {
        F[i][j] = 0;
      } else if (i === 0 && j === 0) {
        F[i][j] = 1;
      } else if (i === 0 && j !== 0) {
        F[i][j] = F[0][j - 1];
      } else if (i !== 0 && j === 0) {
        F[i][j] = F[i - 1][0];
      } else {
        F[i][j] = F[i - 1][j] + F[i][j - 1];
      }
    }
  }
  return F[m - 1][n - 1];
};