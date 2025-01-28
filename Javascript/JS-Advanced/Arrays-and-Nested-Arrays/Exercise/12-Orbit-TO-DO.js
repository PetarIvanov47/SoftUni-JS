function createOrbit([width, height, x, y]) {
    const orbit = [];
    let cellValue = 2;

    for(let r = 0; r < width; r++){
        orbit[r] = [];
        for(let c = 0; c < height; c++){
            orbit[r][c] = (r == x && c == y) ? 1: 0;
        }
    }

    function setSyrrounfingCells(value, row, col){
        

    }
    for(let row = 0; row < orbit.length; row++){
        console.log(orbit[row].join(" "));
    }
}

createOrbit([4, 4, 0, 0]);
console.log("----------------")
createOrbit([5, 5, 2, 2]);
console.log("----------------")
createOrbit([3, 3, 2, 2]);