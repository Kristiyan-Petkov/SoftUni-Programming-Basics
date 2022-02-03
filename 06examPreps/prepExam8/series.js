function series(input) {
    let budget = Number(input[0]);
    let seriesNum = Number(input[1]);
    let spent = 0;
    let index = 2;
    let currentMovie = input[index];
    index++;
    let currentPrice = Number (input[index]);
    for (let i = 0; i < seriesNum; i++){
        
        switch (currentMovie) {
            case "Thrones":
                spent += currentPrice * 0.5;
                break;
            case "Lucifer":
                spent += currentPrice * 0.6;
                break;
            case "Protector":
                spent += currentPrice * 0.7;
                break;
            case "TotalDrama":
                spent += currentPrice * 0.8;
                break;
            case "Area":
                spent += currentPrice * 0.9;
                break;
            default:
                spent += currentPrice;
                break;
        }
        
        index++;
        currentMovie = input[index];
        index++;
        currentPrice = Number (input[index]);
    }

    if (budget >= spent){
        console.log(`You bought all the series and left with ${(budget - spent).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(spent - budget).toFixed(2)} lv. more to buy the series!`);
    }

}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])
