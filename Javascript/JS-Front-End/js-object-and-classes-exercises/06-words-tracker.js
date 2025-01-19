function solve(input) {
    const entries = input.shift().split(' ').map(word => [word, 0]);
    let wordsToFind = Object.fromEntries(entries);
    
    input.forEach(word => {
        if (wordsToFind[word] >= 0) {
            wordsToFind[word] += 1;
        }
    })

    Object
        .entries(wordsToFind)
        .sort((a, b) => b[1] - a[1])
        .forEach(word => console.log(`${word[0]} - ${word[1]}`))
}

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])