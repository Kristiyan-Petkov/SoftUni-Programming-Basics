function computerFirm(input) {
    let computerModelsNum = Number(input[0]);
    let salesDone = 0;
    let ratingsSum = 0;

    for (let i = 1; i <= computerModelsNum; i++) {
        let currentModel = "" + input[i];
        let rating = Number(currentModel[currentModel.length - 1]);
        ratingsSum += rating;
        let potentialSales = 0;
        // if (currentModel.length === 3) {
            potentialSales = Number (currentModel[0] + currentModel[1]);
            // console.log(rating);
            // console.log(typeof(potentialSales));
            // console.log(potentialSales);
            // console.log('-------');
        // } else {
        //     potentialSales = Number(currentModel[0]);
        // }
        switch (rating) {
            case 2:
                break;
            case 3:
                salesDone += potentialSales * 0.5;
                break;
            case 4:
                salesDone += potentialSales * 0.7;
                break;
            case 5:
                salesDone += potentialSales * 0.85;
                break;
            case 6:
                salesDone += potentialSales;
                break;
        }
        // console.log(rating);
        // console.log(ratingsSum);
        // console.log("------");
    }
    let averageRating = ratingsSum / computerModelsNum;
    console.log(salesDone.toFixed(2));
    console.log(averageRating.toFixed(2));
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])
