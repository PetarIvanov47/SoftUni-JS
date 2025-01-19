function passwordValidator(password) {
    let result = '';

    function lengthValidator(password) {
        if (password.length < 6 || password.length > 10) {
            result += 'Password must be between 6 and 10 characters' + '\n';
        }
    }

    function lettersAndDigitsValidator(password) {
        const pattern = /[^a-zA-Z0-9]/g;
        let nonLetter = password.match(pattern);
        
        if (nonLetter) {
            result += 'Password must consist only of letters and digits' + '\n'
        }

    }

    function getDigitsCount(password) {
        const pattern = /[0-9]/g;
        let digitsCount = password.match(pattern);
        
        if (!digitsCount || digitsCount.length < 2) {
            result += 'Password must have at least 2 digits';
        }

    }

    lengthValidator(password);
    lettersAndDigitsValidator(password);
    getDigitsCount(password);

    if (!result) {
        return 'Password is valid';
    }

    return result
}

console.log(passwordValidator('logIn'));
console.log(passwordValidator('MyPass123'));
console.log(passwordValidator('Pa$s$s'));







