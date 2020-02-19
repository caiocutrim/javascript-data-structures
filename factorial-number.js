// no recursive

// function factorial (number) {
//   if (number === 0) {
//     return undefined
//   }
//   let total = 1
//   for (let n = number; n > 1; n--) {
//     total = total * n
//   }
//   return total
// }

// console.log(factorial(4))
// console.log(factorial(3))

// function factorial (number) {
//   console.trace()
//   if (number === 1 || number === 0) { return 1 }
//   return number * factorial(number - 1)
// }

// console.log(factorial(4))
// console.log(factorial(3))
// console.log(factorial(5))

// lets get the stack overflow error

// let i = 0
// function recursiveFn () {
//   i++
//   recursiveFn()
// }

// try {
//   recursiveFn()
// } catch (ex) {
//   console.log('i = ' + i + ' error: ' + ex)
// }
