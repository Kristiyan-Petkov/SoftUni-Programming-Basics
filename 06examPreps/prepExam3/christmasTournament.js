function christmasTournament (input) {
    let numberOfDays = Number (input[0]);
    let index = 1;
    let currentInputPosition = input[index];
    let dailyGamesWins = 0;
    let dailyGamesLosses = 0;
    let dailyErnings = 0;
    let totalEarnings = 0;
    let daysWon = 0;

    for (let i = numberOfDays; i > 0; i--){
        while(currentInputPosition !== "Finish"){
            index++;
            currentInputPosition = input[index];
            if (currentInputPosition === "win"){
                dailyGamesWins++;
                dailyErnings += 20;
            } else {
                dailyGamesLosses++;
            }
            index++;
            currentInputPosition = input[index];
        }
        if (dailyGamesWins > dailyGamesLosses){
            daysWon++;
            totalEarnings += dailyErnings * 1.1;
        } else {
            totalEarnings += dailyErnings;
        }
        index++;
        currentInputPosition = input[index];
        dailyGamesWins = 0;
        dailyGamesLosses = 0;
        dailyErnings = 0
    }

    if (daysWon > (numberOfDays / 2)){
        totalEarnings = totalEarnings * 1.2;
        console.log(`You won the tournament! Total raised money: ${totalEarnings.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalEarnings.toFixed(2)}`);
    }

}
christmasTournament(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])
