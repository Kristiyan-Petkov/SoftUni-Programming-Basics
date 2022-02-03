function catWalking (input) {
    let dailyWalkMins = Number (input[0]);
    let dailyWalksNum = Number (input[1]);
    let dailyCalories = Number (input[2]);
    let caloriesBurned = dailyWalkMins * dailyWalksNum * 5;

    if (caloriesBurned >= dailyCalories/2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}    
catWalking(["30", "3", "600"])
