function solve(text, wordToReplace) {

    let censored = text;

    while (censored.includes(wordToReplace)) {
        censored = censored.replace(wordToReplace, '*'.repeat(wordToReplace.length))
    }

    console.log(censored);
}

