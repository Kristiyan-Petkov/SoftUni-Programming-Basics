function filmingBudget (input) {

    let budget = Number (input[0])
    let actors = Number (input[1])
    let costumes = Number (input[2])
    let decor = budget * 0.1

    let finalCosts = 0.0

    if (actors > 150) {
        finalCosts += ((actors*costumes)*0.9 + decor)
    } else {
        finalCosts += ((actors*costumes) + decor)
    }

    let moneyLacking = finalCosts - budget
    let moneyLeft = budget - finalCosts

    if (finalCosts > budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${moneyLacking.toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }


}
filmingBudget(["100000","200","100"])