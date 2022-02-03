function petFoodV2(input){
    let days = Number (input[0]);
    let foodQuantityGr = Number (input[1]);
    let daysCountForBisquits = 0;
    let countForSwitch = 0;
    let eatenBisquitsGr = 0;
    let eatenFoodTotal = 0;
    let eatenByDog = 0;
    let eatenByCat = 0;
    let tempDailyEaten = 0;
    let continueWhile = input.length - 3;
    let index = 2;
    let currentInputPosition = Number (input[index]);
    while (continueWhile !== 1){
        daysCountForBisquits++;
        countForSwitch++;
        eatenFoodTotal += currentInputPosition;
        if (countForSwitch % 2 === 0){
            eatenByDog += currentInputPosition;
            tempDailyEaten += currentInputPosition;
            index++;
            currentInputPosition = Number (input[index]);
        } else if (daysCountForBisquits % 3 === 0){
            eatenByCat += currentInputPosition;
            tempDailyEaten += currentInputPosition;
            eatenBisquitsGr = tempDailyEaten * 0.1;
            index++;
            currentInputPosition = Number (input[index]);
            tempDailyEaten = 0;
        } else if (countForSwitch % 2 !== 0){
            eatenByCat += currentInputPosition;
            tempDailyEaten += currentInputPosition;
            index++;
            currentInputPosition = Number (input[index]);
            tempDailyEaten = 0;
        }
        continueWhile--;
    }
    let percentageFoodEaten = (eatenFoodTotal / foodQuantityGr) * 100;
    let percentageEatenByDog = (eatenByDog / eatenFoodTotal) * 100;
    let percentageEatenByCat = (eatenByCat / eatenFoodTotal) * 100

    console.log(`Total eaten biscuits: ${Math.round(eatenBisquitsGr)}gr.`);
    console.log(`${percentageFoodEaten.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentageEatenByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentageEatenByCat.toFixed(2)}% eaten from the cat.`);

}
petFoodV2(['3',
    '1000',
    '300',
    '20',
    '100',
    '30',
    '110',
    '40',
    ])