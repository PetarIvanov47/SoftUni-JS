function solve(phoneData) {
    const phoneBook = {};

    phoneData.forEach(line => {
        const [name, number] = line.split(' ');
        phoneBook[name] = number
    })

    Object.keys(phoneBook)
        .forEach(name => console.log(`${name} -> ${phoneBook[name]}`))

}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])

