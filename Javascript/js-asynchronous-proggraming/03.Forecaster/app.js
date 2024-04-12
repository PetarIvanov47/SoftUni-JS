function attachEvents() {
    const getWeatherButtonElement = document.getElementById('submit');
    const inputLocationElement = document.getElementById('location');
    const forecastContainerElement = document.getElementById('forecast');
    const currentForecastElement = forecastContainerElement.querySelector('#current');
    const upcomingForecastElement = forecastContainerElement.querySelector('#upcoming');
    const baseForecasterUrl = 'http://localhost:3030/jsonstore/forecaster';

    const conditionSymbolMap = {
        'Sunny': '\u2600',
        'Partly sunny': '\u26c5',
        'Overcast': '\u2601',
        'Rain': '\u2614',
        'Degrees': '\u00B0',
    };

    function createTodaysForecastElement(todayData, symbols) {
        const currentConditions = todayData.forecast.condition;

        const conditionSpanElement = document.createElement('span');
        conditionSpanElement.classList.add('forecast-data');
        conditionSpanElement.textContent = currentConditions;

        const degreesSpanElement = document.createElement('span');
        degreesSpanElement.classList.add('forecast-data');
        degreesSpanElement.textContent = `${todayData.forecast.low}\u00b0/${todayData.forecast.high}\u00b0`;

        const locationSpanElement = document.createElement('span');
        locationSpanElement.classList.add('forecast-data');
        locationSpanElement.textContent = todayData.name;

        const spanContainerElement = document.createElement('span');
        spanContainerElement.classList.add('condition');
        spanContainerElement.appendChild(locationSpanElement);
        spanContainerElement.appendChild(degreesSpanElement);
        spanContainerElement.appendChild(conditionSpanElement);

        const symbolSpanElement = document.createElement('span');
        symbolSpanElement.classList.add('condition', 'symbol');
        symbolSpanElement.textContent = symbols[currentConditions];

        const divContainerElement = document.createElement('div');
        divContainerElement.classList.add('forecasts');
        divContainerElement.appendChild(symbolSpanElement);
        divContainerElement.appendChild(spanContainerElement);

        currentForecastElement.appendChild(divContainerElement);

    }

    function createUpcomingForecastElement(upcomingData, symbols) {
        const divContainerElement = document.createElement('div');
        divContainerElement.classList.add('forecast-info');

        for (const data of upcomingData.forecast) {
            const condition = data.condition;

            const conditionSpanElement = document.createElement('span');
            conditionSpanElement.classList.add('forecast-data');
            conditionSpanElement.textContent = condition;

            const degreesSpanElement = document.createElement('span');
            degreesSpanElement.classList.add('forecast-data');
            degreesSpanElement.textContent = `${data.low}\u00b0/${data.high}\u00b0`;

            const symbolSpanElement = document.createElement('span');
            symbolSpanElement.classList.add('symbol');
            symbolSpanElement.textContent = symbols[condition];

            const spanContainerElement = document.createElement('span');
            spanContainerElement.classList.add('upcoming');
            spanContainerElement.appendChild(symbolSpanElement);
            spanContainerElement.appendChild(degreesSpanElement);
            spanContainerElement.appendChild(conditionSpanElement);

            divContainerElement.appendChild(spanContainerElement);

            upcomingForecastElement.appendChild(divContainerElement);

        }
    }

    function dataNotFound() {
        const errorSpanElement = document.createElement('span');
        errorSpanElement.textContent = 'Error';
        currentForecastElement.appendChild(errorSpanElement);
    }

    function clearForecastContainer() {
        const todayForecastDataElement = currentForecastElement.querySelectorAll('* :not(div[class="label"])');
        console.log(todayForecastDataElement);
        const upcomingForecastDataElement = upcomingForecastElement.querySelectorAll('* :not(div[class="label"])');
        console.log(upcomingForecastDataElement);
        const allElements = Array.from(todayForecastDataElement).concat(Array.from(upcomingForecastDataElement))

        if (allElements.length > 0) {
            Array
                .from(allElements)
                .forEach(el => el.remove())
        }
    }

    getWeatherButtonElement.addEventListener('click', (e) => {
        forecastContainerElement.style.display = 'block';
        clearForecastContainer();

        fetch(baseForecasterUrl)
            .then(forecasterResponse => forecasterResponse.json())
            .then(data => {
                const locationData = data.locations.find(location => location.name === inputLocationElement.value);

                return Promise.all([
                    fetch(`${baseForecasterUrl}/today/${locationData.code}`),
                    fetch(`${baseForecasterUrl}/upcoming/${locationData.code}`)
                ])
            })
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(([todayData, upcomingData]) => {
                createTodaysForecastElement(todayData, conditionSymbolMap);
                createUpcomingForecastElement(upcomingData, conditionSymbolMap);
            })
            .catch(err => dataNotFound());
    });

}

attachEvents();