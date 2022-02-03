function coffeeMachine(input) {
    let typeOfDrink = input[0];
    let sugar = input[1];
    let drinksNum = Number(input[2]);
    let price = 0;

    switch (typeOfDrink) {
        case "Cappuccino":
            if (sugar === 'Without') {
                price += 1 * drinksNum;
            } else if (sugar === 'Normal') {
                price += 1.2 * drinksNum;
            } else if (sugar === 'Extra') {
                price += 1.6 * drinksNum;
            }
            break;
        case "Tea":
            if (sugar === 'Without') {
                price += 0.5 * drinksNum;
            } else if (sugar === 'Normal') {
                price += 0.6 * drinksNum;
            } else if (sugar === 'Extra') {
                price += 0.7 * drinksNum;
            }
            break;
        case "Espresso":
            if (sugar === 'Without') {
                price += 0.90 * 0.65 * drinksNum;
            } else if (sugar === 'Normal') {
                price += 1 * drinksNum;
            } else if (sugar === 'Extra') {
                price += 1.20 * drinksNum;
            }
            if (drinksNum >= 5) {
                price *= 0.75
            }
            break;
    }
    if (price > 15) {
        price *= 0.8;
    }
    console.log(`You bought ${drinksNum} cups of ${typeOfDrink} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso",
    "Without",
    "10"])
