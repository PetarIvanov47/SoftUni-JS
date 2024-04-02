function addItem() {
    const inputElement = document.getElementById('newItemText');
    const newElementText = inputElement.value;
    const ulElement = document.getElementById('items');

    if (!newElementText) {
        return
    }

    const liElement = document.createElement('li');
    liElement.textContent = newElementText;
    
    const aElemenet = document.createElement('a');
    aElemenet.textContent = '[Delete]';
    aElemenet.href = '#';
    aElemenet.addEventListener('click', () => liElement.remove());
    
    liElement.appendChild(aElemenet);
    ulElement.appendChild(liElement);

    inputElement.value = '';
}