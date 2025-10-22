const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;
    console.log("Button clicked:", value);

    if (value === 'C') {
      display.value = '';
      console.log("Updated display:", display.value);
    } else if (value === '=') {
      try {
        let result = eval(display.value);
        // Round to 4 decimal places if it's a float
        display.value = result % 1 !== 0 ? parseFloat(result).toFixed(4) : result;
      console.log("Evaluated result:", result);
      } catch {
        display.value = 'Error';
      }
    } else if (value === '←') {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (key === 'Enter') {
    try {
      let result = eval(display.value);
      display.value = result % 1 !== 0 ? parseFloat(result).toFixed(4) : result;
    } catch {
      display.value = 'Error';
      console.log("Evaluation error");

    }
  } else if (key === 'Escape') {
    display.value = '';
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
    console.log("Key pressed:", key);
  } else if ('0123456789+-*/.'.includes(key)) {
    display.value += key;
  }
});




