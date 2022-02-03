function safari(input) {
    let budget = Number (input[0]);
    let fuelLitresNeeded = Number (input[1]);
    let dayOfWeek = input[2];
    let initialPrice = 100 + (fuelLitresNeeded * 2.10);
    let coefficient = 0;

    switch (dayOfWeek){
        case "Saturday": coefficient = 0.9;break;
        case "Sunday": coefficient = 0.8;break;
    }

    let totalPice = initialPrice * coefficient;

    if (totalPice <= budget){
        console.log(`Safari time! Money left: ${(budget - totalPice).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(totalPice - budget).toFixed(2)} lv.`);
    }

}
safari(["1000", "10", "Sunday"])
