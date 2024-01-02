const numbers = document.querySelectorAll('.num')
const numDisplay = document.querySelector('.display')
const equationDisplay = document.querySelector('.equation')
const operators = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('.equal')
const reset = document.querySelector('.reset')

let num1, num2, operatorUsed
let operatorInUse = false
let equalHasBeenUsed = false


numbers.forEach(num => {
  num.addEventListener('click', (e) => {
    let value = (e.target.innerHTML)

    numDisplay.innerHTML += value

    if (numDisplay.innerHTML.length > 1) {
      if (numDisplay.innerHTML[0] == 0) {
        numDisplay.innerHTML = numDisplay.innerHTML.slice(1)
      }
    }

    if (operatorInUse) {
      numDisplay.innerHTML = value
      operatorInUse = false
    }

    if (equalHasBeenUsed) {
      numDisplay.innerHTML = value
      equalHasBeenUsed = false
    }

  })
})



function gettingOperator (e) {
  num1 = parseFloat(numDisplay.innerHTML)
  console.log(num1, 'num1')

  if (e.target.className.includes('divide')) {
    operatorUsed = '/'
  } else if (e.target.className.includes('multiply')) {
    operatorUsed = '*'
  } else if (e.target.className.includes('minus')) {
    operatorUsed = '-'
  } else if (e.target.className.includes('add')) {
    operatorUsed = '+'
  }

  operatorInUse = true
}

operators.forEach(operator => {
  operator.addEventListener('click', gettingOperator)
})


equalBtn.addEventListener('click', () => {
  num2 = parseFloat(numDisplay.innerHTML)
  console.log(num2, 'num2')
  if (operatorUsed === '+') {
    numDisplay.innerHTML = Math.round((num1 + num2) * 100) / 100
  }else if (operatorUsed === '-') {
    numDisplay.innerHTML = Math.round((num1 - num2) * 100) / 100
  }else if (operatorUsed === '/') {
    numDisplay.innerHTML = Math.round((num1 / num2) * 100) / 100
  }else if (operatorUsed === '*') {
    numDisplay.innerHTML = Math.round((num1 * num2) * 100) / 100
  }

  equalHasBeenUsed = true
})


reset.addEventListener('click', () => {
  num1 = 0
  num2 = 0
  numDisplay.innerHTML = 0
})

