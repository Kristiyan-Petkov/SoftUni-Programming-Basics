function christmasTournament (input){
    let tournamentDays = Number (input[0]);
    let index = 1;
    let dailyWins = 0;
    let dailyLosses = 0;
    let daysWon = 0;
    let dailyEarnings = 0;
    let totalEarnings = 0;
    let currentPosition = input[index];

    for (let i = tournamentDays; i > 0; i--){
        while (currentPosition !== "Finish"){
            index++;
            currentPosition = input[index];
            switch (currentPosition){
                case "win":
                    dailyWins++;
                    dailyEarnings += 20;
                    break;
                case "lose":
                    dailyLosses++;
                    break;
            }
            index++;
            currentPosition = input[index];
        }
        if (dailyWins > dailyLosses){
            totalEarnings += dailyEarnings * 1.1;
            daysWon++
        } else {
            totalEarnings += dailyEarnings;
        }
        index++;
        currentPosition = input[index];
        dailyEarnings = 0;
        dailyWins = 0;
        dailyLosses = 0;
    }

    if (daysWon > (tournamentDays/2)){
        totalEarnings = totalEarnings * 1.2;
        console.log(`You won the tournament! Total raised money: ${totalEarnings.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalEarnings.toFixed(2)}`)
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
"volleybal",
"win",
"basketball",
"win",
"Finish"])




