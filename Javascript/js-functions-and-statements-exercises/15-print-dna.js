function solve(length) {
    let dnaHelix = [];
    const dnaSequence = 'ATCGTTAGGG';

    let chainPattern = {
        0: (a, b) => `**${a}${b}**`,
        1: (a, b) => `*${a}--${b}*`,
        2: (a, b) => `${a}----${b}`,
        3: (a, b) => `*${a}--${b}*`,
    }

    let counter = 0;
    let index = 0

    for (let i = 0; i < length; i++) {
        dnaHelix.push(chainPattern[counter](dnaSequence[index], dnaSequence[index + 1]));
        
        counter += 1;
        index += 2

        if (counter === 4) {
            counter = 0;
        }

        if (index === dnaSequence.length) {
            index = 0;
        }
    }

    return dnaHelix.join('\n')
}

// console.log(4);
console.log(solve(4));