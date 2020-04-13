let for1 = () => {
  for (var i = 1; i <= 20; i++) {
    console.log(i)
    if (i % 3 === 0) {
      console.log('kelipatan 3 ' + i)
    }
  }
}



for1()
