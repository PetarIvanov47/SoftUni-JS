function solve(pieFlavors, start, end) {
    const startIndex = pieFlavors.indexOf(start);
    const endIndex = pieFlavors.indexOf(end); 
    const result = pieFlavors.slice(startIndex, endIndex + 1);
    return result
};

// console.log(solve(['Pumpkin Pie',
//     'Key Lime Pie',
//     'Cherry Pie',
//     'Lemon Meringue Pie',
//     'Sugar Cream Pie'],
//     'Key Lime Pie',
//     'Lemon Meringue Pie'));
console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));