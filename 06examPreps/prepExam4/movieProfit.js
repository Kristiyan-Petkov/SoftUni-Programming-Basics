function movieProfit(input) {
    let movieName = input[0];
    let projectionDays = Number(input[1]);
    let ticketsNum = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let distributorPercentage = (Number(input[4])) / 100;

    let grossIncome = (projectionDays * (ticketsNum * ticketPrice));
    let distributorShare = grossIncome * distributorPercentage
    let income = grossIncome - distributorShare

    console.log(`The profit from the movie ${movieName} is ${income.toFixed(2)} lv.`)

}
movieProfit(["The Programmer", "20", "500", "7.50", "7"])