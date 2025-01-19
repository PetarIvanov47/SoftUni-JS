function validate() {
    const inputEmailElement = document.getElementById('email');

    inputEmailElement.addEventListener('change', (event) => {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+/;
        const isValid = pattern.test(inputEmailElement.value);
        
        if (!isValid) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        };
    });
}