function solve() {
    function trFactory(furnitureObject) {
        const trElement = document.createElement('tr');

        for (let td in furnitureObject) {
            const tdElement = document.createElement('td');

            if (td === 'img') {
                const imgElement = document.createElement('img');
                imgElement.src = furnitureObject[td];
                tdElement.appendChild(imgElement);

                const firstChildElement = trElement.firstChild;
                trElement.insertBefore(tdElement, firstChildElement);


            } else {
                const paragraphElement = document.createElement('p');
                paragraphElement.textContent = furnitureObject[td];
                tdElement.appendChild(paragraphElement);
                trElement.appendChild(tdElement);
            }


        };

        // Create input type checkbox element as a last element in the every row
        const tdElement = document.createElement('td');
        const tdInputElement = document.createElement('input');
        tdInputElement.setAttribute('type', 'checkbox');
        tdElement.appendChild(tdInputElement)
        trElement.appendChild(tdElement);

        return trElement
    }

    const inputElement = document.querySelector('#exercise textarea:first-of-type');
    const outputElement = document.querySelector('#exercise textarea:last-of-type');

    const generateButton = document.querySelector('#exercise button:first-of-type');
    const buyButton = document.querySelector('#exercise button:last-of-type');

    const tbodyElement = document.querySelector('table tbody');

    const shoppingCart = {
        furnitures: [],
        totalPrice: 0,
        totalFactor: 0,
    };

    generateButton.addEventListener('click', () => {
        const furnitureList = JSON.parse(inputElement.value);

        furnitureList.forEach(furniture => tbodyElement.appendChild(trFactory(furniture)));
    });

    buyButton.addEventListener('click', () => {
        const checkBoxElements = document.querySelectorAll('input[type=checkbox]');

        Array
            .from(checkBoxElements)
            .forEach(box => {
                if (box.checked) {

                    const [furnitureName, price, decorationFactor] = Array
                        .from(box.parentElement.parentElement.querySelectorAll('td p'))
                        .map(p => p.textContent);


                    shoppingCart.furnitures.push(furnitureName);
                    shoppingCart.totalPrice += Number(price);
                    shoppingCart.totalFactor += Number(decorationFactor);
                };
            });

        const averageFactor = (shoppingCart.totalFactor / shoppingCart.furnitures.length);

        outputElement.value += `Bought furniture: ${shoppingCart.furnitures.join(', ')}\n`;
        outputElement.value += `Total price: ${shoppingCart.totalPrice.toFixed(2)}\n`;
        outputElement.value += `Average decoration factor: ${averageFactor}`;

    });



}