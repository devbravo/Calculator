class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear();
  }

  // Clear the display after every initiation
  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operand = undefined;
  }

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperand(operand) {
    this.operand = operand;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {}

  updateDisplay() {
    this.currentTextElement.innerText = this.currentOperand;
    this.previousTextElement.innerText = this.previousOperand;
  }
}
const numberBtn = document.querySelectorAll('[data-number]');
const OperandBtn = document.querySelectorAll('[data-operand]');
const equalBtn = document.querySelector('[data-equal]');
const clearBtn = document.querySelector('[data-clear]');
const previousTextElement = document.querySelector('[data-previous]');
const currentTextElement = document.querySelector('[data-current]');

const calculator = new Calculator(previousTextElement, currentTextElement);

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

OperandBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperand(button.innerText);
    calculator.updateDisplay();
  });
});
