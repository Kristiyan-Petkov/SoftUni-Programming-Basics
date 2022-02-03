function easterCompetition (input){
    let kozunatsi = Number (input[0]);
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let maxChef = '';
    let index = 1;
    let currentArrayPosition = input[index];

    for (let i = 1; i <= kozunatsi; i++){
        let currentName = currentArrayPosition;
        index++;
        currentArrayPosition = input[index];
        let currentPoints = 0;
        while (currentArrayPosition !== "Stop"){
            currentPoints += Number (input[index]);
            index++;
            currentArrayPosition = input[index];
        }
        console.log(`${currentName} has ${currentPoints} points.`);
        if (currentPoints > maxPoints){
            maxPoints = currentPoints;
            maxChef = currentName;
            console.log(`${currentName} is the new number 1!`);
        }
        index++;
        currentArrayPosition = input[index];
    }
    console.log(`${maxChef} won competition with ${maxPoints} points!`);

}
easterCompetition(["3",
"Chef Manchev",
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])
