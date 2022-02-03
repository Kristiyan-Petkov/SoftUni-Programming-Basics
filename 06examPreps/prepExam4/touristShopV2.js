function touristShop(input) {
    let budget = Number(input[0]);
    let index = 1;
    let currentInputPosition = input[index];
    let boughtProductsNum = 0;
    let sumOfPurchases = 0;

    while (currentInputPosition !== "Stop") {
        index++
        currentInputPosition = Number(input[index]);
        boughtProductsNum++;
        if (budget < currentInputPosition) {
            console.log("You don't have enough money!");
            console.log(`You need ${(currentInputPosition - budget).toFixed(2)} leva!`)
            return;
        } else if (boughtProductsNum % 3 === 0) {
            budget -= currentInputPosition / 2;
            sumOfPurchases += currentInputPosition / 2;
        } else if (boughtProductsNum % 3 !== 0){
            budget -= currentInputPosition;
            sumOfPurchases += currentInputPosition;
        }
        index++
        currentInputPosition = input[index];
    }

    console.log(`You bought ${boughtProductsNum} products for ${sumOfPurchases.toFixed(2)} leva.`);

}
touristShop(["153.20",
    "Backpack",
    "153.20",
    "Shoes",
    "60",
    "Sunglasses",
    "50",
    "Stop"])