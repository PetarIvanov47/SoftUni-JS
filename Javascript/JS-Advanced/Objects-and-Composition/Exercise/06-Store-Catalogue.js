function catalogueFactory(input) {
    const catalogue = {};
    for(let data of input){
        let [product, price] = data.split(" : ");
        price = Number(price);
        const group = product[0];
        if(group in catalogue == false){
            catalogue[group] = {};
        };

        catalogue[group][product] = price;
    };

    //Group Sort
    const sortedGroups = Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]));

    //Product Sort
    for (const [group, products] of sortedGroups){
        console.log(group);
        const sortedProducts = Object.entries(products)
                .sort((a, b) => a[0].localeCompare(b[0]));
        sortedProducts.forEach(product => console.log(`  ${product[0]}: ${product[1]}`));
        
    }; 
};

catalogueFactory(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);