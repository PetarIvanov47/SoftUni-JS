function solve(goldPerDay) {
    let bitcoins = 0;
    const bitCoinPrice = 11949.16;
    const goldPricePerGram = 67.51;
    let dayOfFirstCoin;
    let totalProfit = 0;

    for (let i = 0; i < goldPerDay.length; i++) {
        let todayGoldMined = goldPerDay[i];
        let bitcoinsForTheDay = 0;

        if ((i+1) % 3 === 0 && i !== 0) {
            todayGoldMined *= 0.70;
        }

        totalProfit += todayGoldMined * goldPricePerGram;

        bitcoinsForTheDay = Math.floor(totalProfit/bitCoinPrice);
        bitcoins += bitcoinsForTheDay;
        totalProfit -= bitCoinPrice * bitcoinsForTheDay;

        if (bitcoinsForTheDay > 0 && !dayOfFirstCoin) {
            dayOfFirstCoin = i + 1;
        }    

    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (dayOfFirstCoin){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstCoin}`);
    }
    
    console.log(`Left money: ${totalProfit.toFixed(2)} lv.`);

}

solve([100, 200, 300]);