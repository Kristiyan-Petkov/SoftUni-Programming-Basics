function christmasPreparation (input){
    let wrappingPaperRolls = Number (input[0]);
    let clothRolls = Number (input[1]);
    let glueL = Number (input[2]);
    let discountPercentage = Number (input[3]) / 100;
    let paperCost = wrappingPaperRolls * 5.80;
    let clothCost = clothRolls * 7.20;
    let glueCost = glueL * 1.20;
    let totalCost = (paperCost + clothCost + glueCost) * (1 - discountPercentage);

    console.log(totalCost.toFixed(3));

}
christmasPreparation(["4",
"2",
"5",
"13"])

// Задача с прости операции и пресмятания