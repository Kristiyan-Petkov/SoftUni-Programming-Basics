function bestPlayer (input){
    let index = 0;
    let player = input[index++];
    let goals = Number (input[index]);
    let winner = "";
    let goalsComparison = goals;

    while (player !== "END"){
        if (goals >= 10){
            console.log(`${player} is the best player!`);
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
            return;
        } else if (goals > goalsComparison){
            goalsComparison = goals;
            winner = player;
            index++;
            player = input[index++];
            goals = Number (input[index]);
        } else {
            index++;
            player = input[index++];
            goals = Number (input[index]);
        }
    }
    
    if (goalsComparison >= 3){
        console.log(`${winner} is the best player!`);
        console.log(`He has scored ${goalsComparison} goals and made a hat-trick !!!`);
    } else {
        console.log(`${winner} is the best player!`);
        console.log(`He has scored ${goalsComparison} goals.`);
    }


}
bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4"])


