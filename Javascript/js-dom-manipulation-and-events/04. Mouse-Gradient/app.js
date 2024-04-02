function attachGradientEvents() {
    const resultElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentMousePosition = event.offsetX;
        const gradientWidth = event.target.clientWidth;
        const result = Math.trunc((currentMousePosition / gradientWidth) * 100);
        
        resultElement.textContent = `${result}%`;
    });

    gradientElement.addEventListener('mouseout', () => resultElement.textContent = '')

}