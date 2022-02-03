function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let finalCost = 0;
    switch (destination) {
        case "Dubai":
            if (season === "Winter"){
                finalCost = (days * 45000) * 0.7;
            } else {
                finalCost = (days * 40000) * 0.7;
            }
            break;
        case "Sofia":
            if (season === "Winter"){
                finalCost = (days * 17000) * 1.25;
            } else {
                finalCost = (days * 12500) * 1.25;
            }
            break;
        case "London":
            if (season === "Winter"){
                finalCost = days * 24000;
            } else {
                finalCost = days * 20250;
            }
            break;
    }

    if (finalCost <= budget){
        console.log(`The budget for the movie is enough! We have ${(budget - finalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(finalCost - budget).toFixed(2)} leva more!`);
    }
}
movieDestination(['400000',
    'Sofia',
    'Winter',
    '20'])