function solve(fruitName, grams, moneyPerKg){
    const kilograms = (grams / 1000);
    const result = (kilograms * moneyPerKg);
    console.log(`I need $${result.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitName}.`);
}

solve('orange', 1000, 1)
solve('apple', 1563, 2.35)