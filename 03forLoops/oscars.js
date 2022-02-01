function oscars(input) {
    
    let actor = input[0];
    let academyPoints = Number (input[1]);
    let evaluators = Number (input[2]);
    let evatuationCells = (evaluators * 2) + 3
    let finalPoints = 0

    for (let i = 3; i < evatuationCells; i += 2) {
        let evaluatorName = (input[i])
        let evaluatorLength = evaluatorName.length
        let evaluatorPoints = input[(i + 1)]
        let increment = ((evaluatorLength * evaluatorPoints) / 2)
        finalPoints += increment
        let endValue = finalPoints + academyPoints;
        if (endValue > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${(endValue.toFixed(1))}!`);
            break;
        }
    }

    let endValue = finalPoints + academyPoints;

    if (endValue <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5 - endValue).toFixed(1)} more!`)
    }
    

}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])