function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;

    for (let f = 1; f <= lostFights; f++) {

        if (f % 2 === 0) {
            totalExpenses += helmetPrice;
        }

        if (f % 3 === 0) {
            totalExpenses += swordPrice;
        }

        if (f % 6 === 0) {
            totalExpenses += shieldPrice;
        }

        if (f % 12 === 0) {
            totalExpenses += armorPrice;
        }

    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
