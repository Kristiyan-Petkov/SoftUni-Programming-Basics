function charity(input) {
    let days = input[0]
    let bakers = input[1]
    let cakes = input[2]
    let gauffres = input[3]
    let pancakes = input[4]

    let profitCakes = cakes*days*bakers*45
    let profitGauffres = gauffres*days*bakers*5.8
    let profitPancakes = pancakes*days*bakers*3.2
    let totalProfit = profitCakes+profitGauffres+profitPancakes


    console.log(totalProfit-totalProfit/8)
    

}
charity([131,5,9,33,46])