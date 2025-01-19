function attachEventsListeners() {
    const converButtonElement = document.querySelector('input[type=button]');
    const convertUnitToMeters = {
        'km': (u) => u * 1000,
        'm': (u) => u,
        'cm': (u) => u / 100,
        'mm': (u) => u / 1000,
        'mi': (u) => u * 1609.34,
        'yrd': (u) => u * 0.9144,
        'ft': (u) => u * 0.3048,
        'in': (u) => u * 0.0254,
    };

    const convertMetersToUnit = {
        'km': (m) => m / 1000,
        'm': (m) => m,
        'cm': (m) => m * 100,
        'mm': (m) => m * 1000,
        'mi': (m) => m * 0.000621371,
        'yrd': (m) => m * 1.09361,
        'ft': (m) => m * 3.28084,
        'in': (m) => m * 39.3701,
    };

    converButtonElement.addEventListener('click', (event) => {
        const inputDistanceElement = document.querySelector('#inputDistance');
        const outputDistanceElement = document.querySelector('#outputDistance');
        const inputValue = Number(inputDistanceElement.value);

        const fromUnit = document.querySelector('#inputUnits').value;
        const toUnit = document.querySelector('#outputUnits').value;

        const valueToMeters = convertUnitToMeters[fromUnit](inputValue);
        outputDistanceElement.value = convertMetersToUnit[toUnit](valueToMeters);
    });

}


