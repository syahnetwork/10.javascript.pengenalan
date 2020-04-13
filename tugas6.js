let for6 = () => {
  for (let i = 1; i <= 20; i++) {
    // console.log(i)
    if (i % 2 === 0) {
      console.log('genap')
      continue;
    } else {
      console.log(i)
    }
  }
}

for6()