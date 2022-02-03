function fruitMarketV2(priceStrawberries, kgBananas, kgOranges, kgRaspberries, kgStrawberries) {
    
    let priceRaspberries = priceStrawberries / 2;
    let priceOranges = priceRaspberries * 0.6;
    let priceBananas = priceRaspberries * 0.2;

    let finalCost = (priceStrawberries * kgStrawberries) + (priceRaspberries * kgRaspberries) + (priceOranges * kgOranges) + (priceBananas * kgBananas);

    console.log(finalCost.toFixed(2));

}
fruitMarketV2(63.5,
    3.57,
    6.35,
    8.15,
    2.5)