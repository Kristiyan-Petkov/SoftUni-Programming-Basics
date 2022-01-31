function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let cost = 0
    let dayType = 0

    switch (day){
        case "Monday": dayType = 1;break;
        case "Tuesday": dayType = 2;break;
        case "Wednesday": dayType = 3;break;
        case "Thursday": dayType = 4;break;
        case "Friday": dayType = 5;break;
        case "Saturday": dayType = 6;break;
        case "Sunday": dayType = 7;break;
    }




    if (dayType > 5 && dayType < 8) {
        switch (product) {
            case "banana": cost = quantity * 2.70;console.log(cost.toFixed(2));break;
            case "apple": cost = quantity * 1.25;console.log(cost.toFixed(2));break;
            case "orange": cost = quantity * 0.90;console.log(cost.toFixed(2));break;
            case "grapefruit": cost = quantity * 1.60;console.log(cost.toFixed(2));break;
            case "kiwi": cost = quantity * 3.00;console.log(cost.toFixed(2));break;
            case "pineapple": cost = quantity * 5.60;console.log(cost.toFixed(2));break;
            case "grapes": cost = quantity * 4.20;console.log(cost.toFixed(2));break;
            default:console.log("error");
        }
        

    } else if (dayType <= 5 && dayType >= 1){
        switch (product) {
            case "banana": cost = quantity * 2.50;console.log(cost.toFixed(2));break;
            case "apple": cost = quantity * 1.20;console.log(cost.toFixed(2));break;
            case "orange": cost = quantity * 0.85;console.log(cost.toFixed(2));break;
            case "grapefruit": cost = quantity * 1.45;console.log(cost.toFixed(2));break;
            case "kiwi": cost = quantity * 2.70;console.log(cost.toFixed(2));break;
            case "pineapple": cost = quantity * 5.50;console.log(cost.toFixed(2));break;
            case "grapes": cost = quantity * 3.85;console.log(cost.toFixed(2));break;
            default:console.log("error");
        }
       
    } else {
        console.log("error");
    }

}
fruitShop(["apple", "Tuesday", "2"])