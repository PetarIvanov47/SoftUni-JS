function deleteByEmail() {
    const inputElement = document.querySelector('input[name=email]');
    const inputText = inputElement.value;
    const trElements = document.querySelectorAll('tbody tr');
    const resultDivElement = document.getElementById('result');

    if (!inputText) {
        return
    }

    const resultTrElement = Array
        .from(trElements)
        .find(trElement => trElement.children[1].textContent.includes(inputText))

    if (resultTrElement) {
        resultTrElement.remove();
        resultDivElement.textContent = 'Deleted.';
    } else {
        resultDivElement.textContent = 'Not found.';
    }

    inputElement.textContent = '';
}