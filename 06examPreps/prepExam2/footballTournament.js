function footballTournament (input){
    let teamName = input[0];
    let gamesPlayed = Number (input[1]);
    let index = 2;
    let currentGame = input[index];

    let totalPoints = 0;
    let wins = 0;
    let draws = 0;
    let losses = 0;

    if (gamesPlayed === 0){
        console.log(`${teamName} hasn't played any games during this season.`);
        return;
    }

    for (i = 1; i <= gamesPlayed; i++){
        switch(currentGame){
            case "W": 
                totalPoints += 3;
                wins++;
                index++;
                currentGame = input[index];
                break;
            case "D":
                totalPoints += 1;
                draws++;
                index++;
                currentGame = input[index];
                break;
            case "L":                
                losses++;
                index++;
                currentGame = input[index];
                break;
        }
    }

    console.log(`${teamName} has won ${totalPoints} points during this season.`)
    console.log(`Total stats:`)
    console.log(`## W: ${wins}`)
    console.log(`## D: ${draws}`)
    console.log(`## L: ${losses}`)
    console.log(`Win rate: ${((wins / gamesPlayed) * 100).toFixed(2)}%`)



}
footballTournament(["Liverpool","10","W","D","D","W","L","W","D","D","W","W"])
