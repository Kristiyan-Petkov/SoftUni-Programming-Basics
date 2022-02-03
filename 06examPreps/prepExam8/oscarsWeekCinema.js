function oscarsWeekCinema(input) {
    let movie = input[0];
    let salleType = input[1];
    let ticketsSold = Number(input[2]);
    let ticketPrice = 0;

    switch (movie) {
        case "A Star Is Born":
            if (salleType === "normal"){
                ticketPrice = 7.50;
            } else if (salleType === "luxury"){
                ticketPrice = 10.50;
            } else if (salleType === "ultra luxury"){
                ticketPrice = 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (salleType === "normal"){
                ticketPrice = 7.35;
            } else if (salleType === "luxury"){
                ticketPrice = 9.45;
            } else if (salleType === "ultra luxury"){
                ticketPrice = 12.75;
            }
            break;
        case "Green Book":
            if (salleType === "normal"){
                ticketPrice = 8.15;
            } else if (salleType === "luxury"){
                ticketPrice = 10.25;
            } else if (salleType === "ultra luxury"){
                ticketPrice = 13.25;
            }
            break;
        case "The Favourite":
            if (salleType === "normal"){
                ticketPrice = 8.75;
            } else if (salleType === "luxury"){
                ticketPrice = 11.55;
            } else if (salleType === "ultra luxury"){
                ticketPrice = 13.95;
            }
            break;
    }
    let movieIncome = ticketsSold * ticketPrice;
    console.log(`${movie} -> ${movieIncome.toFixed(2)} lv.`);
}
oscarsWeekCinema(["A Star Is Born",
    "luxury",
    "42"])
