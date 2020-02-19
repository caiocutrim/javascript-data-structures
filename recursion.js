function subtract (value) {
  if (value > 0) {
    return subtract(value - 1)
  }
  // return Math.abs(value);
  return value
}

function countFrom (initValue, limit) {
  const total = []
  count(initValue, limit)
  function count (initValue, limit) {
    // get numbers state
    if (initValue < limit) {
      total.push(initValue)
      return count(initValue + 1, limit)
    }
    // get last number state
    total.push(initValue)
  }
  return total
}

// addPlus5(5);
