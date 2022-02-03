function christmasTournament(input) {
    let index = 1;
    let tournamentDays = Number(input[0])
    let inputLine = input[index++];
    let wins = 0;
    let losses = 0;
    let daysWon = 0;
    let totalEarnings = 0;
    let dailyEarnings = 0;
    
    for (i = 0; i < tournamentDays; i++){
        while (inputLine !== "Finish"){
            if (inputLine === "win"){
                wins++;
                dailyEarnings += 20;
            } else if (inputLine === "lose"){
                losses++;
            }
            inputLine = input[index++];
        }
        if (wins > losses){
            daysWon++;
            totalEarnings += dailyEarnings * 1.1;
        } else {
            totalEarnings += dailyEarnings;
        }
        dailyEarnings = 0;
        wins = 0;
        losses = 0;
        inputLine = input[index++]
    }

    if (daysWon >= (tournamentDays/2)){
        console.log(`You won the tournament! Total raised money: ${(totalEarnings*1.2).toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalEarnings.toFixed(2)}`)
    }

}
christmasTournament(["2", 
"volleyball", "win", "football", "lose", "basketball", "win", 
"Finish", 
"golf", "win", "tennis", "win", "badminton", "win", 
"Finish"])