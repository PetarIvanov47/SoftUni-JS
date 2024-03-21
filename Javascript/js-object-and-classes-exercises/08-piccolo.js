function removeCarToParking(carNumber, parkingLot) {

    if (parkingLot.includes(carNumber)) {
        const numberIndex = parkingLot.indexOf(carNumber);
        parkingLot.splice(numberIndex, 1);
    }

}

function addCarToParking(carNumber, parkingLot) {
    if (!parkingLot.includes(carNumber)) {
        parkingLot.push(carNumber)
    }
}

function solve(input) {
    const parkingLot = [];

    for (let carData of input) {
        const [action, carNumber] = carData.split(', ');

        switch (action) {
            case ('IN'):
                addCarToParking(carNumber, parkingLot)
                break;

            case ('OUT'):
                removeCarToParking(carNumber, parkingLot)
                break;
        }

    }

    if (parkingLot.length > 0) {
        parkingLot
            .sort((a, b) => a.localeCompare(b))
            .forEach(a => console.log(a))
        return
    }

    console.log('Parking Lot is Empty');

}

solve(['IN, CA2844AA',
    'IN, CA2844AA',
    'IN, CA1234TA',
    'IN, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])