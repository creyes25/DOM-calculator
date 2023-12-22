const numbers = document.querySelectorAll('.num')
const numDisplay = document.querySelector('.display')
const equationDisplay = document.querySelector('.equation')
const operators = document.querySelectorAll('.operator')

let num1, num2
let operator = '/'


console.log(operators)


numbers.forEach(num => {
  num.addEventListener('click', (e) => {
    let value = parseInt(e.target.innerHTML)

    numDisplay.innerHTML += value

    if (numDisplay.innerHTML.length > 1) {
      if (numDisplay.innerHTML[0] == 0) {
        numDisplay.innerHTML = numDisplay.innerHTML.slice(1)
      }
    }
  })
})


// when an operator is clicked ...
  // save the number 
  // cleare display
  // save operator saved

