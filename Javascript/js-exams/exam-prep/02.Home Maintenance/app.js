window.addEventListener("load", solve);

function solve() {
    // Get inout fields elements
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    // Get task list element
    const taskListElement = document.getElementById('task-list');

    // Get task list element
    const doneTasksListElement = document.getElementById('done-list');

    // get Add task button el
    const addTastButtonEl = document.getElementById('add-btn');

    addTastButtonEl.addEventListener('click', addTask);


    function addTask() {
        const place = placeInputElement.value;
        const action = actionInputElement.value;
        const personName = personInputElement.value;

        if (!validateInputValue(place, action, personName)) {
            return
        };

        const ulFragment = createTaskFragment(place, action, personName);

        taskListElement.appendChild(ulFragment);

        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';

    };

    function validateInputValue(place, action, personName) {
        if (!place || !action || !personName) {
            return false
        };

        return true
    };

    function createTaskFragment(place, action, personName) {
        // Buttons Elements
        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';
        doneButtonElement.addEventListener('click', taskDone);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';
        editButtonElement.addEventListener('click', editTask);

        // Buttons container element
        const buttonsContainerElement = document.createElement('div');
        buttonsContainerElement.classList.add('buttons');
        buttonsContainerElement.appendChild(editButtonElement);
        buttonsContainerElement.appendChild(doneButtonElement);

        // Paragtaphs elements
        const personNamePrElement = document.createElement('p');
        personNamePrElement.textContent = `Person:${personName}`;

        const actionPrElement = document.createElement('p');
        actionPrElement.textContent = `Action:${action}`;

        const placePrElement = document.createElement('p');
        placePrElement.textContent = `Place:${place}`;

        // Article container element
        const articleElement = document.createElement('article');
        articleElement.appendChild(placePrElement);
        articleElement.appendChild(actionPrElement);
        articleElement.appendChild(personNamePrElement);

        // List item element
        const liElement = document.createElement('li');
        liElement.classList.add('clean-task')
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsContainerElement);

        const ulFragment = document.createDocumentFragment();
        ulFragment.appendChild(liElement);

        return ulFragment
    };

    function createDoneListFragment(place, action, person){
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', deleteTask);

        const articleElement = document.createElement('article');

        const personPrElement = document.createElement('p');
        personPrElement.textContent = `Person:${person}`;

        const actionPrElement = document.createElement('p');
        actionPrElement.textContent = `Action:${action}`;

        const placePrElement = document.createElement('p');
        placePrElement.textContent = `Place:${place}`;

        articleElement.appendChild(placePrElement);
        articleElement.appendChild(actionPrElement);
        articleElement.appendChild(personPrElement);

        const liElement = document.createElement('li');

        liElement.appendChild(articleElement);
        liElement.appendChild(deleteButtonElement);

        const ulFragment = document.createDocumentFragment();

        ulFragment.appendChild(liElement);

        return ulFragment
    };

    function getData(event){
        const articleElement = event.target.parentElement.previousElementSibling;
        const liElement = articleElement.parentElement;

        const taskData = Array
            .from(articleElement.children)
            .map(pEl => {
                const result = pEl.textContent.split(':')[1];
                
                return result
            });
        
        taskData.push(liElement)

        return taskData
    }

    function editTask(e) {
        const [place, action, person, taskListLiElement] = getData(e)
        taskListLiElement.remove();

        placeInputElement.value = place;
        actionInputElement.value = action;
        personInputElement.value = person;

    };

    function taskDone(e) {
        const [place, action, person, taskListLiElement] = getData(e)
        
        taskListLiElement.remove();

        const doneTaskLiFragment = createDoneListFragment(place, action, person);
        doneTasksListElement.appendChild(doneTaskLiFragment);
    };

    function deleteTask(e) {
        e.target.parentElement.remove();
    }
}

