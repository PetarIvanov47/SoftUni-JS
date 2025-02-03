function solve(data) {
    const products = {};

    for (let product of data) {
        let [townName, productName, productPrice] = product.split(" | ");
        productPrice = Number(productPrice);

        if (productName in products == false) {
            products[productName] = {
                "price": productPrice,
                "town": townName
            };
        } else if (products[productName]["price"] > productPrice) {
            products[productName] = {
                "price": productPrice,
                "town": townName
            };
        };
    };

    for(let key in products){
        console.log(`${key} -> ${products[key].price} (${products[key].town})`);
    };
};

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | BMW | 99999',]);