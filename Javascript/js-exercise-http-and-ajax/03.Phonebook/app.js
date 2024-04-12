function attachEvents() {
    const loadButtonElement = document.getElementById('btnLoad');
    const creatButtonElement = document.getElementById('btnCreate');
    const phonebookElement = document.getElementById('phonebook');

    const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook';

    loadButtonElement.addEventListener('click', loadPhoneBook);

    creatButtonElement.addEventListener('click', createNewContact);

    phonebookElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const contactId = e.target.id;
            const contactLiElement = e.target.parentElement;
            contactLiElement.remove();
            
            fetch(`${phonebookUrl}/${contactId}`, {
                method: 'DELETE'
            })
            .catch(err => console.log(err.message));
        }
    });


    async function loadPhoneBook() {
        phonebookElement.innerHTML = '';

        try {
            const phonebookResponse = await fetch(`${phonebookUrl}`);
            const allContacts = await phonebookResponse.json();

            const phonebookContactsFragment = document.createDocumentFragment();

            Object
                .values(allContacts)
                .forEach(contactData => {
                    const liElement = document.createElement('li');
                    const personText = `${contactData.person}: ${contactData.phone}`;
                    liElement.textContent = personText;

                    const deleteButtonElement = document.createElement('button');
                    deleteButtonElement.id = contactData._id;
                    deleteButtonElement.textContent = 'Delete';

                    liElement.appendChild(deleteButtonElement);

                    phonebookContactsFragment.appendChild(liElement)

                });

            phonebookElement.appendChild(phonebookContactsFragment);

        } catch (error) {
            console.log('Phonebook Not Found...');
        }

    };

    async function createNewContact() {
        const inputPersonElement = document.getElementById('person');
        const inputPhoneElement = document.getElementById('phone');

        try {

            const personName = inputPersonElement.value
            const personPhone = inputPhoneElement.value;

            inputPersonElement.value = '';
            inputPhoneElement.value = '';

            if (!validateContact(personName, personPhone)) {
                throw new Error('Invalid Name or Number...')
            }


            await fetch(`${phonebookUrl}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    person: personName,
                    phone: personPhone,
                })
            });

            await loadPhoneBook();

        } catch (error) {
            console.log(error.message);
        }
    };

    function validateContact(name, phone) {
        if (!name) {
            return false
        }

        if (!phone) {
            return false
        }

        return true
    }
}

attachEvents();

