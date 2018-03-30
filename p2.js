// 循环写法
var cal1 = (n) => {
  var ans = 1
  for (let i = n; i > 1; i--) {
    ans *= i
  }
  return ans
}
// 阶乘写法
var cal2 = (n) => {
  if (n === 1 || n === 0) {
    return 1
  } else {
    return n * cal2(n - 1)
  }
}
console.log(cal1(4), cal2(4))
