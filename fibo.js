function fiboInteractive (num) {
  let a = 1
  let b = 0
  let temp
  while (num >= 0) {
    temp = a
    a = a + b
    b = temp
    num--
  }
  return b
}

console.log(fiboInteractive(5))

function fiboRecursive (n) {
  if (n <= 1) return 1
  return fiboRecursive(n - 1) + fiboRecursive(n - 2)
}

console.log(fiboRecursive(5))

function fiboMemo (num, memo) {
  memo = memo || {}
  if (memo[num]) return memo[num]
  if (num <= 1) return 1
  memo[num] = fiboMemo(num - 1, memo) + fiboMemo(num - 2, memo)
  return memo[num]
}

console.log(fiboMemo(5))
