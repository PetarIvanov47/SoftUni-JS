function carFactory(clientRequirements) {
    const result = {};

    const engines = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    };

    result.model = clientRequirements.model;
    if(clientRequirements.power < 115){
        result.engine = engines["Small engine"];
    }else if(clientRequirements.power < 160){
        result.engine = engines["Normal engine"];
    }else{
        result.engine = engines["Monster engine"];
    };

    result.carriage = {
        type: clientRequirements.carriage,
        color: clientRequirements.color,
    };

    result.wheels = [];
    let wheelSize = clientRequirements.wheelsize;
    if(wheelSize % 2 == 0){
            wheelSize -= 1;
    };

    for(let w = 0; w < 4; w++){
        result.wheels.push(wheelSize);
    }
    
    return result
};


console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
