const numbers = document.querySelectorAll('.num')
const numDisplay = document.querySelector('.display')
const equationDisplay = document.querySelector('.equation')
const operators = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('.equal')

let num1, num2, operatorUsed
let operatorInUse = false
let equalHasBeenUsed = false



numbers.forEach(num => {
  num.addEventListener('click', (e) => {
    let value = parseInt(e.target.innerHTML)

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
  num1 = parseInt(numDisplay.innerHTML)

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
  num2 = parseInt(numDisplay.innerHTML)
  if (operatorUsed === '+') {
    numDisplay.innerHTML = num1 + num2
  }else if (operatorUsed === '-') {
    numDisplay.innerHTML = num1 - num2
  }else if (operatorUsed === '/') {
    numDisplay.innerHTML = num1 / num2
  }else if (operatorUsed === '*') {
    numDisplay.innerHTML = num1 * num2
  }

  equalHasBeenUsed = true
})




