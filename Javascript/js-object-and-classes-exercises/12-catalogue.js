function solve(input) {
    const catalogue = {};

    for (let product of input) {
        const [productName, price] = product.split(' : ');
        const productGroup = productName[0].toUpperCase();

        if (!catalogue[productGroup]){
            catalogue[productGroup] = {};
        }

        catalogue[productGroup][productName] = price;
    }

    const sortedGroups = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (let group of sortedGroups) {
        const sortedProducts = Object.entries(catalogue[group[0]]).sort((a, b) => a[0].localeCompare(b[0]))
        console.log(group[0]);
        sortedProducts.forEach(product => console.log(`  ${product[0]}: ${product[1]}`))
        
    }
}



solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)