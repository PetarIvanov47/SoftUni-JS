function solve(inputData) {
    const posse = {};

    const posseCount = Number(inputData.shift());

    for(let i = 0; i < posseCount; i++){
        let [name, hitPoints, bullets] = inputData.shift().split(' ');
        hitPoints = Number(hitPoints);
        bullets = Number(bullets);

        posse[name] = {hp: hitPoints, bullets: bullets};
    };

    const commands = {
        'FireShot': fireShot,
        'TakeHit': takeHit,
        'Reload': reload,
        'PatchUp': patchUp,
        'Ride Off Into Sunset': printResult,
    }

    for (const data of inputData) {
        const commandData = data.split(' - ');
        const command = commandData.shift();

        commands[command](commandData)

    }

    function fireShot(data){
        const [characterName, target] = data;

        if(posse[characterName].bullets > 0){
            posse[characterName].bullets -= 1;
            console.log(`${characterName} has successfully hit ${target} and now has ${posse[characterName].bullets} bullets!`);

        }else{
            console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
        }
    };

    function takeHit(data){
        let [characterName, damage, attacker] = data;
        damage = Number(damage);

        if(posse[characterName].hp - damage > 0){
            posse[characterName].hp -= damage;

            console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${posse[characterName].hp} HP!`);
        }else {
            delete posse[characterName];
            console.log(`${characterName} was gunned down by ${attacker}!`);
        };
    };

    function reload(data){
        const characterName = data[0];

        if(posse[characterName].bullets < 6){
            const loadedbullets = 6 - posse[characterName].bullets;
            posse[characterName].bullets += loadedbullets;

            console.log(`${characterName} reloaded ${loadedbullets} bullets!`);
        }else {
            console.log(`${characterName}'s pistol is fully loaded!`);
        };
    };

    function patchUp(data){
        const [characterName, amount] = data;
        const currentHp = posse[characterName].hp
        let amountRecovered = Number(amount);

        if(currentHp < 100){
            if(currentHp + amountRecovered > 100){
                amountRecovered = 100 - currentHp;
            }

            posse[characterName].hp += amountRecovered;

            console.log(`${characterName} patched up and recovered ${amountRecovered} HP!`);
        }else {
            console.log(`${characterName} is in full health!`);
        };
    };

    function printResult(){
        const result = [];

        for (const name in posse) {
            const healthPoints = posse[name].hp;
            const totalBullets = posse[name].bullets;

            const characterData = `${name}\n  HP: ${healthPoints}\n  Bullets: ${totalBullets}`;
            result.push(characterData)
        };

        console.log(result.join('\n'));
    }

}

// solve((["2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"]))

// solve((["2",
//     "Jesse 100 4",
//     "Walt 100 5",
//     "FireShot - Jesse - Bandit",
//     "TakeHit - Walt - 30 - Bandit",
//     "PatchUp - Walt - 20",
//     "Reload - Jesse",
//     "Ride Off Into Sunset"]))