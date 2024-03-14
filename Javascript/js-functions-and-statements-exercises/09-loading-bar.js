function createLoadingBar(percents) {
    let loadingBar = [];

    for (let i = 10; i <= 100; i += 10) {
        
        if (i <= percents) {
            loadingBar.push('%');
        } else {
            loadingBar.push('.')
        }
    }

    loadingBar = loadingBar.join('');
    
    if (loadingBar.includes('.')) {
        return `${percents}% [${loadingBar}]\nStill loading...`
    }

    return `100% Complete!\n[${loadingBar}]`

}

console.log(createLoadingBar(30));
console.log(createLoadingBar(50));
console.log(createLoadingBar(100));