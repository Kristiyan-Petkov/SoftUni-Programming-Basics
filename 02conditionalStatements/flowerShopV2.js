function flowerShop(input) {
    let flowerType = input[0];
    let itemsNumber = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0.00;
   
    //price check, before discount
    switch (flowerType) {
        case "Roses": price = itemsNumber * 5; 
            if (itemsNumber > 80) {
            price = price * 0.90
            } break;
        case "Dahlias": price = itemsNumber * 3.80;
            if (itemsNumber > 90) {
            price = price * 0.85
            } break;
        case "Tulips": price = itemsNumber * 2.80;
            if (itemsNumber > 80) {
            price = price * 0.85
            } break;
        case "Narcissus": price = itemsNumber * 3;
            if (itemsNumber < 120) {
            price = price * 1.15
            } break;
        case "Gladiolus": price = itemsNumber * 2.50;
            if (itemsNumber < 80) {
            price = price * 1.20
            } break;
    }
    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${itemsNumber} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`)
    } else if (price > budget) {
      console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
    
}
flowerShop(["Roses","55","250"])