function mathPowers (input) {
    let powMax = Number (input[0]);

    for (let currentPower = 0; currentPower <= powMax; currentPower+=2){
        console.log(Math.pow(2,currentPower))
    }

}
mathPowers(["6"])