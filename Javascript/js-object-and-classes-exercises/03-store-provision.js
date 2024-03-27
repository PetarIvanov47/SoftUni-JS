function solve(currentStock, orderedStock) {
    const storeProducts = {};
    const allProducts = currentStock.concat(orderedStock);
    // const allProducts = [...currentStock, ...orderedStock];


    for (let i = 0; i < allProducts.length; i += 2) {
        const [product, quantity] = [allProducts[i], allProducts[i + 1]];

        if (!storeProducts[product]) {
            storeProducts[product] = 0;
        }

        storeProducts[product] += Number(quantity);

    }

    Object
        .keys(storeProducts)
        .forEach(product => console.log(`${product} -> ${storeProducts[product]}`))

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
