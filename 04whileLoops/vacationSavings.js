function vacationSavings(input) {
    let vacationCost = Number(input[0]);
    let budget = Number(input[1]);
    let index = 2;
    let spendCounter = 0;
    let daysCounter = 0;
    let action = input[index];
    let amount = Number (input[index + 1]);

    while (budget < vacationCost) {
        if (spendCounter >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysCounter}`);
            break;
        } else if (action === "spend") {
            budget -= amount;
            if (budget < 0){
                budget = 0
            }
            spendCounter++;
            daysCounter++;
            index += 2;
            action = input[index];
            amount = Number(input[index + 1]);
        } else if (action !== "spend"){
            budget += amount;
            spendCounter = 0;
            daysCounter++;
            index += 2;
            action = input[index];
            amount = Number(input[index + 1]);
        }
    }
    if (budget >= vacationCost){
        console.log(`You saved the money for ${daysCounter} days.`)
    }

}
vacationSavings(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])



