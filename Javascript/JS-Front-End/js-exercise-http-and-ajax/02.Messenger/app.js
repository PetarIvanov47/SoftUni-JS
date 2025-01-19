function attachEvents() {
    const sendButtonElement = document.getElementById('submit');
    const refreshButtonElement = document.getElementById('refresh');

    const authorInputElement = document.querySelector('input[name="author"]');
    const messageInputElement = document.querySelector('input[name="content"]');

    const messengerUrl = 'http://localhost:3030/jsonstore/messenger';

    sendButtonElement.addEventListener('click', async () => {
        const authorName = authorInputElement.value;
        const message = messageInputElement.value;

        const newMessage = {
            author: authorName,
            content: message
        };

        try {
            await fetch(`${messengerUrl}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newMessage)
            });

        } catch (error) {
            console.log(error.message);
        }

    });

    refreshButtonElement.addEventListener('click', async () => {
        const textAreaElement = document.getElementById('messages');

        try {
            const messagesResponse = await fetch(`${messengerUrl}`);
            const allMessages = await messagesResponse.json();

            const result = [];

            Object
                .values(allMessages)
                .forEach(message => result.push(`${message.author}: ${message.content}`));

            textAreaElement.textContent = result.join('\n');

        } catch (error) {
            textAreaElement.textContent = 'No Messages...';
        }

    });
}

attachEvents();
