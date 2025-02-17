function rectangle(width, height, inputColor){
    const result = {
        get color() {
            return inputColor.charAt(0).toUpperCase() + inputColor.slice(1);
        },
        width,
        height,
        calcArea: function(){
            return this.width * this.height
        }

    };
    return result
};


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());