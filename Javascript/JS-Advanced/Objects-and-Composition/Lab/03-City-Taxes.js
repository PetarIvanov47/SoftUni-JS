function collectTaxes(){
    this.treasury += this.taxRate * this.population;
}

function applyGrowth(percentige){
    this.population += Math.floor(this.population * percentige / 100)
};

function applyRecession(percentige){
    this.treasury -= Math.ceil(this.treasury * percentige / 100)
};

function cityTaxes(name, population, treasury){
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession,
    };
    return result
};

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);

