function attachEventsListeners() {
    const convertButtonElements = Array
        .from(document.querySelectorAll('input[type=button]'));
    
        function toDays(time, unit){

            switch (unit) {
                case 'hours':
                    time /= 24;
                    break;
    
                case 'minutes':
                    time /= (24 * 60);
                    break;
    
                case 'seconds':
                    time /= (24 * 60 * 60);
                    break;
            }

            return time
        }
        
    
    function daysConvertor(days) {
        const daysInputElement = document.querySelector('#days');
        const hoursInputElement = document.querySelector('#hours');
        const minutesInputElement = document.querySelector('#minutes');
        const secondsInputElement = document.querySelector('#seconds');
        
        
        daysInputElement.value = days
        hoursInputElement.value = days * 24;
        minutesInputElement.value = days * 24 * 60;
        secondsInputElement.value = days * 24 * 60 * 60

    };

    convertButtonElements
        .forEach(button => {
            button.addEventListener('click', (event) => {
                const inputElement = button.previousElementSibling;
                let timeValue = Number(inputElement.value);
                const timeUnit = inputElement.id;

                timeValue = toDays(timeValue, timeUnit);

                daysConvertor(timeValue)

            });
        });

}

// function attachEventsListeners() {
//     // Get Convert Buttons
//     const daysButtonElement = document.getElementById('daysBtn');
//     const hoursButtonElement = document.getElementById('hoursBtn');
//     const minutesButtonElement = document.getElementById('minutesBtn');
//     const secondsButtonElement = document.getElementById('secondsBtn');

//     // Get input Elements
//     const daysInputEl = document.getElementById('days');
//     const hoursInputEl = document.getElementById('hours');
//     const minutesInputEl = document.getElementById('minutes');
//     const secondsInputEl = document.getElementById('seconds');

//     daysButtonElement.addEventListener('click', (e) => {
//         const days = Number(daysInputEl.value);
        
//         hoursInputEl.value = days * 24;
//         minutesInputEl.value = days * 24 * 60;
//         secondsInputEl.value = days * 24 * 60 * 60;
        
//     });

//     hoursButtonElement.addEventListener('click', (e) => {
//         const hours = Number(hoursInputEl.value);
//         console.log(hours);
        
//         daysInputEl.value = hours / 24;
//         minutesInputEl.value = hours * 60;
//         secondsInputEl.value = hours * 60 * 60;
        
//     });

//     minutesButtonElement.addEventListener('click', (e) => {
//         const minutes = Number(minutesInputEl.value);
        
//         daysInputEl.value = minutes / (60 * 24);
//         hoursInputEl.value = minutes / 60;
//         secondsInputEl.value = minutes * 60;
        
//     });

//     secondsButtonElement.addEventListener('click', (e) => {
//         const seconds = Number(secondsInputEl.value);
        
//         daysInputEl.value = seconds / (60 * 60 * 24);
//         hoursInputEl.value = seconds / (60 * 60);
//         minutesInputEl.value = seconds / 60;
    
//     });

// }