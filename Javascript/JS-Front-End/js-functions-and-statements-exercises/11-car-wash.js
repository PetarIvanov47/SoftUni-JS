function carWash(commands) {
    let progress = 0;

    const operations = {
        'soap': (a) => a + 10,
        'water': (a) => a * 1.20,
        'vacuum cleaner': (a) => a * 1.25,
        'mud': (a) => a * 0.90
    }

    for (let comand of commands) {
        progress = operations[comand](progress)
    }

    return `The car is ${progress.toFixed(2)}% clean.`

}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]));