function flowerShop(input) {
    let flowerType = input[0];
    let itemsNumber = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0.00;
    let discount = 0.00;
    let penalty = 0.00;
   
    //price check, before discount
    switch (flowerType) {
        case "Roses": price = itemsNumber * 5; break;
        case "Dahlias": price = itemsNumber * 3.80; break;
        case "Tulips": price = itemsNumber * 2.80; break;
        case "Narcissus": price = itemsNumber * 3; break;
        case "Gladiolus": price = itemsNumber * 2.50; break;
    }

    //discount
    if (itemsNumber >= 120) {
        switch (flowerType) {
            case "Roses": discount = price * 0.1; break;
            case "Tulips": discount = price * 0.15; break;
            case "Dahlias": discount = price * 0.15; break;
        }
    } else if (itemsNumber > 90) {
        switch (flowerType) {
            case "Roses": discount = price * 0.1; break;
            case "Tulips": discount = price * 0.15; break;
            case "Narcissus": penalty = price * 0.15; break;
            case "Dahlias": discount = price * 0.15; break;
        }
    } else if (itemsNumber > 80) {
        switch (flowerType) {
            case "Roses": discount = price * 0.1; break;
            case "Tulips": discount = price * 0.15; break;
            case "Narcissus": penalty = price * 0.15; break;
        
        }
    } else if (itemsNumber <= 80) {
        switch (flowerType) {
            case "Narcissus": penalty = price * 0.15; break;
            case "Gladiolus": penalty = price * 0.2; break;
        
        }
    }
    //solution
    let finalCost = price - discount + penalty;
    //if (discount > 0) {
    //    if (finalCost < budget) {
    //        console.log(`Hey, you have a great garden with ${itemsNumber} ${flowerType} and ${(budget - finalCost).toFixed(2)} leva left.`)
    //    } else if (finalCost > budget) {
    //        console.log(`Not enough money, you need ${(finalCost - budget).toFixed(2)} leva more.`)
    //    }
    //} else {
    //    if (finalCost < budget) {
    //       console.log(`Hey, you have a great garden with ${itemsNumber} ${flowerType} and ${(budget - finalCost).toFixed(2)} leva left.`)
    //    } else if (finalCost > budget) {
    //        console.log(`Not enough money, you need ${(finalCost - budget).toFixed(2)} leva more.`)
    //    }
    //}

    if (finalCost < budget) {
                console.log(`Hey, you have a great garden with ${itemsNumber} ${flowerType} and ${(budget - finalCost).toFixed(2)} leva left.`)
            } else if (finalCost > budget) {
              console.log(`Not enough money, you need ${(finalCost - budget).toFixed(2)} leva more.`)
    }
}
flowerShop(["Roses","55","250"])