function calc() {
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const resultInputElement = document.getElementById('sum');

    resultInputElement.value = Number(firstInputElement.value) + Number(secondInputElement.value);

}
