function accountBalance (input){
    let index = 0
    let contribution = input[index]
    let total = 0

    while (contribution !== "NoMoreMoney"){
        if (contribution < 0){
            console.log("Invalid operation!");break;
        } else {
            total += Number (contribution);
            let increase = Number (contribution);
            console.log(`Increase: ${increase.toFixed(2)}`);
        }
        index++
        contribution = input[index]
    }

    console.log(`Total: ${total.toFixed(2)}`)
}
accountBalance(["5.51","69.42","100","NoMoreMoney"])
