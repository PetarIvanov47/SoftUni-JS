function addItem() {
    const ulElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');
    const inputText = inputElement.value;

    if (inputText) {
        const liElement = document.createElement('li');
        liElement.textContent = inputText;
        ulElement.appendChild(liElement);
        inputElement.value = '';
    }
    
}