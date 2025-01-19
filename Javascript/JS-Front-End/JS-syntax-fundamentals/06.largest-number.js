function solve(first, second, third) {
    let result;

    if (first > second) {
        if (first > third) {
            result = first
        } else {
            result = third
        }
    } else {
        if (second > third) {
            result = second
        } else {
            result = third
        }
    }

    console.log(`The largest number is ${result}.`);
}
