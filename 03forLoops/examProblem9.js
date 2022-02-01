function examProblem(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toysCounter = 0
    let savedMoney = 0
    let stolenMoney = 0
    let money = 10

    for (let currentBday = 1; currentBday <= age; currentBday++) {
        if (currentBday % 2 === 0) {
            savedMoney += money;
            money += 10;
            stolenMoney++;
        } else {
            toysCounter++;
        }
    }
    let moneyFromToys = toysCounter * toyPrice
    let totalSaved = savedMoney + moneyFromToys - stolenMoney

    if (totalSaved >= washingMachine){
        console.log(`Yes! ${(totalSaved - washingMachine).toFixed(2)}`)
    } else {console.log(`No! ${(washingMachine - totalSaved).toFixed(2)}`)

    }
}
examProblem(["10", "180", "6"])