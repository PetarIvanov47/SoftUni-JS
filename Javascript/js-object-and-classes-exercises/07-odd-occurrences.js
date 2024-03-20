function solve(sentence) {
    const wordsCounter = {};
    const words = sentence.split(' ').map(word => word.toLowerCase());

    for (let word of words) {
        if (!wordsCounter[word]) {
            wordsCounter[word] = 0;
        }

        wordsCounter[word] += 1;
    }

    for (let key in wordsCounter) {
        if (wordsCounter[key] % 2 === 0){
            delete wordsCounter[key]
        }
    }

    const result = Object
        .entries(wordsCounter)
        .sort((a, b) => b[1] - a[1])
        .map(word => word[0])
        .join(' ')

    console.log(result);

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

