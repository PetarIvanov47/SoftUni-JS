window.addEventListener("load", solve);

function solve() {
    const formElement = document.querySelector('form');
    const nameInputElement = document.getElementById('name');
    const phoneInputElement = document.getElementById('phone');
    const categorySelectElement = document.getElementById('category');

    const ulCheckListElement = document.getElementById('check-list');
    const ulContactListElement = document.getElementById('contact-list');

    const addContactButtonElement = document.getElementById('add-btn');

    addContactButtonElement.addEventListener('click', addContact);

    function addContact(){
        const contactName = nameInputElement.value;
        const phoneNumber = phoneInputElement.value;
        const category = categorySelectElement.value;
        if(!contactName || !phoneNumber || !category){
            return
        };

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.addEventListener('click', saveContact);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', editContact);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons');
        buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(saveButton);

        const pCategoryElement = document.createElement('p');
        pCategoryElement.textContent = `category:${category}`;

        const pPhoneElement = document.createElement('p');
        pPhoneElement.textContent = `phone:${phoneNumber}`;

        const pNameElement = document.createElement('p');
        pNameElement.textContent = `name:${contactName}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pNameElement);
        articleElement.appendChild(pPhoneElement);
        articleElement.appendChild(pCategoryElement);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsContainer);
        
        ulCheckListElement.appendChild(liElement);
        
        formElement.reset();

        function editContact(event){
            liElement.remove();

            nameInputElement.value = contactName;
            phoneInputElement.value = phoneNumber;
            categorySelectElement.value = category;
        };


        function saveContact(event){
            liElement.remove();
            buttonsContainer.remove();

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('del-btn');
            deleteButtonElement.addEventListener('click', deleteContact);
            
            liElement.appendChild(deleteButtonElement);

            ulContactListElement.appendChild(liElement);

            function deleteContact(){
                liElement.remove();
            };

        };


    };
}
