/**
 * @param {string} s
 * @return {string}
 */
export function longestPalindromeRecursion (s: string): string {
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

function longestPalindromeIteration (s: string): string {
  let F: number[][] = [];
  let strLen: number = s.length;
  // init
  for (let i = 0; i < strLen; i++) {
    F.push([]);
    for (let j = 0; j < strLen; j++) {
      F[i].push(-1);
    }
  }
  let maxLen: number = 1;
  let maxAns: [number, number] = [0, 0]
  for (let i = 0; i < strLen; i++) {
    F[i][i] = 1;
    if (i + 1 < strLen) {
      if (s[i] === s[i + 1]) {
        F[i][i + 1] = 2;
        if (F[i][i + 1] > maxLen) {
          maxLen = F[i][i + 1];
          maxAns = [i, i + 1]
        }
      } else {
        F[i][i + 1] = 0;
      }
    }
  }
  for (let i = 1; i <= Math.round(strLen - 1 / 2); i++) {
    // j is center, i is distance from center
    // odd
    // F[j - i][j + i]
    for (let j = i; j < strLen - i; j++) {
      if (s[j - i] === s[j + i] && F[j - i + 1][j + i - 1] !== 0) {
        F[j - i][j + i] = F[j - i + 1][j + i - 1] + 2;
        if (F[j - i][j + i] > maxLen) {
          maxLen = F[j - i][j + i];
          maxAns = [j - i, j + i];
        }
      } else {
        F[j - i][j + i] = 0;
      }
    }
    // even
    // F[j - i][j + i + 1]
    for (let j = i; j < strLen - i - 1; j++) {
      if (s[j - i] === s[j + i + 1] && F[j - i + 1][j + i] !== 0) {
        F[j - i][j + i + 1] = F[j - i + 1][j + i] + 2;
        if (F[j - i][j + i + 1] > maxLen) {
          maxLen = F[j - i][j + i + 1];
          maxAns = [j - i, j + i + 1]
        }
      } else {
        F[j - i][j + i + 1] = 0;
      }
    }
  }
  return s.slice(maxAns[0], maxAns[1] + 1)
}

function centerSpread (s: string): string {
  let strLen: number = s.length;
  let maxLen: number = 1;
  let maxAns: [number, number] = [0, 0];
  for (let center = 0; center < strLen - 1; center++) {
    // odd len str
    let distance = 1;
    while(center + distance < strLen && center - distance >= 0 && s[center - distance] === s[center + distance]) {
      distance++;
    }
    if ((distance - 1) * 2 + 1 > maxLen) {
      maxLen = (distance - 1) * 2 + 1;
      maxAns = [center - distance + 1, center + distance - 1];
    }

    distance = 0;
    while(center + 1 + distance < strLen && center - distance >= 0 && s[center - distance] === s[center + distance + 1]) {
      distance++;
    }
    if ((distance - 1) * 2 + 2 > maxLen) {
      maxLen = (distance - 1) * 2 + 2;
      maxAns = [center - distance + 1, center + distance]
    }
  }
  return s.slice(maxAns[0], maxAns[1] + 1)
}
export const longestPalindrome = {
  recursion: longestPalindromeRecursion,
  iteration: longestPalindromeIteration,
  centerSpread
}