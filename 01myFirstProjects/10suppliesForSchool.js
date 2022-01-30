function suppliesForSchool(input) {

    let packOfPens = input[0]
    let packOfMarkes = input[1]
    let litresOfCleaningLiquid = input[2]
    let discount = input[3] / 100
    let pensPrice = 5.8
    let markersPrice = 7.2
    let cleaningLiquidPrice = 1.2

    let pensCost = packOfPens * pensPrice
    let markersCost = packOfMarkes * markersPrice
    let liquidCost = litresOfCleaningLiquid * cleaningLiquidPrice

    let total = pensCost + markersCost + liquidCost

    console.log(total - (total * discount))



}
suppliesForSchool([2,3,4,25])