function oscarsV2(input) {
    let actor = input[0];
    let initialPoints = Number (input[1]);
    let academyMembers = Number (input[2]);
    let points = initialPoints;
    let index = 3;
    let currentPosition = input[index++];
    let nameLength = 0;

    for (i = 0; i < academyMembers; i++){
        if (points >= 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
        nameLength += currentPosition.length;
        currentPosition = Number (input[index++]);
        points += (nameLength * currentPosition)/2;
        currentPosition = input[index++];
        nameLength = 0;
    }

    if (points >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`);
    }

}
oscarsV2(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

