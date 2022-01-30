function fruitMarket(input) {

    let straberriesPrice = input[0]
    let bananasKg = input[1]
    let orangesKg = input[2]
    let raspberriesKg = input[3]
    let strawberriesKg = input[4]

    let raspberriesPrice = straberriesPrice/2
    let orangesPrice = raspberriesPrice*0.6
    let bananasPrice = raspberriesPrice*0.2

    let costStrawberries = straberriesPrice*strawberriesKg
    let costRaspberries = raspberriesPrice*raspberriesKg
    let costOranges = orangesPrice*orangesKg
    let costBananas = bananasPrice*bananasKg

    console.log(costStrawberries+costRaspberries+costOranges+costBananas)

}
fruitMarket([48,10,3.3,6.5,1.7])