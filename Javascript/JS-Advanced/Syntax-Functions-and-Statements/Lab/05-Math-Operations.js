function calculate(a, b, operator) {
    const operations = {
        "+": (a, b) => (a + b) ,
        "-": (a, b) => (a - b) ,
        "*": (a, b) => (a * b),
        "/": (a, b) => (a / b) ,
        "%": (a, b) => (a % b) ,
        "**": (a, b) => (a ** b),
    };
    
    const result = operations[operator](a, b);
    console.log(result);
}

calculate(5, 6, "+")