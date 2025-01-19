function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const nameConvention = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');
  let result = '';

  switch (nameConvention) {
    case 'Camel Case':
      result = text.split(' ').map((word, idx) => {
        if (idx === 0) {
          return word
        }

        return word.substring(0, 1).toUpperCase() + word.substring(1);

      })
        .join('');
      break;

    case 'Pascal Case':
      result = text
        .split(' ')
        .map(word => { return word.substring(0, 1).toUpperCase() + word.substring(1) })
        .join('');
      break;

    default:
      result = 'Error!';
      break;
  }

  resultElement.textContent = result;

}