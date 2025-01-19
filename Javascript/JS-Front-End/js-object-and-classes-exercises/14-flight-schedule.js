function solve(input) {
    const [flights, cancelledFlights, flightStatus] = [input[0], input[1], input[2][0]];

    const flightsInfo = Object.fromEntries(flights.map(flight => {
        const splitData = flight.split(' ');
        const flightNumber= splitData.shift();
        const destination = splitData.join(' ');
        return [flightNumber, { Destination: destination, Status: 'Ready to fly' }]
    }));

    for (let flight of cancelledFlights) {
        const cancelledFlightNumber = flight.split(' ')[0]
        if (flightsInfo[cancelledFlightNumber]) {
            flightsInfo[cancelledFlightNumber].Status = 'Cancelled';
        }
    }

    Object
        .entries(flightsInfo)
        .forEach(flight => {
            if (flight[1].Status === flightStatus) {
                console.log(flight[1]);
            }
        });

}

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])