function circleArea(radius){
    const paramType = typeof radius;

    if(paramType != "number"){
        console.log(`We can not calculate the circle area, because we receive a ${paramType}.`)
        return
    }
    const area = radius ** 2 * Math.PI;
    console.log(area.toFixed(2));
}

circleArea(6);