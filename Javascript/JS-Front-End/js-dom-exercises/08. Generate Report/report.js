function generateReport() {
    const checkboxElements = Array.from(document.querySelectorAll('tr th input'));
    const trElements = document.querySelectorAll('tbody tr');
    const checkedBoxIndexes = checkboxElements.map((x, i) => {
        if (x.checked){
            return i
        } 
    }).filter(index => index !== undefined);
    const textAreaElement = document.getElementById('output');

    result = [];
    

    for (let row of trElements) {
        const employeeDataObject = {};

        const columnData = Array.from(row.children);

        for (let idx of checkedBoxIndexes) {
            const checkedColumnContent = columnData[idx].textContent;
            const checkedColumnName = checkboxElements[idx]['name']
            employeeDataObject[checkedColumnName] = checkedColumnContent;
        }

        result.push(employeeDataObject)
        
    }

    textAreaElement.value = JSON.stringify(result, null, 2);

}