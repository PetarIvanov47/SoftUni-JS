function heroicInventory(data) {
    const heroes = [];

    for (const heroData of data) {
        let [name, level, itemsAsString] = heroData.split(' / ');
        const items = itemsAsString ? itemsAsString.split(', ') : [];
        level = Number(level);
        heroes.push({ name, level, items });

    };

    console.log(JSON.stringify(heroes));
};

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
