function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');

    Array
        .from(inputElements)
        .forEach(inputEl => {
            inputEl.addEventListener('focus', (event) => {
                event.target.parentElement.classList.add('focused')
                // const parentElement = inputEl.parentNode;
                // parentElement.setAttribute('class', 'focused');
            });

            inputEl.addEventListener('blur', (event) => {
                event.target.parentElement.classList.remove('focused')
                // const parentElement = inputEl.parentNode;
                // parentElement.removeAttribute('class', 'focused');
            });
        });
}