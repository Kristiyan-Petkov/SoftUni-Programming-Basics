function basketballTournament(input){
    let gameCounterTournament = 0;
    let gameCounterTotal = 0;
    let currentGamePtsDesi = 0;
    let currentGamePtsGuests = 0;
    let currentTournamentName = '';
    let index = 0;
    let currentPosition = input[index];
    let wins = 0;
    let losses = 0;
    let runsForLoop = 0;

    while (currentPosition !== 'End of tournaments'){
        currentTournamentName = currentPosition;
        index++;
        currentPosition = Number (input[index]);
        runsForLoop = currentPosition;
        // console.log(typeof(currentPosition));
        // console.log(currentPosition);
        for (let i = 1; i <= runsForLoop; i++){
            gameCounterTournament++;
            index++;
            currentPosition = Number (input[index]);
            currentGamePtsDesi = currentPosition;
            
            index++;
            currentPosition = Number (input[index]);
            currentGamePtsGuests = currentPosition;
            if (currentGamePtsDesi > currentGamePtsGuests){
                console.log(`Game ${gameCounterTournament} of tournament ${currentTournamentName}: win with ${currentGamePtsDesi - currentGamePtsGuests} points.`);
                wins++;
            } else if (currentGamePtsDesi < currentGamePtsGuests){
                console.log(`Game ${gameCounterTournament} of tournament ${currentTournamentName}: lost with ${currentGamePtsGuests - currentGamePtsDesi} points.`);
                losses++;
            }
            // console.log(`${index} in forLoop`);
        }
        // console.log(`${index} after forLoop`);
        index++;
        currentPosition = input[index];
        gameCounterTotal += gameCounterTournament;
        gameCounterTournament = 0;
        runsForLoop = 0;
    }

    console.log(`${((wins/gameCounterTotal)*100).toFixed(2)}% matches win`);
    console.log(`${((losses/gameCounterTotal)*100).toFixed(2)}% matches lost`);

}
basketballTournament(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])
