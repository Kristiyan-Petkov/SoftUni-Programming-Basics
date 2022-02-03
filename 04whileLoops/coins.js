function coins(input) {
    let change = Number(input[0]);
    let newValue = change*1000
    let coinsCount = 0

    while ((newValue/1000) <= change) {
        if (newValue >= 2000) {
            coinsCount++;
            newValue -= 2000;
        } else if (newValue >= 1000) {
            coinsCount++;
            newValue -= 1000;
        } else if (newValue >= 500) {
            coinsCount++;
            newValue -= 500;
        } else if (newValue >= 200) {
            coinsCount++;
            newValue -= 200;
        } else if (newValue >= 100) {
            coinsCount++;
            newValue -= 100;
        } else if (newValue >= 50) {
            coinsCount++;
            newValue -= 50;
        } else if (newValue >= 20) {
            coinsCount++;
            newValue -= 20;
        } else if (newValue >= 10) {
                coinsCount++;
                newValue -= 10;
                break;
        }
        if (newValue <= 0){
            break;
        }

    }
    console.log(coinsCount)

}
coins(["10.03"])