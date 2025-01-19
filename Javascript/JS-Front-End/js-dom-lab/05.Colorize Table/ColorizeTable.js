function colorize() {
    const evenTrElements = document.querySelectorAll('table tr:nth-child(2n)');
    
    for (let row of evenTrElements) {
        row.style.backgroundColor = 'teal'
    }
}