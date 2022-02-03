function familyTrip(input) {
    let budget = Number (input[0]);
    let nights= Number (input[1]);
    let pricePerNight = Number (input[2]);
    if (nights > 7){
        pricePerNight = pricePerNight * 0.95;
    }
    let extraExpenses = budget * ((Number (input[3]))/100);

    let totalExpenses = (nights*pricePerNight) + extraExpenses;

    if (totalExpenses <= budget){
        console.log(`Ivanovi will be left with ${(budget-totalExpenses).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalExpenses - budget).toFixed(2)} leva needed.`);
    }

}
familyTrip(["800.50",
"8",
"100",
"2"])