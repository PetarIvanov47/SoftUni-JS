function solve(word) {
    let pattern = /(?=[A-Z])/;
    let wordToText = word.split(pattern).join(', ')
    console.log(wordToText);

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')