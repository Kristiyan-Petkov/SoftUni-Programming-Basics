function officePCsPurchase(input) {
    let budget = Number (input[0])
    let VGAs = Number (input[1])
    let processors = Number (input[2])
    let RAM = Number (input[3])

    let vgaCost = VGAs * 250
    let processorsCost = processors * (vgaCost*0.35)
    let ramPrice = RAM * (vgaCost*0.1)
    let costBeforeDiscount = vgaCost + processorsCost + ramPrice

    let finalCost = 0.0

    if (VGAs > processors) {
        finalCost += (costBeforeDiscount*0.85)
    } else {
        finalCost += costBeforeDiscount
    }

    let moneyLeft = budget - finalCost
    let moneyShort = finalCost - budget

    if (budget >= finalCost) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${moneyShort.toFixed(2)} leva more!`)
    }

}
officePCsPurchase(["900","2","1","3"])