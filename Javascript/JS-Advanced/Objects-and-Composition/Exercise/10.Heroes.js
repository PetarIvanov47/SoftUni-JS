function solve(){
    function createMage (name){
        function castSpells(spell){
            this.mana -= 1;
            console.log(`${this.name} cast ${spell}`)
        };
        const result = {
            name,
            health: 100,
            mana: 100,
            cast: castSpells
        };
        return result
    };

    function createFighter(name){
        function fight(){
            this.stamina -= 1;
            console.log(`${this.name} slashes at the foe!`)
        };
        const result = {
            name,
            health: 100,
            stamina: 100,
            fight: fight
        };

        return result
    };

    const create  = {
            mage: createMage,
            fighter: createFighter
        };


    return create
};

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
