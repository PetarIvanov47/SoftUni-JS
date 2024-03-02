function solve(text, wordToFind) {
    let count = 0;
    let words = text.split(' ')

    for (let word of words) {

        if (word === wordToFind){
            count += 1
        }

    }
    console.log(count);
}

