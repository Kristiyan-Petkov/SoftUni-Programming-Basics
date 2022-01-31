function hotelRooms (input) {
    let month = input[0];
    let nights = Number (input[1]);
    let priceStudio = 0.00
    let priceApartment = 0.00

    switch (month) {
        case "May": 
        case "October": 
            if (nights > 14){
                priceStudio = (nights * 50)*0.7;
                priceApartment = (nights * 65)*0.9;
            } else if (nights > 7) {
                priceStudio = (nights * 50)*0.95;
                priceApartment = nights * 65;
            } else {
                priceStudio = nights * 50;
                priceApartment = nights * 65;
            };break;
        case "June": 
        case "September": 
            if (nights > 14){
                priceStudio = (nights * 75.20)*0.8;
                priceApartment = (nights * 68.70)*0.9;
            } else {
                priceStudio = nights * 75.20;
                priceApartment = nights * 68.70;
            };break;
        case "July": 
        case "August": 
            if (nights > 14){
                priceStudio = nights * 76;
                priceApartment = (nights * 77)*0.9;
            } else {
                priceStudio = nights * 76;
                priceApartment = nights * 77;
        };break;

        

    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}
hotelRooms(["May","15"])