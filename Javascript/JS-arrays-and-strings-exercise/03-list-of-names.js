function solve(names) {

    names.sort((a, b) => a.localeCompare(b))
    

    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        console.log((`${i + 1}.${name}`));
    }

}

solve(["John", "Bob", "Bob", "Christina", "Ema"])