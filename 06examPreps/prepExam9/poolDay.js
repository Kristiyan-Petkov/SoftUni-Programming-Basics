function poolDay(input){
    let peopleNum = Number (input[0]);
    let entryFee = Number (input[1]);
    let chaiseLongueFee = Number (input[2]);
    let umbrellaFee = Number (input[3]);
    let umbrellasNum = Math.ceil(peopleNum/2);
    let chaiseLongueNum = Math.ceil(peopleNum * 0.75)
    let totalExpenses = (peopleNum*entryFee) + (chaiseLongueNum*chaiseLongueFee) + (umbrellasNum * umbrellaFee);
    console.log(`${totalExpenses.toFixed(2)} lv.`);
}
poolDay(["21",
"5.50",
"4.40",
"6.20"])
