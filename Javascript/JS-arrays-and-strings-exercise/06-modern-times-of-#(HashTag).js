function solve(text) {
    let result = [];

    let patter = /#([a-zA-Z]+)/g;
    let match;

    while ((match = patter.exec(text)) !== null) {
        result.push(match[1]);
    }

    console.log(result.join('\n'));
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')


