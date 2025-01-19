function solve(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for (let word of wordsArr) {
        let templateSpot = textArr.indexOf('*'.repeat(word.length));
        textArr.splice(templateSpot, 1, word)
    }

    console.log(textArr.join(' '));  

}

solve('great',
'softuni is ***** place for learning new programming languages');

// const months2 = months.toSpliced(1, 0, "Feb");
