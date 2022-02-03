function movieStars(input) {
    let budget = Number(input[0]);
    let index = 1;
    let currentActor = input[index];

    while (currentActor !== "ACTION") {
        index++
        if (currentActor.length > 15) {
            budget *= 0.8;
        } else {
            currentActor = Number(input[index]);
            if (currentActor <= budget) {
                budget -= currentActor;
                index++;
            } else {
                console.log(`We need ${(currentActor - budget).toFixed(2)} leva for our actors.`);
                return;
            }
        }
        currentActor = input[index];
    }
    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}
movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"])

