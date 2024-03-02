function solve(groupCount, type, dayOfTheWeek) {

    let totalPrice;
    let ticketPrice;

    switch (type) {
        case 'Students':

            if (dayOfTheWeek === 'Friday') {
                ticketPrice = 8.45;
            } else if (dayOfTheWeek === 'Saturday') {
                ticketPrice = 9.80;
            } else {
                ticketPrice = 10.46;
            }

            totalPrice = ticketPrice * groupCount

            if (groupCount >= 30) {
                totalPrice *= 0.85
            }

            break;
        
        case 'Business':

            if (dayOfTheWeek === 'Friday') {
                ticketPrice = 10.90;
            } else if (dayOfTheWeek === 'Saturday') {
                ticketPrice = 15.60;
            } else {
                ticketPrice = 16;
            }

            totalPrice = ticketPrice * groupCount

            if (groupCount >= 100) {
                totalPrice -= ticketPrice * 10
            }

            break;
        
        default:

            if (dayOfTheWeek === 'Friday') {
                ticketPrice = 15;
            } else if (dayOfTheWeek === 'Saturday') {
                ticketPrice = 20;
            } else {
                ticketPrice = 22.50;
            }

            totalPrice = ticketPrice * groupCount

            if (groupCount >= 10 && groupCount <= 20) {
                totalPrice *= 0.95
            }

            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
