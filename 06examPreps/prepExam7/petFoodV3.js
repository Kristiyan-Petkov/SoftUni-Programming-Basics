function petFoodV3(input) {
    let days = Number(input[0]);
    let foodQuantity = Number(input[1]);
    let daysCountForBisquits = 0;
    let eatenBisquitsGr = 0;
    let eatenFoodTotal = 0;
    let eatenByDog = 0;
    let eatenByCat = 0;
    let tempDogAndCatOneDay = 0;
    let index = 2;
    let currentInputPosition = Number(input[index]);
    for (let i = 1; i <= days; i++) {
        daysCountForBisquits++;
        eatenFoodTotal += currentInputPosition;
        eatenByDog += currentInputPosition;
        tempDogAndCatOneDay += currentInputPosition;
        index++;
        currentInputPosition = Number(input[index]);
        eatenFoodTotal += currentInputPosition;
        eatenByCat += currentInputPosition;
        tempDogAndCatOneDay += currentInputPosition;
        if (daysCountForBisquits % 3 === 0) {
            eatenBisquitsGr = tempDogAndCatOneDay * 0.1;
        }
        tempDogAndCatOneDay = 0;
        index++;
        currentInputPosition = Number(input[index]);
    }
    let eatenFoodPercentage = eatenFoodTotal / foodQuantity;
    let eatenByDogPercentage = eatenByDog / eatenFoodTotal;
    let eatenByCatPercentage = eatenByCat / eatenFoodTotal;
    console.log(`Total eaten biscuits: ${Math.round(eatenBisquitsGr)}gr.`);
    console.log(`${(eatenFoodPercentage * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(eatenByDogPercentage * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(eatenByCatPercentage * 100).toFixed(2)}% eaten from the cat.`);
}
petFoodV3(['3',
    '1000',
    '300',
    '20',
    '100',
    '30',
    '110',
    '40',
])