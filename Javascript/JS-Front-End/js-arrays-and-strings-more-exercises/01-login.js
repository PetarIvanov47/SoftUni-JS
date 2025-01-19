function solve(loginData) {
    const username = loginData.shift();
    let incorrectAtempt = 0;

    for (password of loginData) {
        let currentPassword = '';

        for (let i = password.length - 1; i >= 0; i--) {
            currentPassword += password[i];
        }

        if (currentPassword === username) {
            console.log(`User ${username} logged in.`);
            return
        }

        incorrectAtempt += 1;

        if (incorrectAtempt === 4) {
            console.log(`User ${username} blocked!`);
            return
        }

        console.log('Incorrect password. Try again.');
    
    }

}

solve(['sunny','rainy','cloudy','sunny','not sunny']);
