function solve(word, text) {
    let pattern = new RegExp("\\b" + word + "\\b", "i");

    let cointains = pattern.test(text);
    
    if (cointains) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript',
'JavaScript is the best programming language')