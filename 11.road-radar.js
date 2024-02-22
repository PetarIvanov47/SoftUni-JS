function solve(speed, area) {

    let diff = 0;
    let limit = 0;
    let status;
    

    switch (area) {
        case 'motorway':
            limit = 130;
            break;

        case 'interstate':
            limit = 90;
            break;

        case 'city':
            limit = 50;
            break;
        
        case 'residential':
            limit = 20;
            break;
    }

    if (speed > limit) {
        diff = speed - limit;
    }

    if (diff === 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return
    }else if (diff <= 20) {
        status = 'speeding';
    }else if (diff <= 40) {
        status = 'excessive speeding'
    }else {
        status = 'reckless driving'
    }

    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);

}
