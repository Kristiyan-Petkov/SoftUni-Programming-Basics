function travelAgency(input) {
    let destination = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let pricePerDay = 0;

    if (days < 1){
        console.log('Days must be positive number!');
        return;
    }
    switch (destination) {
        case "Bansko":
        case "Borovets":
            if (package === 'withEquipment'){
                if (vip === 'yes'){
                    pricePerDay = 90;
                } else {
                    pricePerDay = 100;
                }
            } else if (package === 'noEquipment'){
                if (vip === 'yes'){
                    pricePerDay = 76;
                } else {
                    pricePerDay = 80;
                }
            } else {
                console.log('Invalid input!');
                return;
            }
            break;
        case "Varna":
        case "Burgas":
            if (package === 'withBreakfast'){
                if (vip === 'yes'){
                    pricePerDay = 130 * 0.88;
                } else {
                    pricePerDay = 130;
                }
            } else if (package === 'noBreakfast'){
                if (vip === 'yes'){
                    pricePerDay = 93;
                } else {
                    pricePerDay = 100;
                }
            } else {
                console.log('Invalid input!');
                return;
            }
            break;
        default:
            console.log('Invalid input!');
            return;
    }

    let finalPrice = days * pricePerDay;
    if (days > 7){
        finalPrice -= pricePerDay;
    }
    console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);

}
travelAgency(["Borovets",
    "noEquipment",
    "yes",
    "6"])
