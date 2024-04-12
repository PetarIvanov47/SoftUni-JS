function solve() {
    const infoElement = document.querySelector('#info span[class="info"]');
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');

    const schduleBaseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let stopID = 'depot';

    function stopNotFound() {
        infoElement.textContent = 'Error'
        departButtonElement.disabled = true;
        arriveButtonElement.disabled = true;
    }

    function swtichButtons() {
        [departButtonElement.disabled, arriveButtonElement.disabled] = [arriveButtonElement.disabled, departButtonElement.disabled];
    }

    function depart() {
        fetch(`${schduleBaseUrl}/${stopID}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                infoElement.textContent = `Next stop ${data.name}`;

                swtichButtons()

            })
            .catch(err => {
                stopNotFound()
            });
    }

    async function arrive() {
        try {
            const response = await fetch(`${schduleBaseUrl}/${stopID}`)
                .then(data => data.json());

            infoElement.textContent = `Arriving at ${response.name}`;

            stopID = response.next;
            swtichButtons()

        } catch (err) {
            stopNotFound()
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();