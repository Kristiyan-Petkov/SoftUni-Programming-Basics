function fruitMarket(input){
    let priceStrawberries = Number (input[0]);
    let kgBananas = Number (input[1]);
    let kgOranges = Number (input[2]);
    let kgRaspberries = Number (input[3]);
    let kgStrawberries = Number (input[4]);
    let priceRaspberries = priceStrawberries / 2;
    let priceOranges = priceRaspberries * 0.6;
    let priceBananas = priceRaspberries * 0.2;

    let finalCost = (priceStrawberries * kgStrawberries) + (priceRaspberries * kgRaspberries) + (priceOranges * kgOranges) + (priceBananas * kgBananas);

    console.log(finalCost.toFixed(2));

}
fruitMarket(['63.5',
    '3.57',
    '6.35',
    '8.15',
    '2.5'])
    
    
    
    
    