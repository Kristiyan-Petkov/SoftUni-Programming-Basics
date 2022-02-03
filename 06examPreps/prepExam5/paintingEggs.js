function paintingEggs(input) {
    let eggsSize = input[0];
    let eggsColor = input[1];
    let numBatches = Number(input[2]);
    let batchPrice = 0;

    switch (eggsSize) {
        case "Large":
            if (eggsColor === "Red") {
                batchPrice = 16;
                break;
            } else if (eggsColor === "Green") {
                batchPrice = 12;
                break;
            } else if (eggsColor === "Yellow") {
                batchPrice = 9;
                break;
            }
        case "Medium":
            if (eggsColor === "Red") {
                batchPrice = 13;
                break;
            } else if (eggsColor === "Green") {
                batchPrice = 9;
                break;
            } else if (eggsColor === "Yellow") {
                batchPrice = 7;
                break;
            }
        case "Small":
            if (eggsColor === "Red") {
                batchPrice = 9;
                break;
            } else if (eggsColor === "Green") {
                batchPrice = 8;
                break;
            } else if (eggsColor === "Yellow") {
                batchPrice = 5;
                break;
            }
    }

    let finalPrice = (numBatches * batchPrice) * 0.65;

    console.log(`${finalPrice.toFixed(2)} leva.`);
}
paintingEggs(["Large",
    "Red",
    "7"])
