let x = 170
let y = 160
let z = 180

if (x > y && x > z && y > z) {
  console.log('x>y>z')
} else if (x > y && x > z && z > y) {
  console.log('x>z>y')
} else if (y > x && y > z && x > z) {
  console.log('y>x>z')
} else if (y > x && y > z && z > x) {
  console.log('y>z>x')
} else if (z > x && z > y && x > y) {
  console.log('z>x>y')
} else if (z > x && z > y && y > x) {
  console.log('z>y>x')
}

