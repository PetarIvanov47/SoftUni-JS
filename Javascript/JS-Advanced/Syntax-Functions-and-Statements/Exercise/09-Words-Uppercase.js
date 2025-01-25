function solve(word){
    const regEx = /[a-zA-Z0-9]+/g;
    let match = Array
        .from(word.match(regEx))
        .map(e => e.toUpperCase())
        .join(", ");

    console.log(match.trim());

}

solve('Hi, how are you?');
solve('Hello');