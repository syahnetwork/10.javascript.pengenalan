let function1 = (x = 20) => {
  return console.log(x - 5)
}

let function2 = (str = 'adam') => {
  return console.log(str + ' likes to watch forge in fire')
}

function es5Function(favoriteSword = 'zhanmadao') {
  return console.log(favoriteSword)
}

let es5FunctionVariable = function es5Function(favoriteSword = 'zhanmadao') {
  return console.log(favoriteSword)
}

function1()
function1(5)

function2()
function2('borat')

es5Function()
es5Function('javanese kris')
es5FunctionVariable('flamberge')
es5FunctionVariable('zweihander')
