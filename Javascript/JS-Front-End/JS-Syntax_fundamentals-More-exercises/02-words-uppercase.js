function solve(text) {

    let pattern = /\b\w+\b/g;

    let words = text.match(pattern).map(word => word.toUpperCase()).join(', ')

    console.log(words);
}

solve('hello')