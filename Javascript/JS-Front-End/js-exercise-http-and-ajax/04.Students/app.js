function attachEvents() {
    const tbElement = document.querySelector('#results tbody');
    const submitButtonElement = document.getElementById('submit');

    const studentsUrl = 'http://localhost:3030/jsonstore/collections/students';

    async function fillTable() {
        try {
            const studentsResponse = await fetch(`${studentsUrl}`);
            const allStudentsData = await studentsResponse.json();

            const tbodyFragment = document.createDocumentFragment();

            Object
                .values(allStudentsData)
                .forEach(data => {
                    const studentDataElement = createTrElement(data);
                    tbodyFragment.appendChild(studentDataElement);
                });
            
            tbElement.appendChild(tbodyFragment);
            

        } catch (error) {
            console.log(error.message);
        }
    };

    function createTrElement(data){
        const tdGradeEl = document.createElement('td');
        tdGradeEl.textContent = data.grade;

        const tdFacultyNumEl = document.createElement('td');
        tdFacultyNumEl.textContent = data.facultyNumber;

        const tdLastNameEl = document.createElement('td');
        tdLastNameEl.textContent = data.lastName;

        const tdNameEl = document.createElement('td');
        tdNameEl.textContent = data.firstName;

        const trElement = document.createElement('tr');
        trElement.appendChild(tdNameEl);
        trElement.appendChild(tdLastNameEl);
        trElement.appendChild(tdFacultyNumEl);
        trElement.appendChild(tdGradeEl);
 
        return trElement
    };

    submitButtonElement.addEventListener('click', async () => {
        const student = createStudent();

        if(!student){
            return
        }

        try {
            await fetch(`${studentsUrl}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(student)
            });

            const studentTrDataElement = createTrElement(student);
            tbElement.appendChild(studentTrDataElement);

        } catch (error) {
            console.log(error.message);
        }
        

    });

    function createStudent(){
        const frNameInputEl = document.querySelector('input[name="firstName"]');
        const lastNameInputEl = document.querySelector('input[name="lastName"]');
        const numberNameInputEl = document.querySelector('input[name="facultyNumber"]');
        const gradeNameInputEl = document.querySelector('input[name="grade"]');

        const firstName = frNameInputEl.value;
        const lastName = lastNameInputEl.value;
        const facultyNumber = numberNameInputEl.value;
        const grade = gradeNameInputEl.value;

        if (!firstName){
            return
        }
        if (!lastName){
            return
        }
        if (!facultyNumber){
            return
        }
        if (!grade){
            return
        }

        const student = {
            firstName,
            lastName,
            facultyNumber,
            grade
        };

        return student

    }

    fillTable()
}

attachEvents();