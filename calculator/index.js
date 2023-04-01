class Calculator {
  constructor(previousElement, currentElement) {
    this.previousElement = previousElement
    this.currentElement = currentElement
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {

  }

  append(number) {
    this.currentElement = number
  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.currentElement.innerText = this.currentElement
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear-all]')
const previuosElement = document.querySelector('[data-previous]')
const currentElement = document.querySelector('[data-current]')


const calculator = new Calculator(previuosElement, currentElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})