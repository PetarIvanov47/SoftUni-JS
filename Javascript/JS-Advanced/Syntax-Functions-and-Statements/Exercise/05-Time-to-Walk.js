function solve(steps, stepLength, speed) {
    //distance in meters home to university
    const distanceInMeters = steps * stepLength;
    let resultSec = 0;
    const breaks = Math.floor(distanceInMeters / 500);
    const travelTimeSeconds = distanceInMeters / 1000 / speed * 60 * 60;

    resultSec += travelTimeSeconds;
    resultSec += breaks * 60;

    //Convert second to hh:minutes:seconds
    var date = new Date(0);
    date.setSeconds(Math.round(resultSec)); // specify value for SECONDS here
    var timeString = date.toISOString().substring(11, 19);
    console.log(timeString)
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);