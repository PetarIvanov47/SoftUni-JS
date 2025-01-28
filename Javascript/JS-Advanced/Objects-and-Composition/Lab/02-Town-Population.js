function solve(towns){
    const townsData = {};
    for(const townData of towns){
        const [name, population] = townData.split(" <-> ");

        if(!townsData[name]){
            townsData[name] = 0;
        };

        townsData[name] += Number(population);
    }

    for(const town in townsData){
        console.log(`${town} : ${townsData[town]}`);
    } 
}

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])