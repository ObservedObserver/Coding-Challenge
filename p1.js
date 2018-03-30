var cal = (exp) => {
  var stack = []
  var ele = []
  ele = exp.split(' ')
  for (let i = 0; i < ele.length; i++) {
    // 若为数字入栈，
    // 若为运算符则从栈中取顶部两个数字出栈运算后入栈
    if (!isNaN(Number(ele[i]))) {
      stack.push(ele[i])
    } else {
      let x, y, ans
      y = stack.pop()
      x = stack.pop()
      ans = eval(x + ele[i] + y)
      stack.push(String(ans))
    }
  }
  return stack[0]
}
console.log(cal('1 2 + 2 + 5 4 + -'))
