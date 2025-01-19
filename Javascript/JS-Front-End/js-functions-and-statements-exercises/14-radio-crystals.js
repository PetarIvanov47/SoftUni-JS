function solve(elements) {
    const targetThickness = elements.shift();
    let data = [];
    
    for (let chunk of elements) {
        data.push(`Processing chunk ${chunk} microns`);

        while (chunk > targetThickness) {
            let currentOperation = '';
            
            if (chunk / 4 >= targetThickness) {
                currentOperation = 'cut';

            }else if (chunk * 0.80 >= targetThickness) {
                currentOperation = 'lap';
                
            }else if (chunk - 20 >= targetThickness) {
                currentOperation = 'grind';

            }else if (chunk - 2 >= targetThickness) {
                currentOperation = 'etch';
            }

            function factory(material, target, currentOperation) {
                const operations = {
                    'cut': (a) => a / 4,
                    'lap': (a) => a * 0.80,
                    'grind': (a) => a - 20,
                    'etch': (a) => a - 2,
                };
            
                counter = 0;

                while (operations[currentOperation](material) >= target - 1) {
                    counter += 1;
                    material = operations[currentOperation](material);
                }
            
                currentOperation = currentOperation.charAt(0).toUpperCase() + currentOperation.slice(1);
            
                return [`${currentOperation} x${counter}`, material]
            
            }

            let operationData = factory(chunk, targetThickness, currentOperation);
            chunk = operationData[1];
            data.push(operationData[0]);

            chunk = Math.floor(chunk);
            data.push(`Transporting and washing`);

        }

        if (chunk < targetThickness) {
            data.push('X-ray x1');
            chunk += 1;
        }

        data.push(`Finished crystal ${chunk} microns`)
    }

    return data.join('\n')

}

console.log(solve([1375, 50000]));