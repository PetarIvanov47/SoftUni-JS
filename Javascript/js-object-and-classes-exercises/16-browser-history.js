function openSite(browserHystory, website) {
    browserHystory['Open Tabs'].push(website);
    browserHystory['Browser Logs'].push(`Open ${website}`)
}

function closeSite(browserHystory, website) {
    if (browserHystory['Open Tabs'].includes(website)) {
        const siteIndex = browserHystory['Open Tabs'].indexOf(website);
        browserHystory['Open Tabs'].splice(siteIndex, 1);
        browserHystory['Recently Closed'].push(website);
        browserHystory['Browser Logs'].push(`Close ${website}`)
    }
}

function clearCache(browserHystory) {
    browserHystory['Open Tabs'] = [];
    browserHystory['Recently Closed'] = [];
    browserHystory['Browser Logs'] = [];
}

function solve(browserHystory, commands) {

    for (let line of commands) {
        const splitData = line.split(' ');
        const command = splitData.shift();
        const websiteName = splitData.join(' ');

        switch (command) {
            case 'Open':
                openSite(browserHystory, websiteName)
                break;

            case 'Close':
                closeSite(browserHystory, websiteName)
                break;

            default:
                clearCache(browserHystory)
                break;
        }
    }

    Object
        .entries(browserHystory)
        .forEach((key, idx) => idx === 0 ? console.log(`${key[1]}`) : console.log(`${key[0]}: ${key[1].join(', ')}`))
}

solve({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]

)