function fishingTrip(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);
    let price = 0.00;
    let even = people % 2;
    
    if (even === 0){
        switch (season) {
            case "Spring":
                if (people > 11) {
                    price = (3000 * 0.75)*0.95
                } else if (people > 6) {
                    price = (3000 * 0.85)*0.95
                } else {
                    price = (3000*0.9)*0.95
                }; break;
            case "Summer":
                if (people > 11) {
                    price = (4200 * 0.75)*0.95
                } else if (people > 6) {
                    price = (4200 * 0.85)*0.95
                } else {
                    price = (4200*0.9)*0.95
                }; break;
            case "Autumn":
                if (people > 11) {
                    price = 4200 * 0.75
                } else if (people > 6) {
                    price = 4200 * 0.85
                } else {
                    price = 4200 * 0.9
                }; break;
            case "Winter":
                if (people > 11) {
                    price = (2600 * 0.75)*0.95
                } else if (people > 6) {
                    price = (2600 * 0.85)*0.95
                } else {
                    price = (2600*0.9)*0.95
                }; break;

        }
    } else if (even !== 0) {
        switch (season) {
            case "Spring":
                if (people > 11) {
                    price = 3000 * 0.75
                } else if (people > 6) {
                    price = 3000 * 0.85
                } else {
                    price = 3000 * 0.9
                }; break;
            case "Summer":
                if (people > 11) {
                    price = 4200 * 0.75
                } else if (people > 6) {
                    price = 4200 * 0.85
                } else {
                    price = 4200 * 0.9
                }; break;
            case "Autumn":
                if (people > 11) {
                    price = 4200 * 0.75
                } else if (people > 6) {
                    price = 4200 * 0.85
                } else {
                    price = 4200 * 0.9
                }; break;
            case "Winter":
                if (people > 11) {
                    price = 2600 * 0.75
                } else if (people > 6) {
                    price = 2600 * 0.85
                } else {
                    price = 2600 * 0.9
                }; break;

        }


    }
    
    
    if (price <= budget) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    }

}
fishingTrip(["3600","Summer","7"])
