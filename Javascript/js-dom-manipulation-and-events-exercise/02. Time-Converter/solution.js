function attachEventsListeners() {
    const convertButtonElements = Array
        .from(document.querySelectorAll('input[type=button]'));
    
    function daysConvertor(time) {
        const hoursLabelElement = document.querySelector('#hours');
        const minutesLabelElement = document.querySelector('#minutes');
        const secondsLabelElement = document.querySelector('#seconds');
        const daysLabelElement = document.querySelector('#days');

        const daysToHours = time * 24;
        const hoursToMinutes = daysToHours * 60;
        const minutesToSeconds = hoursToMinutes * 60;

        daysLabelElement.value = time;
        hoursLabelElement.value = daysToHours;
        minutesLabelElement.value = hoursToMinutes;
        secondsLabelElement.value = minutesToSeconds;

    };

    convertButtonElements
        .forEach(button => {
            button.addEventListener('click', (event) => {
                const inputElement = button.previousElementSibling;
                let timeValue = Number(inputElement.value);
                const timeUnit = inputElement.id;

                switch (timeUnit) {
                    case 'hours':
                        timeValue /= 24;
                        break;

                    case 'minutes':
                        timeValue /= (24 * 60);
                        break;

                    case 'seconds':
                        timeValue /= (24 * 60 * 60);
                        break;

                }

                daysConvertor(timeValue)

            });
        });

}