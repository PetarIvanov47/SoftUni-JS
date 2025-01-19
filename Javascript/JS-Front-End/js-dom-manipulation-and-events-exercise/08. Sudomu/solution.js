function solve() {
    const buttonsElements = document.querySelectorAll('button');
    const quickCheckButton = buttonsElements[0];
    const clearButton = buttonsElements[1];
    const inputElements = document.getElementsByTagName('input');
    const resultElement = document.querySelector('#check p');
    const tableElement = document.querySelector('table');

    function showResult() {
        const isDone = isSudokuDone()

        tableElement.style.border = isDone ? '2px solid green' : '2px solid red';
        resultElement.style.color = isDone ? 'green' : 'red';
        resultElement.textContent = isDone ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
    };

    function isSudokuDone() {
        const [rowOne, rowTwo, rowThree] = getRowsValues();
        const rowLength = 3;

        for (let i = 0; i < rowLength; i++) {
            if (rowOne[i] === rowTwo[i] || rowOne[i] === rowThree[i] || rowTwo[i] === rowThree[i]) {
                return false
            };
        }
        return true
    };

    function getRowsValues() {
        const tableRowElements = Array.from(document.querySelectorAll('tbody tr'));

        const rows = Array.from(tableRowElements
            .map(rowElement => {
                const rowInputElements = Array.from(rowElement.querySelectorAll('input'));

                const rowValues = rowInputElements.map(input => Number(input.value));

                return rowValues
            }));

        return rows
    };

    // Add event listener for correct input...
    Array
        .from(inputElements)
        .forEach(inputEl => {
            inputEl.addEventListener('change', function () {
                const value = Number(this.value);
                const maxValue = this.getAttribute('max');
                const minValue = this.getAttribute('min');

                if (value > maxValue) {
                    this.value = maxValue;
                }

                if (value < minValue) {
                    this.value = minValue
                }

            });
        });

    // Add event listener to check button...
    quickCheckButton.addEventListener('click', showResult);

    // Add event listener to creal button..
    clearButton.addEventListener('click', () => {
        Array
            .from(inputElements)
            .forEach(inputEl => inputEl.value = '');

        tableElement.style.border = '';
        resultElement.textContent = '';
    });
}
