function easterCompetition (input){
    let numberOfChefs = Number (input[0]);
    let index = 1;
    let currentInputPosition = input[index];
    let currentChefName = ``;
    let currentChefPoints = 0; 
    let leaderChefName = ``;
    let leaderChefPoints = Number.MIN_SAFE_INTEGER;

    for (let i = numberOfChefs; i > 0; i--){
        currentChefName = input[index++];
        currentChefPoints = 0;
        currentInputPosition = input[index];
        while (currentInputPosition !== "Stop"){
            currentChefPoints += Number (currentInputPosition);
            index++;
            currentInputPosition = input[index];
        }
        console.log(`${currentChefName} has ${currentChefPoints} points.`);
        if (currentChefPoints > leaderChefPoints){
            leaderChefName = currentChefName;
            leaderChefPoints = currentChefPoints;
            console.log(`${currentChefName} is the new number 1!`);
        }
        index++
    }
    console.log(`${leaderChefName} won competition with ${leaderChefPoints} points!`);
        
}
easterCompetition(["3",
"Chef Manchev",
"10","10","10","10","Stop",
"Natalie",
"8","2","9","Stop",
"George",
"9","2","4","2","Stop"])
