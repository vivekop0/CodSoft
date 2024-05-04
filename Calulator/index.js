let displayValue = '';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  const display = document.getElementById('display');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');

      if (value === 'sqrt') {
        displayValue = Math.sqrt(parseFloat(displayValue)).toString();
      } else if (value === 'C') {
        clearDisplay();
      } else if (value === '=') {
        calculate();
      } else {
        append(value);
      }

      button.blur();
    });
  });
});

function append(value) {
  displayValue += value;
  display.value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    display.value = displayValue;
  } catch (e) {
    alert('Error: ' + e.message);
  }
}

function clearDisplay() {
  displayValue = '';
  display.value = '';
}