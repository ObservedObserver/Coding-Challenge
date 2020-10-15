/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  const MOD = 1000000007;
  const F = new Array(n + 1).fill(0);
  const units = [1, 5, 10, 25];
  for (let i = 0; i < units.length; i++) {
    F[units[i]] = 1;
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < units.length; j++) {
      if (i - units[j] >= 0) {
        F[i] += F[i - units[j]];
        F[i] %= MOD;
      }
    }
  }
  return F[n];
};
