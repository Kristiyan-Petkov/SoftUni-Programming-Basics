function tennisRanklist (input) {
    let index = 0
    let tournaments = Number (input[index]);
    index++
    let initialPoints = Number (input[index]);
    index++
    let wins = 0
    let finals = 0
    let semiFinals = 0
    let newPoints = 0

    for (let i = 0; i < tournaments; i++) {
        let currentTournament = input[index];
        switch (currentTournament){
            case "W": wins++; newPoints += 2000; break;
            case "F": finals++; newPoints += 1200; break;
            case "SF": semiFinals++; newPoints += 720; break;
        }
        index++;
    }

    let finalPoints = newPoints + initialPoints;
    let averagePoints = newPoints / tournaments;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${((wins / tournaments)*100).toFixed(2)}%`);

}
tennisRanklist(["5","1400","F","SF","W","W","SF"])