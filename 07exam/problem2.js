function footballKit (input){
    let tshirtPrice = Number (input[0]);
    let targetAmount = Number (input[1]);
    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.2;
    let shoesPrice = (tshirtPrice + shortsPrice) * 2;
    let totalPriceAfterDiscount = (tshirtPrice + shortsPrice + socksPrice + shoesPrice) * 0.85;

    if (totalPriceAfterDiscount >= targetAmount){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalPriceAfterDiscount.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(targetAmount - totalPriceAfterDiscount).toFixed(2)} lv. more.`);
    }
}
footballKit(["59.99",
"500"])


// Задача с условни конструкции - Условни конструкции (if, if-else), логически изрази, форматиран изход;