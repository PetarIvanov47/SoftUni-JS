function solve(commands){
    let numberToAdd = 1;
    const result = [];

    for(let command of commands){
        if(command == "add"){
            result.push(numberToAdd)
        }else{
            result.pop();
        }
        
        numberToAdd += 1;
    }

    if(result.length == 0){
        console.log("Empty")
    }else{
        console.log(result.join("\n"));
    }
}

solve(['remove', 
    'remove', 
    'remove']
    )

solve(['add', 
    'add', 
    'remove', 
    'add', 
    'add'])