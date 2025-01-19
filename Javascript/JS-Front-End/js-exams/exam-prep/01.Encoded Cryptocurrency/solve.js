function solve(inputData) {
    let encodedMessage = inputData.shift();

    const commands = {
        'TakeEven': removeOddChars,
        'ChangeAll': replaceChars,
        'Reverse': reverseSubstring,
        'Buy': printResult,
    };

    for (const data of inputData) {
        const splitData = data.split('?');
        const command = splitData.shift();

        let result =commands[command](encodedMessage, splitData);

        if (!result) {
            console.log('error');
        } else {
            encodedMessage = result
            console.log(encodedMessage);
        }


    }

    function removeOddChars(message) {
        message = Array
            .from(message)
            .filter((char, i) => i % 2 === 0)
            .join('');

        return message
    };

    function replaceChars(message, data) {
        const [substring, replacement] = data;

        while (message.includes(substring)) {
            message = message.replace(substring, replacement);
        };

        return message
    };

    function reverseSubstring(message, data) {
        const substringToFind = data[0];

        if (!message.includes(substringToFind)) {
            return false
        }

        const startindex = message.indexOf(substringToFind);
        const endIndex = substringToFind.length + startindex

        const substring = message.slice(startindex, endIndex);
        message = message.replace(substring, '');

        const reverseSubstring = substring
            .split('')
            .reduce((acc, char) => {
                acc.unshift(char);

                return acc
            }, [])
            .join('');

        return message + reverseSubstring
    };

    function printResult(message) {
        return `The cryptocurrency is: ${message}`
    };
}


// solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
// "TakeEven",
// "Reverse?!nzahc",
// "ChangeAll?m?g",
// "Reverse?adshk",
// "ChangeAll?z?i",
// "Buy"])

// solve((["Pesho Pesho Chati",
//     "Reverse?Pesho",
//     "Buy"])
// )