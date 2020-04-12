let function1 = (x = 20) => {
  return console.log(x - 5)
}

let function2 = (str = 'adam') => {
  return console.log(str + ' likes to watch forge in fire')
}

function1()
function1(5)

function2()
function2('borat')