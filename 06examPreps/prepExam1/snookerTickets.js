function snookerTickets(input) {
    let stage = input[0];
    let tickeType = input[1];
    let ticketsNum = Number(input[2]);
    let trophyPhoto = input[3];
    let ticketCost = 0;

    let discount = 0;


    switch (stage) {
        case "Quarter final":
            switch (tickeType) {
                case "Standard": ticketCost = 55.50; break;
                case "Premium": ticketCost = 105.20; break;
                case "VIP": ticketCost = 118.90; break;
            };
            break;
        case "Semi final":
            switch (tickeType) {
                case "Standard": ticketCost = 75.88; break;
                case "Premium": ticketCost = 125.22; break;
                case "VIP": ticketCost = 300.40; break;
            };
            break;
        case "Final":
            switch (tickeType) {
                case "Standard": ticketCost = 110.10; break;
                case "Premium": ticketCost = 160.66; break;
                case "VIP": ticketCost = 400; break;
            };
            break;
    }

    let price = ticketCost * ticketsNum;
    let finalPrice = price;

    if (price > 4000) {
        discount = 0.75;
        finalPrice = price * discount
    } else if (price > 2500) {
        discount = 0.9;
        finalPrice = price * discount
    }

    if (trophyPhoto === "Y" && price <= 4000) {
        finalPrice += ticketsNum * 40;
    }

    console.log(finalPrice.toFixed(2));

}
snookerTickets(["Semi final", "VIP", "9", "Y"])
