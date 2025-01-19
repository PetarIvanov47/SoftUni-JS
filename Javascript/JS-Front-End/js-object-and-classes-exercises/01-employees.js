function solve(names) {

    // class Employee {
    //     constructor(name) {
    //         this.name = name
    //         this.personalNumber = name.length
    //     }

    //     printEmployee() {
    //         console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
    //     }

    // }

    // names
    //     .map(name => new Employee(name))
    //     .forEach(employee => employee.printEmployee())


    // const employees = {};
    // names.forEach(name => employees[name] = name.length);
    
    
    const employees = names.reduce((employee, name) => {
        const number = name.length;
        employee[name] = number;

        return employee
    }, {})
    
    Object
        .keys(employees)
        .forEach(name => console.log(`Name: ${name} -- Personal Number: ${employees[name]}`))

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])