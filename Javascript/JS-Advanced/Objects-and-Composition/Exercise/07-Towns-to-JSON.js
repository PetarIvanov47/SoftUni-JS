function solve(input) {
    const result = [];
    for(let i = 1; i < input.length; i++){
        let [townName, latitude, longitude] = input[i].split("|")
            .map(e => e.trim())
            .filter(e => e);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        result[i - 1] = {
            "Town": townName,
            "Latitude": Number(latitude),
            "Longitude": Number(longitude)
        };
        
    };

    return JSON.stringify(result)
};

const test = solve(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
);

console.log(test)
