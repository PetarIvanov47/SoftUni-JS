function factory(fruits){
    const result = {};
    
    for(let i = 0; i < fruits.length; i += 2){
        result[fruits[i]] = Number(fruits[i + 1]);
    };

    console.log(result)
};

factory(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
factory(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);

