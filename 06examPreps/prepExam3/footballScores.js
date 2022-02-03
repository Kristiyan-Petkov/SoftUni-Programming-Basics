function footballScores(input) {
    let index = 0;
    let currentScoreString = input[index];
    let currentTeamScore = Number(currentScoreString[0]);
    let currentOponentScore = Number(currentScoreString[2]);
    let inputLength = input.length;
    let wins = 0;
    let losses = 0;
    let draws = 0;

    for (let i = inputLength; i > 0; i--) {
        //console.log(`${currentTeamScore} --- ${currentOponentScore}`)
        if (currentTeamScore > currentOponentScore) {
            wins++;
            index++;
            currentScoreString = input[index];
            currentTeamScore = Number(currentScoreString[0]);
            currentOponentScore = Number(currentScoreString[2]);

        } else if (currentTeamScore < currentOponentScore) {
            losses++;
            index++;
            currentScoreString = input[index];
            currentTeamScore = Number(currentScoreString[0]);
            currentOponentScore = Number(currentScoreString[2]);
        } else if (currentTeamScore === currentOponentScore) {
            draws++;
            index++;
            currentScoreString = input[index];
            currentTeamScore = Number(currentScoreString[0]);
            currentOponentScore = Number(currentScoreString[2]);
        }
        //console.log(`${wins} & ${losses} & ${draws}`);
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);

}
footballScores(["1:1", "0:2", "0:0"])
