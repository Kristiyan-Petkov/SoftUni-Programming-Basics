function mobilePlans(input) {
    let contractDuration = input[0];
    let package = input[1];
    let internetAdded = input[2];
    let monthsNum = Number(input[3]);
    let pricePerMonth = 0;

    switch (package) {
        case "Small":
            if (contractDuration === "one") {
                pricePerMonth = 9.98;
            } else {
                pricePerMonth = 8.58;
            }
            if (internetAdded === "yes") {
                pricePerMonth += 5.50;
            }
            break;
        case "Middle":
            if (contractDuration === "one") {
                pricePerMonth = 18.99;
            } else {
                pricePerMonth = 17.09;
            }
            if (internetAdded === "yes") {
                pricePerMonth += 4.35;
            }
            break;
        case "Large":
            if (contractDuration === "one") {
                pricePerMonth = 25.98;
            } else {
                pricePerMonth = 23.59;
            }
            if (internetAdded === "yes") {
                pricePerMonth += 4.35;
            }
            break;
        case "ExtraLarge":
            if (contractDuration === "one") {
                pricePerMonth = 35.99;
            } else {
                pricePerMonth = 31.79;
            }
            if (internetAdded === "yes") {
                pricePerMonth += 3.85;
            }
            break;



    }

    if (contractDuration === "two") {
        pricePerMonth = pricePerMonth * 0.9625;
    }

    console.log(`${(pricePerMonth * monthsNum).toFixed(2)} lv.`)

}
mobilePlans(["two",
"Small",
"yes",
"20"])

