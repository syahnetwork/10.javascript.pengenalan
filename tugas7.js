let array1 = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190]

for (let i = 0; i < array1.length; i++) {
  const element = array1[i];
  console.log(element)
}

console.log('=================')

for (let element of array1) {
  console.log(element)
}