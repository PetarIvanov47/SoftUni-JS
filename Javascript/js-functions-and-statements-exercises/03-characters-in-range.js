function solve(char1, char2) {
    let result = [];
    const num1 = char1.charCodeAt();
    const num2 = char2.charCodeAt();

    const startIndex = num1 < num2 ? num1 : num2;
    const endIndex = startIndex === num1 ? num2 : num1;
    
    for (let i = startIndex + 1; i < endIndex; i++) {
        let char = String.fromCharCode(i);
        result.push(char)
    }

    return result.join(' ')
}

console.log(solve('a', 'd'));