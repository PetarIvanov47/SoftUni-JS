function solve(points) {

    function pointsValidator(x1, y1, x2, y2) {
        const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

        if (Number.isInteger(distance)) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        }

        return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
    }

    const [x1, y1, x2, y2, centerX, centerY] = [points[0], points[1], points[2], points[3], 0, 0];

    return `${pointsValidator(x1, y1, centerX, centerY)}\n` +
        `${pointsValidator(x2, y2, centerX, centerY)}\n` +
        `${pointsValidator(x1, y1, x2, y2)}`
}

console.log(solve([2, 1, 1, 1]));

