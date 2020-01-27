function orderArrayAsc(a, n) {
  for (let j = 1; j < n; j++) {
    let chave = a[j];
    let i = j - 1;
    while(i >= 0 && a[i] > chave) {
      a[i + 1] = a[i]
      i = i - 1;
    }
    a[i + 1] = chave;
  }
  return a;
}

const arr = [3, 2, 0, 5, 12, -1]

console.log(orderArrayAsc(arr, arr.length));