function solve(input) {
    

    function formatData(num) {
        return Number(num).toFixed(2);
    }

    function createTownObject(town, latitude, longitude) {
        latitude = formatData(latitude);
        longitude = formatData(longitude);
        return {
            town,
            latitude,
            longitude,
        }
    }

    // input
    //     .map(townData => townData.split(' | '))
    //     .forEach(([town, latitude, longitude]) => console.log(createTownObject(town, latitude, longitude)))

    const towns = [];

    for (let line of input) {
        const [townName, latitude, longitude] = line.split(' | ');

        const town = createTownObject(townName, latitude, longitude);
        towns.push(town);
    }

    towns.forEach(town => console.log(town))

}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']


)
