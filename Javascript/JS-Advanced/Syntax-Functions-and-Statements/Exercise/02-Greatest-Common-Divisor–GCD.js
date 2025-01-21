function solve(num1, num2) {
    const lowestNumber = num1 < num2 ? num1 : num2;
    let gcd;
    
    for(let i = 1; i <= lowestNumber; i++){
        const div1 = num1 / i;
        const div2 = num2 / i;
        if(div1 % 1 === 0 && div2 % 1 === 0){
            gcd = i;
        }
    }

    console.log(gcd);
}

solve(15, 5);
solve(2154, 458);