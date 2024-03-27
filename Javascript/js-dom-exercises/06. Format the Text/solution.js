function solve() {
  const outputElement = document.getElementById('output');
  const text = document.getElementById('input').value;
  const sentences = text.split('.');

  let paragraph = '';

  let counter = 0;
  for (let sentence of sentences) {
    if (sentence === '') {
      continue
    }

    paragraph += sentence + '.';
    counter += 1;

    if (counter % 3 === 0) {
      outputElement.innerHTML += `<p>${paragraph}</p>`;
      paragraph = '';
      counter = 0;
    }
  }

  if (paragraph) {
    outputElement.innerHTML += `<p>${paragraph}</p>`;
  }
  

}