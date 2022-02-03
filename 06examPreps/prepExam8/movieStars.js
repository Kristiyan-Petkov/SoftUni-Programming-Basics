function movieStars(input){
    let budget = Number (input[0]);
    let initialBudget = budget;
    let spent = 0;
    let index = 1;
    let currentActor = input[index];
    index++;
    let currentActorPrice = Number (input[index]);

    while (currentActor !== "ACTION"){
        let toSpend = 0;
        if (currentActor.length > 15){
            toSpend = budget * 0.2;
            currentActor = input[index];
            index++;
            currentActorPrice = Number (input[index]);
        } else {
            toSpend = currentActorPrice;
            index++;
            currentActor = input[index];
            index++;
            currentActorPrice = Number (input[index]);
        }
        if (toSpend > budget){
            spent += toSpend;
            console.log(`We need ${(toSpend - budget).toFixed(2)} leva for our actors.`);
            return;
        } else {
            spent += toSpend;
            budget -= toSpend;
        }
    }
    if (budget >= 0){
        console.log(`We are left with ${(initialBudget - spent).toFixed(2)} leva.`);
    }
}
movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])
