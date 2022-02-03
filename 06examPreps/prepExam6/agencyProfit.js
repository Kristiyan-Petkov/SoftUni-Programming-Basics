function agencyProfit (input){
    let agencyName = input[0];
    let adultTicketsNum = Number (input[1]);
    let childTicketsNum = Number (input[2]);
    let adultTicketPrice = Number (input[3]);
    let childTicketPrice = adultTicketPrice * 0.3;
    let serviceFee = Number (input[4]);
    let totalPrice = (adultTicketsNum * adultTicketPrice) + (childTicketsNum * childTicketPrice) + (adultTicketsNum + childTicketsNum)*serviceFee;
    let agencyProfit = totalPrice * 0.2;


    console.log(`The profit of your agency from ${agencyName} tickets is ${agencyProfit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
