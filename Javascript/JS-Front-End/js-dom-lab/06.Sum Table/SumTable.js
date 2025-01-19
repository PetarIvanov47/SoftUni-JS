function sumTable() {
    const costElements = document.querySelectorAll('tr td:nth-child(2n):not(#sum)');
    const totalConstElement = document.getElementById('sum');

    totalConstElement.textContent = Array.from(costElements).reduce((sum, element) => sum + Number(element.textContent), 0);
}