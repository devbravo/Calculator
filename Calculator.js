class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear();
  }

  // clears the display after initiazion
  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operand = undefined;
  }

  // Appends a number
  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  // Choose an operand (+, -, *, /, =)
  chooseOperand(operand) {
    this.operand = operand;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  // Updates the display when clicking
  updateDisplay() {
    this.currentTextElement.innerText = this.currentOperand;
    this.previousTextElement.innerText = this.previousOperand;
  }
}
const numberBtn = document.querySelectorAll('[data-number]');
const operandBtn = document.querySelectorAll('[data-operand]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equal]');
const previousTextElement = document.querySelector('[data-previous]');
const currentTextElement = document.querySelector('[data-current]');

const calculator = new Calculator(previousTextElement, currentTextElement);

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operandBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperand(button.innerText);
    calculator.updateDisplay();
  });
});
