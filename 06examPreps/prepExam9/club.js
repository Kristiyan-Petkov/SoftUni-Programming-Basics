function club (input){
    let target = Number (input[0]);
    let index = 1;
    let currentInputPosition = input[index];
    let income = 0;

    while (currentInputPosition !== 'Party!'){
        let drinkPrice = currentInputPosition.length;
        index++;
        currentInputPosition = Number (input[index]);
        if ((currentInputPosition * drinkPrice) % 2 !== 0){
            drinkPrice *= 0.75;
        }
        income += currentInputPosition * drinkPrice;
        if (income >= target){
            console.log('Target acquired.');
            console.log(`Club income - ${income.toFixed(2)} leva.`);
            return;
        }
        index++;
        currentInputPosition = input[index];
    }

    console.log(`We need ${(target - income).toFixed(2)} leva more.`);
    console.log(`Club income - ${income.toFixed(2)} leva.`);

}
club(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])
