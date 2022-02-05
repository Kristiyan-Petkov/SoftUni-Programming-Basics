function finalCompetition(input) {
    let dancersNum = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let finalSum = 0;
    
    switch (place) {
        case "Bulgaria":
            if (season === "summer"){
                finalSum = (dancersNum * points) * 0.95;
            } else {
                finalSum = (dancersNum * points) * 0.92;
            }
            break;
        case "Abroad":
            if (season === "summer"){
                finalSum = ((dancersNum * points) * 1.5) * 0.90;
            } else {
                finalSum = ((dancersNum * points) * 1.5) * 0.85;
            }
            break;
    }
    let charity = finalSum * 0.75;
    let moneyPerDancer = (finalSum * 0.25) / dancersNum;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])


// Задача с вложени условни конструкции - Вложени условни конструкции, switch-case конструкция, логически оператори;