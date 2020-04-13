function counting(n) {
  let count = 1
  for (let i = 2; i <= n; i++) {
    console.log(count)
    count += i
  }
}

counting(11)