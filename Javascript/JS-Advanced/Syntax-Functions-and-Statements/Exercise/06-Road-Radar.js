function solve(currentSpeed, city){
    const limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    };

    const limit = limits[city];

    if(currentSpeed <= limit){
        console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`)
    }else {
        let status;
        const difference = currentSpeed - limit;

        if(difference <= 20){
            status = "speeding";
        }else if(difference <= 40) {
            status = "excessive speeding"
        }else{
            status = "reckless driving"
        }
        
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}

solve(40, "city")
solve(21, "residential")
solve(120, "interstate")
solve(200, "motorway")