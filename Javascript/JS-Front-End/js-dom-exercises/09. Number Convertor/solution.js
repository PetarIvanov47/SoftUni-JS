function solve() {
    const buttonElement = document.querySelector('button');
    buttonElement.addEventListener('click', numberConvertor);

    const selectMenuToElement = document.getElementById('selectMenuTo');

    // Add hexadecimal option in Convert To menu
    const hexadecimalOptionElement = selectMenuToElement.querySelector('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';

    //Create and  Add Binary option in Convert To menu
    const binaryOptionElement = document.createElement('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';
    selectMenuToElement.appendChild(binaryOptionElement);


    function numberConvertor() {
        // convertor functions
        const decimalConvertors = {
            binary: decimalToBinary,
            hexadecimal: decimalToHexa,
        }

        // Get result element
        const resultElement = document.getElementById('result');

        // Get input value
        const inputNumberValue = Number(document.getElementById('input').value);

        // Get Convert To value
        const selectToElementValue = document.getElementById('selectMenuTo').value;

        const result = decimalConvertors[selectToElementValue](inputNumberValue);
        resultElement.value = result === '' ? '0' : result;
    }

    function decimalToBinary(number) {
        const result = [];

        while (number > 0) {
            result.unshift(number % 2);
            number = Math.floor(number / 2);
        }

        return result.join('');
    }

    function decimalToHexa(number) {
        const hexadecimalValue = [];
        const hexadecimalMapValues = {
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F',
        }

        while (number > 0) {
            const result = number % 16;
            const resultToHexadecimal = result >= 10 ? hexadecimalMapValues[result] : result;
            hexadecimalValue.unshift(resultToHexadecimal);
            number = Math.floor(number / 16);
        }

        return hexadecimalValue.join('');
    }
}