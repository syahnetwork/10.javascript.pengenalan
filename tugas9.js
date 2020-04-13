function callObject() {
  var mobil = {
    merk: 'toyota',
    tipe: 'avanza',
    harga: 20000000,
    jalankan: jalankan(),
    produksi: true,
    modifier: ['hitam', 'silver'],
  }
  console.log(mobil)

  for (let x in mobil) {
    console.log('calling object from let in ' + mobil[x])
  }

  console.log(mobil.modifier[1])
}

let jalankan = () => {
  console.log('broom ngeeengggg')
}

function halo() {
  console.log('halo')
}

callObject()
// callObject()
console.log(callObject)
// console.log(mobil)

// for (let x in mobil) {
//   console.log(mobil[x])
// }