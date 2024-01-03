const numbers = document.querySelectorAll('.num')
const numDisplay = document.querySelector('.display')
const equationDisplay = document.querySelector('.equation')
const operators = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('.equal')
const reset = document.querySelector('.reset')
const toWords = document.querySelector('.toWords')

let num1, num2, operatorUsed
let operatorInUse = false
let equalHasBeenUsed = false

const numToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}

function gettingOperator (e) {
  num1 = parseFloat(numDisplay.innerHTML)
  
  if (e.target.className.includes('divide')) {
    operatorUsed = '/'
  } else if (e.target.className.includes('multiply')) {
    operatorUsed = '*'
  } else if (e.target.className.includes('minus')) {
    operatorUsed = '-'
  } else if (e.target.className.includes('add')) {
    operatorUsed = '+'
  }
  
  equationDisplay.innerHTML[equationDisplay.innerHTML.length - 1]
  
  equationDisplay.innerHTML += operatorUsed
  
  operatorInUse = true
}

function convertToWords(num) {
  if (num in numToWords) return numToWords[num]
  
  let word = ''
  
  if(num > 20000) return 'Number too large'
  if (num >= 1000 && num <= 20000) {
    word += convertToWords(Math.floor(num / 1000)) + " thousand "
    num %= 1000
  } else if (num >= 100 && num < 1000) {
    word += convertToWords(Math.floor(num / 100)) + " hundred"
    num %= 100
    
    if (num > 0) word += ' and '
  }
  
  if (num > 0) {
    if (num <= 20) {
      word += convertToWords(num)
    } else {
      word += convertToWords(Math.floor(num / 10) * 10)
      
      if (num % 10 > 0) word += '-' + convertToWords(num % 10)
    }
}

return word
}

numbers.forEach(num => {
  num.addEventListener('click', (e) => {
    let value = (e.target.innerHTML)

    numDisplay.innerHTML += value

    if (numDisplay.innerHTML.length > 1) {
      if (numDisplay.innerHTML[0] == 0) {
        numDisplay.innerHTML = numDisplay.innerHTML.slice(1)
      }
    }

    equationDisplay.innerHTML += value

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

operators.forEach(operator => {
  operator.addEventListener('click', gettingOperator)
})

equalBtn.addEventListener('click', () => {
  num2 = parseFloat(numDisplay.innerHTML)
  // console.log(num2, 'num2')
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
  equationDisplay.innerHTML = ''
})

toWords.addEventListener('click', () => {
  const numToConvert = parseInt(numDisplay.innerHTML)
  const wordConverted = convertToWords(numToConvert)

  numDisplay.innerHTML = wordConverted
})