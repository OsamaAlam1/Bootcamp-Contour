function getMonth(month) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (!months.includes(month)) {
      throw new Error(`Invalid month: ${month}`);
    }
    return month;
  }

  const submitButton = document.querySelector('#submit-button');
  const resultDiv = document.querySelector('#result');

  submitButton.addEventListener('click', () => {
    try {
      const input = document.querySelector('input').value;
      const result = getMonth(input);
      resultDiv.innerHTML = `Month: ${result}`;
    } catch (error) {
      resultDiv.innerHTML = error.message;
    }
  });