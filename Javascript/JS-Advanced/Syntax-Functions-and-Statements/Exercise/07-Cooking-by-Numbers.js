function solve(startingPoint, ...operators){
    let result = Number(startingPoint);
    const operations = {
        "chop": (num) => num / 2,
        "dice": (num) => Math.sqrt(num),
        "spice": (num) => num + 1,
        "bake": (num) => num * 3,
        "fillet": (num) => num - (num * 0.20),
    };
    

    for(let i = 0; i < operators.length; i++){
        result = operations[operators[i]](result);
        console.log(result)
    }
    
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')