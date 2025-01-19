function toggle() {
    const moreInfoElement = document.getElementById('extra');
    const buttonElement = document.querySelector('span[class=button]');

    if (buttonElement.textContent === 'More') {
        moreInfoElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        moreInfoElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}

