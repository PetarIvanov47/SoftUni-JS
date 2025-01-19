function solve() {
    // Get all add buttons and convert them to array so judge can accept the code
    const buttonAddElements = Array.from(document.querySelectorAll('button[class=add-product]'));

    const textAreaElement = document.querySelector('textarea');
    const checkOutButtonElement = document.querySelector('button[class=checkout]');

    let totalPrice = 0;
    const shoppingCart = new Set();

    // Set EventListener to all Add buttons and to update the shoppingCart
    buttonAddElements
        .forEach(addButton => {
            addButton.addEventListener('click', (event) => {
                const productElement = addButton.parentElement.parentElement;
                const productName = productElement.querySelector('div[class=product-title]').textContent;
                const productPrice = Number(productElement.querySelector('div[class=product-line-price]').textContent);

                textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
                totalPrice += productPrice;
                shoppingCart.add(productName);
            });
        })
    
    // Disable all add buttons after checkout
    checkOutButtonElement.addEventListener('click', (event) => {
        buttonAddElements
            .forEach(addButton => addButton.setAttribute('disabled', 'disabled'));
        
        const allProducts = Array.from(shoppingCart).join(', ');

        textAreaElement.textContent += `You bought ${allProducts} for ${totalPrice.toFixed(2)}.`;

        checkOutButtonElement.setAttribute('disabled', 'disabled')
    });
}