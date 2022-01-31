function areOfFigures (input) {

    let figure = input[0]
    if (figure === "square") {
        let side = Number (input[1])
        console.log(Math.pow(side,2).toFixed(3))
    }
    if (figure === "rectangle") {
        let sideA = Number (input[1])
        let sideB = Number (input[2])
        console.log(sideA * sideB.toFixed(3))
    }
    if (figure === "circle") {
        let radius = Number (input[1])
        console.log((Math.pow(radius,2)*Math.PI).toFixed(3))
    }
    if (figure === "triangle") {
        let sideA = Number (input[1])
        let heightA = Number (input[2])
        console.log((0.5*sideA*heightA).toFixed(3))
    }

}
areOfFigures(["triangle","4.5","20"])