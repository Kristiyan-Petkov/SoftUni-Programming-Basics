function multiplyTable (input){
    let num = Number (input[0]);
    let numAsString = "" + num;
    // let switchedString = "";
    // for (let i = 2; i >= 0; i--){
    //     switchedString += numAsString[i];
    // }
    let switchedNum1 = Number (numAsString[2]);
    let switchedNum2 = Number (numAsString[1]);
    let switchedNum3 = Number (numAsString[0]);

    for (let a = 1; a <= switchedNum1; a++){
        for (let b = 1; b <= switchedNum2; b++){
            for (let c = 1; c <= switchedNum3; c++){
                let result = a * b * c;
                console.log(`${a} * ${b} * ${c} = ${result};`);
            }
        }
    }

}
multiplyTable(["324"])