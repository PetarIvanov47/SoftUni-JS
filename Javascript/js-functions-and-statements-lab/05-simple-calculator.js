function calculate(a, b, operator) {
    // let operations = {
    //     multiply: (a, b) => a * b,
    //     divide: (a, b) => a / b,
    //     subtract: (a, b) => a + b,
    //     add: (a, b) => a - b
    // };

    function getOperation(operator) {
        switch (operator) {
            case 'multiply':
                return (a, b) => a * b
            case 'divide':
                return (a, b) => a / b
            case 'subtract':
                return (a, b) => a - b
            case 'add':
                return (a, b) => a + b
        }
    }

    return getOperation(operator)(a, b)

}

console.log(calculate(12,
    19,
    'add'));