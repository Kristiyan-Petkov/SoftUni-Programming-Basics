function movieTickets (input){
    let projectionType = input[0]
    let rows = Number (input[1])
    let seats = Number (input[2])
    let capacity = rows * seats

    switch (projectionType){
        case "Premiere": console.log((capacity*12).toFixed(2));break;
        case "Normal": console.log((capacity*7.5).toFixed(2));break;
        case "Discount": console.log((capacity*5).toFixed(2));break;
    }

}
movieTickets(["Premiere","10","20"])