function solve(jsonData) {
    const pesonData = JSON.parse(jsonData);

    Object.keys(pesonData)
        .forEach(key => console.log(`${key}: ${pesonData[key]}`))

}

solve('{"name": "George", "age": 40, "town": "Sofia"}')