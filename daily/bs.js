function Find(target, array) {
  // write code here
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] <= target) {
      let colIndex = bs(target, array[i], 0, array[i].length - 1);
      if (array[i][colIndex] === target) return true;
    } else {
      return false
    }
  }
  return false;
}

function bs(target, array, left, right) {
  if (left === right) {
    return left;
  }
  let mid = Math.floor((left + right) / 2);
  if (target <= array[mid]) {
    return bs(target, array, left, mid);
  } else {
    return bs(target, array, mid + 1, right);
  }
}

console.log(
  Find(1, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ])
);
