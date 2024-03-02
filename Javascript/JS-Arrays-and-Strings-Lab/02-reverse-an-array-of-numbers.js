function solve(n, numbers) {
    let arr = numbers.slice(0, n).reverse().join(' ');

    console.log(arr);
}

solve(4, [-1, 20, 99, 5])