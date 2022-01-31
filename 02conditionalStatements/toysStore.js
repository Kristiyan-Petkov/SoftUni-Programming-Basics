function toyStore (input) {

    let vacationCost = Number (input[0])
    let puzzlesIncome = Number (input[1]) * 2.6
    let dollsIncome = Number (input[2]) * 3
    let teddyBearsIncome = Number (input[3]) * 4.1
    let minionsIncome = Number (input[4]) * 8.2
    let toyTrucksIncome = Number (input[5]) * 2

    let itemsInOrder = Number (input[1]) + Number (input[2]) + Number (input[3]) + Number (input[4]) + Number (input[5])
    let totalBeforeDiscount = puzzlesIncome + dollsIncome + teddyBearsIncome + minionsIncome + toyTrucksIncome
    let finalBudget = 0.00
    

    if (itemsInOrder >= 50) {
        finalBudget += ((totalBeforeDiscount*0.75)*0.9)
    } else {
        finalBudget += (totalBeforeDiscount*0.9)
    }
    
    let moneyLeft = finalBudget - vacationCost
    let lacking = vacationCost - finalBudget

    if (finalBudget >= vacationCost) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${lacking.toFixed(2)} lv needed.`)
    }
    
}
toyStore(["1000","100","20","30","120","50"])