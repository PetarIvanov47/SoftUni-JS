function solve(start, end) {
    
    let numbers = '';
    let totalSum = 0;

    for (let i = start; i <= end ; i++){
        numbers += i.toString() + ' ';
        totalSum += i;
    }

    console.log(`${numbers}\nSum: ${totalSum}`);

}
