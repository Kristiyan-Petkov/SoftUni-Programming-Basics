function addBags(input){
    let overweightLuggagePrice = Number (input[0]);
    let luggageWeight = Number (input[1]);
    let daysToTrip = Number (input[2]);
    let luggageNum = Number (input[3]);
    let extraCostPerPiece = 0;

    if (luggageWeight < 10){
        extraCostPerPiece = overweightLuggagePrice * 0.2;
    } else if (luggageWeight >= 10 && luggageWeight <= 20){
        extraCostPerPiece = overweightLuggagePrice * 0.5;
    } else if (luggageWeight > 20){
        extraCostPerPiece = overweightLuggagePrice;
    }
    if (daysToTrip > 30){
        extraCostPerPiece *= 1.1;
    } else if (daysToTrip >= 7 && daysToTrip <= 30){
        extraCostPerPiece *= 1.15;
    } else if (daysToTrip < 7){
        extraCostPerPiece *= 1.4;
    }


    console.log(`The total price of bags is: ${(extraCostPerPiece * luggageNum).toFixed(2)} lv.`);
}
addBags(["30",
"18",
"15",
"2"])
