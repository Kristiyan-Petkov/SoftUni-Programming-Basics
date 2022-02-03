function shopping (input){
    let budget = Number (input[0]);
    let videoCards = Number (input[1]);
    let processors = Number (input[2]);
    let ram = Number (input[3]);
    let videoCardsCost = videoCards * 250;
    let processorsCost = processors * (videoCardsCost * 0.35);
    let ramCost = ram * (videoCardsCost * 0.1);
    let totalCost = ramCost + processorsCost + videoCardsCost;
    if (videoCards > processors){
        totalCost *= 0.85;
    }
    if (totalCost <= budget){
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`);
    }

}
shopping(["920.45",
"3",
"1",
"1"])

