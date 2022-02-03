function touristShop(input) {
    let budget = Number(input[0]);
    let index = 1;
    let currentInputPosition = input[index];
    let boughtProductsNum = 0;
    let sumOfPurchases = 0;

    while (currentInputPosition !== "Stop") {
        let productName = input[index++];
        
        let productPrice = Number (input[index]);
        boughtProductsNum++;
        if (boughtProductsNum % 3 === 0){
            productPrice = productPrice / 2;
        }
        budget -= productPrice;
        sumOfPurchases += productPrice;

        if (budget < 0){
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            break;
        }




        // currentInputPosition = Number(input[index]);
        // boughtProductsNum++;
        // if (budget < currentInputPosition) {
        //     console.log("You don't have enough money!");
        //     console.log(`You need ${(currentInputPosition - budget).toFixed(2)} leva!`)
        //     return;
        // } else if (boughtProductsNum % 3 === 0) {
        //     budget -= currentInputPosition / 2;
        //     sumOfPurchases += currentInputPosition / 2;
        // } else {
        //     budget -= currentInputPosition;
        //     sumOfPurchases += currentInputPosition;
        // }
        index++
        currentInputPosition = input[index];
    }

    if (currentInputPosition === "Stop"){
    console.log(`You bought ${boughtProductsNum} products for ${sumOfPurchases.toFixed(2)} leva.`);
    }
}
touristShop(["153.20",
    "Backpack",
    "153.20",
    "Shoes",
    "60",
    "Sunglasses",
    "50",
    "Stop"])