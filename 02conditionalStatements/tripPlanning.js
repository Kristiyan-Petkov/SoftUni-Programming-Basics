function tripPlanning (input) {
    let budget = Number (input[0]);
    let season = input[1];
    let spendings = 0.00;

    switch (season){
        case "summer":
            if (budget > 1000){
                spendings = budget * 0.9
                console.log(`Somewhere in Europe`)
                console.log(`Hotel - ${spendings.toFixed(2)}`)
            } else if (budget <= 1000 && budget > 100) {
                spendings = budget * 0.4
                console.log(`Somewhere in Balkans`)
                console.log(`Camp - ${spendings.toFixed(2)}`)
            } else {
                spendings = budget * 0.3
                console.log(`Somewhere in Bulgaria`)
                console.log(`Camp - ${spendings.toFixed(2)}`)
            };break;
        case "winter":
            if (budget > 1000){
                spendings = budget * 0.9
                console.log(`Somewhere in Europe`)
                console.log(`Hotel - ${spendings.toFixed(2)}`)
            } else if (budget <= 1000 && budget > 100) {
                spendings = budget * 0.8
                console.log(`Somewhere in Balkans`)
                console.log(`Hotel - ${spendings.toFixed(2)}`)
            } else {
                spendings = budget * 0.7
                console.log(`Somewhere in Bulgaria`)
                console.log(`Hotel - ${spendings.toFixed(2)}`)
            };break;  
    }
}
tripPlanning(["50","summer"])