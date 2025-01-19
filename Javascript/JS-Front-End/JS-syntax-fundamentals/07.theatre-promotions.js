function solve(dayType, age) {
    let price;

    if (0 > age || age > 122) {
        price = 'Error!';
    }else if (0 <= age && age <= 18) {
        if (dayType === 'Weekday') {
            price = '12$';
        }else if (dayType === 'Weekend'){
            price = '15$'
        }else {
            price = '5$'
        }
    }else if (18 < age && age <= 64) {
        if (dayType === 'Weekday') {
            price = '18$';
        }else if (dayType === 'Weekend'){
            price = '20$'
        }else {
            price = '12$'
        }
    }else {
        if (dayType === 'Weekday') {
            price = '12$';
        }else if (dayType === 'Weekend'){
            price = '15$'
        }else {
            price = '10$'
        }
    }

    console.log(price);
    
}
