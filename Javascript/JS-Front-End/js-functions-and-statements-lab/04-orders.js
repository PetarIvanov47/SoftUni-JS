function solve(product, quantity) {
    prices = {
        water: 1,
        coffee: 1.50,
        coke: 1.40,
        snacks: 2
    }

    return (prices[product] * quantity).toFixed(2);
}

function secondSolution(product, quantity) {
    const productPrice = getProductPrice(product);
    let totalPrice = productPrice * quantity;

    function getProductPrice(product) {
        switch (product) {
            case 'water':
                return 1
            case 'coffee':
                return 1.50
            case 'coke':
                return 1.40
            case 'snacks':
                return 2
        }
    }

    return totalPrice.toFixed(2);
}

console.log(secondSolution('coffee', 2));
console.log(solve('water', 5));