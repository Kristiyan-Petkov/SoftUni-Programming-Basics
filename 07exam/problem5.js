function bestPlayer (input){
    let bestPlayer = "";
    let beastPlayerGoals = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let currentPlayer = input[index];

    while (currentPlayer !== "END"){
        index++;
        currentPlayerGoals = Number (input[index]);
        if (currentPlayerGoals > beastPlayerGoals){
            beastPlayerGoals = currentPlayerGoals;
            bestPlayer = currentPlayer;
            if (currentPlayerGoals >= 10){
                console.log(`${bestPlayer} is the best player!`);
                console.log(`He has scored ${beastPlayerGoals} goals and made a hat-trick !!!`);
                return;
            }
        }
        index++;
        currentPlayer = input[index];
    }

    console.log(`${bestPlayer} is the best player!`);
    if (beastPlayerGoals >= 3){
        console.log(`He has scored ${beastPlayerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${beastPlayerGoals} goals.`);
    }

}
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])
