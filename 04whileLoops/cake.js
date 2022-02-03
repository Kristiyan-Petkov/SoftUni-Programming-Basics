function cake(input) {
    let cakeSideA = Number(input[0]);
    let cakeSideB = Number(input[1]);
    let piecesTotal = cakeSideA * cakeSideB;
    let piecesTaken = 0;
    let index = 2;
    let batch = input[index];

    while (piecesTaken < piecesTotal) {
        if (batch === "STOP") {
            console.log(`${piecesTotal - piecesTaken} pieces are left.`)
            break;
        }
        piecesTaken += Number(batch);
        index++
        batch = input[index];
    }

    if (piecesTaken >= piecesTotal) {
        console.log(`No more cake left! You need ${piecesTaken - piecesTotal} pieces more.`)
    }

}
cake(["10", "10", "20", "20", "20", "20", "21"])
