function solve(number) {

    let totalSum = 0;

    for (num of number.toString()) {
        
        totalSum += parseInt(num, 10);
    }

    console.log(totalSum);

}
