function * makeRangeIterator (start = 0, end = 100, step = 1) {
  let iterationCount = 0
  for (let i = start; i < end; i += step) {
    iterationCount++
    yield i
  }
  return iterationCount
}

const values = makeRangeIterator(0, 10, 2)

let result = values.next()

while (!result.done) {
  console.log(result.value)
  result = values.next()
}

console.log('result is ', result.value)
