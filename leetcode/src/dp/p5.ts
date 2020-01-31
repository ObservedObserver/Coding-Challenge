/**
 * @param {string} s
 * @return {string}
 */
export function longestPalindrome (s: string): string {
  let F: number[][] = [];
  let strLen: number = s.length;
  // init
  for (let i = 0; i < strLen; i++) {
    F.push([]);
    for (let j = 0; j < strLen; j++) {
      F[i].push(-1);
    }
  }
  // dp
  const getMaxLen = (i: number, j: number) => {
    if (F[i][j] !== -1) return F[i][j];
    if (i >= j) return F[i][j] = 1;
    if (i + 1 === j) {
      return F[i][j] = (s[i] === s[i + 1] ? 2 : 0);
    }
    if (s[i] !== s[j]) {
      return F[i][j] = 0;
    }
    let subAns = getMaxLen(i + 1, j - 1);
    return F[i][j] = (subAns === 0 ? subAns : subAns + 2);
  }
  let maxLen = 1;
  for (let i = 0; i < strLen; i++) {
    for (let j = i; j < strLen; j++) {
      maxLen = Math.max(maxLen, getMaxLen(i, j));
    }
  }
  for (let i = 0; i < strLen; i++) {
    for (let j = i; j < strLen; j++) {
      if (F[i][j] === maxLen) {
        return s.slice(i, j + 1);
      }
    }
  }
  return '';
};