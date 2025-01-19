function extractText() {
    const listElements = document.querySelectorAll('li');
    const textArea = document.getElementById('result');
    
    for (let row of listElements) {
        textArea.textContent += row.textContent + '\n';
    }
}