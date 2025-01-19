function solve(firstChar, secondChar) {
    let result = [];
    const num1 = firstChar.charCodeAt();
    const num2 = secondChar.charCodeAt();

    const startIndex = num1 < num2 ? num1 : num2;
    const endIndex = startIndex === num1 ? num2 : num1;
    
    for (let i = startIndex + 1; i < endIndex; i++) {
        let char = String.fromCharCode(i);
        result.push(char)
    }

    return result.join(' ')
}

console.log(solve('a', 'd'));