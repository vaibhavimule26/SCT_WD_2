const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'C') {
      display.value = '';
    } else {
      display.value += value;
    }
  });
});

// Optional: Keyboard support
document.addEventListener('keydown', (e) => {
  const allowed = '0123456789+-*/.=';
  if (allowed.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
});
