function getInfo() {
    const inputStopIdElement = document.getElementById('stopId');
    const resultNameElemenet = document.getElementById('stopName');
    const resultBusesElemenet = document.getElementById('buses');

    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    function clearInformation() {
        resultNameElemenet.textContent = '';
        Array.from(resultBusesElemenet.children)
            .forEach(liEl => resultBusesElemenet.removeChild(liEl));
    }

    fetch(`${baseUrl}/${inputStopIdElement.value}`)
        .then(response => response.json())
        .then(data => {
            clearInformation();

            resultNameElemenet.textContent = data.name;
            console.log(data);

            for (const busId in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;

                resultBusesElemenet.appendChild(liElement);
            };

        })
        .catch(err => {
            resultNameElemenet.textContent = 'Error';
        })
        .finally(() => inputStopIdElement.value = '');

}