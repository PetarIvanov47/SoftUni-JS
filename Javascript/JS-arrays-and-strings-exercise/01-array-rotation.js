function rotation(numbers, rotationCount) {
    
    for (let i = 0; i < rotationCount; i++){
        let firstEl = numbers.shift()
        numbers.push(firstEl)
    }

    console.log(numbers.join(' '));

}

rotation([2, 4, 15, 31], 5)
