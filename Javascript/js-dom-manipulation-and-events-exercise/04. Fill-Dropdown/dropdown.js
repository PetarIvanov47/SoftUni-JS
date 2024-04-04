function addItem() {
    const menuElement = document.getElementById('menu');
    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');

    if (!inputTextElement.value | !inputValueElement.value) {
        return
    }

    const newOptionElement = document.createElement('option');
    newOptionElement.textContent = inputTextElement.value;
    newOptionElement.value = inputValueElement.value;
    menuElement.appendChild(newOptionElement);

    inputTextElement.value = '';
    inputValueElement.value = '';

}