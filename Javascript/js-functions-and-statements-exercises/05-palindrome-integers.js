function findPalindroms(numbers) {

    for (num of numbers) {
        console.log(isPalindrome(num));
    }

    function isPalindrome(num) {
        let reverseNum = '';
        let currentNum = num;
    
        while (currentNum !== 0) {
            reverseNum += currentNum % 10;
            currentNum = parseInt(currentNum / 10);
        }
    
        return reverseNum == num
    }

}

findPalindroms([32,2,232,1010]);

