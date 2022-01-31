function skiTrip (input) {
    let daysStay = Number (input[0]);
    let roomType = input[1];
    let evaluation = input[2];
    let nightsStay = daysStay - 1
    let price = 0.00

        switch (roomType){
            case "room for one person": 
                price = nightsStay * 18;
                break;
            case "apartment": 
                if (daysStay < 10){
                    price = (nightsStay * 25)*0.7;
                } else if (daysStay >= 10 && daysStay <= 15){
                    price = (nightsStay * 25)*0.65;
                } else {
                    price = (nightsStay * 25)*0.5;
                }
                break;
            case "president apartment": 
                if (daysStay < 10){
                    price = (nightsStay * 35)*0.9;
                } else if (daysStay >= 10 && daysStay <= 15){
                    price = (nightsStay * 35)*0.85;
                } else {
                    price = (nightsStay * 35)*0.8;
                }
                break;

        }
    switch (evaluation) {
        case "positive":
            console.log((price*1.25).toFixed(2));break;
        case "negative":
            console.log((price*0.9).toFixed(2));break;
    }

}
skiTrip(["14","apartment","positive"])