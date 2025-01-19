function daysInAMonth(month, year){
    const result = new Date(year, month, 0).getDate();
    console.log(result);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
daysInAMonth(2, 2024);