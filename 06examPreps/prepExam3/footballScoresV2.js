function footballScores(input) {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    let firstScoreString = input[0];
    let firstTeamScore = Number(firstScoreString[0]);
    let firstOponentScore = Number(firstScoreString[2]);
    if (firstTeamScore > firstOponentScore){
        wins++;
    } else if (firstTeamScore < firstOponentScore){
        losses++;
    } else if (firstTeamScore === firstOponentScore){
        draws++;
    }

    let secondScoreString = input[1];
    let secondTeamScore = Number(secondScoreString[0]);
    let secondOponentScore = Number(secondScoreString[2]);
    if (secondTeamScore > secondOponentScore){
        wins++;
    } else if (secondTeamScore < secondOponentScore){
        losses++;
    } else if (secondTeamScore === secondOponentScore){
        draws++;
    }

    let thirdScoreString = input[2];
    let thirdTeamScore = Number(thirdScoreString[0]);
    let thirdOponentScore = Number(thirdScoreString[2]);
    if (thirdTeamScore > thirdOponentScore){
        wins++;
    } else if (thirdTeamScore < thirdOponentScore){
        losses++;
    } else if (thirdTeamScore === thirdOponentScore){
        draws++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);

}
footballScores(["1:1", "0:2", "3:0"])