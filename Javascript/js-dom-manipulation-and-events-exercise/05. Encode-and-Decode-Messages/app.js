function encodeAndDecodeMessages() {
    const sendMessageElement = document.querySelector('#main div:nth-of-type(1) textarea');
    const receivedMessageElement = document.querySelector('#main div:nth-of-type(2) textarea');

    const encodeButton = sendMessageElement.nextElementSibling;
    const decodeButton = receivedMessageElement.nextElementSibling;

    encodeButton.addEventListener('click', (event) => {
        const sendMessageText = sendMessageElement.value.split('');
        decodeButton.removeAttribute('disabled', 'disabled');

        const encodedMessage = sendMessageText
            .map(el => String.fromCharCode((el.charCodeAt() + 1)))
            .join('');

        sendMessageElement.value = '';
        receivedMessageElement.value = encodedMessage;
    });

    decodeButton.addEventListener('click', (event) => {
        const receivedMessage = receivedMessageElement.value.split('');

        const decodedMessage = receivedMessage
            .map(el => String.fromCharCode((el.charCodeAt() - 1)))
            .join('');
        
        receivedMessageElement.value = decodedMessage;
        decodeButton.setAttribute('disabled', 'disabled');
    });

}