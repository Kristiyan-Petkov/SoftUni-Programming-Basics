function filmPremiere (input){
    let movie = input[0];
    let package = input[1];
    let numberTickets = Number (input[2]);
    let ticketPriceTotal = 0;


    switch (package){
        case "Drink": 
            if (movie === "John Wick"){
                ticketPriceTotal = 12 * numberTickets;
            } else if (movie === "Star Wars"){
                if (numberTickets >= 4){
                    ticketPriceTotal = (18 * numberTickets) * 0.7;
                } else {
                    ticketPriceTotal = 18 * numberTickets;
                }
            } else if (movie === "Jumanji"){
                if (numberTickets === 2){
                    ticketPriceTotal = (9 * numberTickets) * 0.85;
                } else {
                    ticketPriceTotal = 9 * numberTickets;
                }
            }
            break;
        case "Popcorn": 
            if (movie === "John Wick"){
                ticketPriceTotal = 15 * numberTickets;
            } else if (movie === "Star Wars"){
                if (numberTickets >= 4){
                    ticketPriceTotal = (25 * numberTickets) * 0.7;
                } else {
                    ticketPriceTotal = 25 * numberTickets;
                }
            } else if (movie === "Jumanji"){
                if (numberTickets === 2){
                    ticketPriceTotal = (11 * numberTickets) * 0.85;
                } else {
                    ticketPriceTotal = 11 * numberTickets;
                }
            }
            break;
        case "Menu": 
            if (movie === "John Wick"){
                ticketPriceTotal = 19 * numberTickets;
            } else if (movie === "Star Wars"){
                if (numberTickets >= 4){
                    ticketPriceTotal = (30 * numberTickets) * 0.7;
                } else {
                    ticketPriceTotal = 30 * numberTickets;
                }
            } else if (movie === "Jumanji"){
                if (numberTickets === 2){
                    ticketPriceTotal = (14 * numberTickets) * 0.85;
                } else {
                    ticketPriceTotal = 14 * numberTickets;
                }
            }

            break;
    }
    console.log(`Your bill is ${ticketPriceTotal.toFixed(2)} leva.`)
}
filmPremiere(["John Wick","Drink","6"])
