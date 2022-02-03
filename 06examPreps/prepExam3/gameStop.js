function gameStop(input) {
    let gamesSold = Number(input[0]);
    let index = 1;
    let currentInputPosition = input[index];
    let salesHearthstone = 0;
    let salesFornite = 0;
    let salesOwerwatch = 0;
    let salesOthers = 0;

    for (let i = 1; i <= gamesSold; i++) {
        if (currentInputPosition === "Hearthstone") {
            salesHearthstone++;
            index++;
            currentInputPosition = input[index];
        } else if (currentInputPosition === "Fornite") {
            salesFornite++;
            index++;
            currentInputPosition = input[index];
        } else if (currentInputPosition === "Overwatch") {
            salesOwerwatch++;
            index++;
            currentInputPosition = input[index];
        } else {
            salesOthers++;
            index++;
            currentInputPosition = input[index];
        }
    }

    console.log(`Hearthstone - ${((salesHearthstone / gamesSold) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((salesFornite / gamesSold) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((salesOwerwatch / gamesSold) * 100).toFixed(2)}%`);
    console.log(`Others - ${((salesOthers / gamesSold) * 100).toFixed(2)}%`);

}
gameStop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

