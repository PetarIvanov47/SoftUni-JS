function solve(requests) {
    const meetings = {};

    for (let request of requests) {
        const [weekDay, name] = request.split(' ');

        if (meetings[weekDay]) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            meetings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }

    Object.keys(meetings)
        .forEach(day => console.log(`${day} -> ${meetings[day]}`))
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])