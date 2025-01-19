function solve(startingYield) {
    let days = 0;
    let totalSpice = 0;
    let yieldDrop = 10;
    let workersConsume = 26;
    let currentYield = startingYield;

    while (currentYield >= 100) {
        days += 1;

        totalSpice += currentYield - workersConsume;
        currentYield -= yieldDrop;
    }

    if (totalSpice >= 26) {
        totalSpice -= workersConsume;
    }

    console.log(days);
    console.log(totalSpice);
}

solve(10)
