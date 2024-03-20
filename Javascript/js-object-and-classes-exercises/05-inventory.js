function solve(input) {
    const heroesData = [];

    input
        .map(line => line.split(' / '))
        .forEach(([name, level, weapons]) => heroesData.push({
            name,
            level: Number(level),
            items: weapons.split(', '),
        }))

    // for (let line of input) {
    //     const [name, level, items] = line.split(' / ');
    //     const hero = {
    //         name,
    //         level: Number(level),
    //         items: items.split(', '),
    //     };

    //     heroesData.push(hero)
    // }

    heroesData
        .sort((a, b) => {
            return a.level - b.level
        })
        .forEach(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`))
}

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);

